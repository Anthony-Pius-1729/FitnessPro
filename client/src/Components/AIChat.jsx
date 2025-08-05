import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";
import AIResponse from "./AIResponse";
import UserResponse from "./UserResponse";

const AIChat = () => {
  const [aiMessage, setAiMessage] = useState("");
  const [Message, setMessage] = useState([]);
  const [userText, setUserText] = useState("");
  const [loading, setLoading] = useState(false);
  const [AiChatHistory, setAiChatHistory] = useState([]);
  const [UserChatHistory, setUserChatHistory] = useState([]);
  const [userTyping, setUserTyping] = useState(false);
  const [midDisplay, setMidDisplay] = useState(true);

  async function getMessage(UserChatMessage) {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/AI-CHAT/freddyAI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: UserChatMessage }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const message = await res.json();
      return message;
    } catch (error) {
      console.log("Error has occurred: ", error);
      throw error;
    } finally {
    }
  }

  const handleChange = (e) => {
    setUserText(e.currentTarget.value);
  };

  const handleClick = async (e) => {
    setMidDisplay(false);
    const currentUserText = userText;
    setMessage((prevMessages) => [
      ...prevMessages,
      { text: currentUserText, sender: "User" },
    ]);
    setUserText("");

    const AiResponse = await getMessage(currentUserText);
    setLoading(false);

    setMessage((prevMessages) => [
      ...prevMessages,
      { text: AiResponse, sender: "AI" },
    ]);
  };

  console.log(UserChatHistory);

  return (
    <>
      <div className="mx-14 mb-10  mt-0">
        <div className="my-6 p-6 grid grid-cols-4 border-2 min-h-[90vh] bg-gray-100  shadow-md shadow-gray-200 rounded-lg border-green-300">
          {!midDisplay && (
            <div className="col-span-1 overflow-y-scroll">
              <h1>Chat History</h1>
            </div>
          )}
          {/* <div className="h-[50rem] col-span-1 w-1.5 bg-amber-100"></div> */}
          <div
            className={` ${
              midDisplay
                ? `col-span-4 w-[80%] ml-auto mr-auto`
                : `col-span-3 w-full`
            }  relative  h-full overflow-y-scroll flex flex-col transition-transform ease-in-out`}
          >
            {/* <h1>Chat Area</h1> */}
            {/* <div className="w-full h-0.5 bg-green-300 my-3.5"></div> */}

            {/* AI CHAT STARTS HERE BROSKI */}
            <div className="overflow-y-scroll h-[45rem] w-full p-4 mb-4  rounded-sm">
              <div className="">
                {Message.map((chat, index) => (
                  <div
                    key={index}
                    className={
                      chat.sender === "User"
                        ? "flex justify-end  overflow-y-scroll"
                        : "flex justify-start   overflow-y-scroll"
                    }
                  >
                    {chat.sender === "User" ? (
                      <UserResponse userMessage={chat.text} loading={loading} />
                    ) : (
                      <AIResponse aiMessage={chat.text} loading={loading} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`absolute ${
                midDisplay ? `bottom-1/2` : `bottom-2.5`
              } w-full`}
            >
              {midDisplay && (
                <>
                  <h1 className="font-extrabold text-2xl text-center text-green-600">
                    Freddy
                  </h1>
                  <p className="text-gray-400 text-sm text-center font-semibold mb-4">
                    {" "}
                    Your personal AI gym & diet buddy
                  </p>
                </>
              )}
              <div className="flex justify-between w-full gap-x-8 ">
                <input
                  onChange={handleChange}
                  value={userText}
                  type="text"
                  className="bg-gray-200 p-6 w-full focus:outline-0 focus:ring-0 rounded-lg "
                />
                <button
                  onClick={handleClick}
                  className="p-4 bg-green-200 font-semibold border-2 border-green-600 rounded-lg inline w-38"
                >
                  <SendHorizontal className="inline mr-1.5 text-green-600" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;
