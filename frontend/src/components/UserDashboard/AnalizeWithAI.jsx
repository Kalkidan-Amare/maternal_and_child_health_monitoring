import React, { useEffect, useRef, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import ChatResponse from "./ChatResponse";
import { useMutation } from "react-query";
import { postData } from "../hooks/useDjango";


const AnalizeWithAI = () => {
  
  const mutation = useMutation((newComplaint) => postData('analysis/ask_question/', newComplaint), {
    onSuccess: (data) => {
      let botMessage = { role: 'bot', text: data.data.answer };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    },
  });

  let [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const messagesEndRef = useRef(null);

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  const submitData = (event) => {
    event.preventDefault();
    if (prompt.trim() === '') return;
    let userMessage = { role: 'human', text: prompt };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    mutation.mutate({ question: prompt });
    setPrompt("");
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div>
      <div className="min-h-screen relative">
        <div className="h-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="-mt-20 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-medium text-xl">Ade</p>

            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Welcome to Ade AI
            </h1>
            <p className="mt-3 text-gray-600">
              Your AI-powered copilot for analylizing data
            </p>
          </div>


          <ul className="mt-16 space-y-5">
            <li className="flex gap-x-2 sm:gap-x-4">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
              >
                <rect
                  x="2"
                  y="7"
                  width="20"
                  height="14"
                  rx="2"
                  ry="2"
                  fill="#2563EB"
                />
                <rect
                  x="7"
                  y="2"
                  width="10"
                  height="5"
                  rx="2"
                  ry="2"
                  fill="#2563EB"
                />
                <circle cx="8.5" cy="13.5" r="1.5" fill="white" />
                <circle cx="15.5" cy="13.5" r="1.5" fill="white" />
                <rect
                  x="10"
                  y="16"
                  width="4"
                  height="1.5"
                  rx="0.75"
                  ry="0.75"
                  fill="white"
                />
              </svg>

              <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                <h2 className="font-medium text-gray-800 dark:text-white">
                  How can we help?
                </h2>
                <div className="space-y-1.5">
                  <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                    You can ask questions like:
                  </p>
                  <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                    <li className="text-sm text-gray-800 dark:text-white">
                      What's Ade?
                    </li>

                    <li className="text-sm text-gray-800 dark:text-white">
                      What I can Ade chatbot do?
                    </li>

                    <li className="text-sm text-gray-800 dark:text-white">
                      Is there a PRO version?
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {messages.map((val)=><ChatResponse text={val.text} role={val.role} key={Math.random()}/>)}
            <div ref={messagesEndRef}></div>
          </ul>
        </div>

        <footer className="max-w-4xl mx-auto sticky bottom-0 z-10 border-t border-gray-200 px-4 sm:px-6 lg:px-0 dark:bg-neutral-900 dark:border-neutral-700">
          <div className="relative flex flex-row">
            <textarea onChange={handleChange} value={prompt}
              className="p-4 pb-12 block w-full resize-none pr-10 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Ask me anything..."
            ></textarea>

            <div className="absolute  right-px  p-2 rounded-b-lg dark:bg-neutral-900">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-1">
                  <button onClick={submitData}
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AnalizeWithAI;
