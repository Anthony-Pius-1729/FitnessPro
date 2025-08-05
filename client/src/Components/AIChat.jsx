import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";
import AIResponse from "./AIResponse";
import UserResponse from "./UserResponse";

const AIChat = () => {
  const [aiMessage, setAiMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userText, setUserText] = useState("");
  const [loading, setLoading] = useState(false);
  const [AiChatHistory, setAiChatHistory] = useState([]);
  const [UserChatHistory, setUserChatHistory] = useState([]);
  const [userTyping, setUserTyping] = useState(false);

  async function getMessage({ UserChatMessage }) {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/AI-CHAT/freddyAI", {
        method: "POST",
        body: JSON.stringify({ message: UserChatMessage }),
      });
      const message = await res.json();
      return message;
    } catch (error) {
      console.log("Error has occured: ", error);
    }
  }

  const handleChange = (e) => {
    setUserText(e.currentTarget.value);
  };

  const handleClick = async (e) => {
    setUserTyping(true);
    setUserText(e.currentTarget.value);
    setUserMessage(userText);
    UserChatHistory.push(userMessage);

    console.log(UserChatHistory);
    const AiResponse = await getMessage(userMessage);

    setLoading(false);
    setUserTyping(false);

    setAiMessage(AiResponse);
    AiChatHistory.push(AiResponse);
    // console.log("Button clicked");
  };

  const latestMessageIndex = UserChatHistory.length;
  const latestAiMessageIndex = AiChatHistory.length;

  console.log(UserChatHistory);

  return (
    <>
      <div className="mx-14 mt-10 ">
        <h1 className="font-extrabold text-2xl text-center text-green-600">
          Freddy
        </h1>
        <p className="text-gray-400 text-sm text-center font-semibold ">
          {" "}
          Your personal AI gym & diet buddy
        </p>

        <div className="my-6 p-6 grid grid-cols-4 border-2 min-h-[50rem]  shadow-md shadow-gray-200 rounded-lg border-amber-100">
          <div className="col-span-1 overflow-y-scroll">
            <h1>Chat History</h1>
          </div>
          {/* <div className="h-[50rem] col-span-1 w-1.5 bg-amber-100"></div> */}
          <div className="col-span-3  relative w-full h-full overflow-y-scroll flex flex-col ">
            <h1>Chat Area</h1>
            <div className="w-full h-0.5 bg-amber-200 my-3.5"></div>

            {/* AI CHAT STARTS HERE BROSKI */}
            <div className="overflow-y-scroll p-4">
              <div className="">
                <div className="flex justify-end ">
                  <UserResponse
                    userMessage={
                      UserChatHistory[
                        latestMessageIndex > 0 ? latestMessageIndex - 1 : 0
                      ]
                    }
                    userHistory={UserChatHistory}
                  />
                </div>
                <div className="flex justify-start">
                  <AIResponse
                    aiMessage={aiMessage}
                    loading={loading}
                    AiHistory={AiChatHistory}
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-2.5 w-full">
              <div className="flex justify-between w-full gap-x-8 ">
                <input
                  onChange={handleChange}
                  // value={userText}
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
