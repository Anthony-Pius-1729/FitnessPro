import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { SendHorizontal, Plus, ChevronRight } from "lucide-react";
import AIResponse from "./AiResponse";
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
  const [topic, setTopic] = useState("");
  const chatHistorySide = [
    {
      message: "",
    },
  ];

  const [topicHistory, setTopicHistory] = useState(chatHistorySide);

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

  // useEffect(() => {
  //   const newTopic = "New Topic";
  //   setTopicHistory((prev) => [...prev, newTopic]);
  // }, []);

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

    try {
      const res = await fetch("http://localhost:8080/AI-CHAT/topic-generator", {
        method: "POST",
        body: JSON.stringify({ message: userText }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resValue = await res.json();
      console.log(resValue);
      setTopic(resValue);
      if (chatHistorySide.length >= 2) {
        setTopicHistory((prev) => [...prev, { message: resValue }]);
      } else {
        setTopicHistory((prev) => [{ message: resValue }]);
      }
    } catch (error) {
      console.log("Error occured", error);
      throw new Error("Error fetching data");
    }
  };

  // console.log(UserChatHistory);

  const handleChatHistory = async () => {
    setMessage([]);
    setMidDisplay(true);
    const newTopic = topic;
    if (chatHistorySide.length >= 1 && chatHistorySide.message === "") {
      setTopicHistory((prev) => [...prev, { message: newTopic }]);
    } else {
      setTopicHistory((prev) => [{ message: newTopic }]);
    }
    // setTopicHistory((prev) => [...prev, { message: newTopic }]);
    console.log("Handle Chat History ");
  };

  return (
    <>
      <div className="mx-14 mb-10  mt-0">
        <div className="my-6 py-6 px-4 grid grid-cols-4 border-2 h-[80vh] min-h-[85vh] bg-gray-100  shadow-md shadow-gray-200 rounded-lg border-green-300">
          <div className="col-span-1 pr-2 h-full overflow-clip border-r-2 border-r-green-400">
            <div className="flex justify-between items-center">
              <h1 className="font-bold">Chat History</h1>
              <button
                onClick={handleChatHistory}
                className=" px-3 py-2  cursor-pointer  bg-green-200 rounded-md border-[1px] border-green-500"
              >
                <Plus className="size-5" />
              </button>
            </div>

            <div className=" p-2 my-4 rounded h-[60rem] overflow-y-scroll">
              {topicHistory.map((item) => {
                return (
                  <>
                    <div className="mb-4 mx-2 bg-gray-200  p-4 rounded flex justify-between items-center">
                      <p className="font-semibold">
                        {" "}
                        <ReactMarkdown>{item.message}</ReactMarkdown>
                      </p>

                      <ChevronRight className="text-green-500 size-6" />
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {/* <div className="h-[50rem] col-span-1 w-1.5 bg-amber-100"></div> */}
          <div
            className={` ${
              midDisplay
                ? `col-span-3 w-[60%] ml-auto mr-auto`
                : `col-span-3 w-full`
            }  relative  h-full overflow-y-scroll flex flex-col transition-transform ease-in-out`}
          >
            {/* <h1>Chat Area</h1> */}
            {/* <div className="w-full h-0.5 bg-green-300 my-3.5"></div> */}

            {/* AI CHAT STARTS HERE BROSKI */}
            <div className="overflow-y-scroll h-[45rem] w-full p-4 mb-10  rounded-sm">
              <div className="w-full mb-5">
                {Message.map((chat, index) => (
                  <div
                    key={index}
                    className={
                      chat.sender === "User"
                        ? "flex justify-end  overflow-y-scroll ml-48 transition-all duration-500 ease-in-out "
                        : "flex justify-start   overflow-y-scroll  w-1/3 transition-all duration-500 ease-in-out"
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
                midDisplay ? `bottom-1/2 ` : `bottom-2.5`
              } w-full transition-normal delay-200 duration-700 ease-in-out`}
            >
              {midDisplay && (
                <>
                  <h1 className="font-extrabold text-3xl text-center text-green-600 mb-0.5">
                    Freddy
                  </h1>
                  <p className="text-gray-400 text-sm text-center font-semibold mb-4">
                    {" "}
                    Your personal AI gym & diet buddy
                  </p>
                </>
              )}
              <div className="flex justify-between w-full gap-x-8 p-1 backdrop-blur-sm bg-white/40 ">
                <input
                  onChange={handleChange}
                  value={userText}
                  type="text"
                  className="bg-gray-200 p-6 w-full mx-4 focus:outline-0 focus:ring-0 rounded-lg "
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
