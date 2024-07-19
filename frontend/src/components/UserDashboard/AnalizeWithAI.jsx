import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const AnalizeWithAI = () => {
  return (
    <div>
      <div class="h-screen flex flex-col pb-6">
        <div class="h-full flex flex-col justify-center">
          <div class="-mt-20 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
           <p className="font-medium text-xl">LittleLives</p>

            <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">
              Welcome to LittleLives AI
            </h1>
            <p class="mt-3 text-gray-600">
              Your AI-powered copilot for analylizing data
            </p>
          </div>

          <div class="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative">
              <input
                type="text"
                class="p-4 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Ask me anything..."
              />
              <div class="absolute top-1/2 end-2 -translate-y-1/2">
                <button
                  type="button"
                  class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                >
                 <FaCircleArrowUp className="w-8 h-8"/>
                </button>
               
              </div>
            </div>
          </div>
        </div>

        <footer class="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
          {/* <p class="text-xs text-gray-600">
            © 2024 Preline. A product of{" "}
            <a
              class="text-gray-800 decoration-2 hover:underline font-semibold"
              href="http://htmlstream.com/"
              target="_blank"
            >
              Htmlstream
            </a>
            .
          </p> */}
        </footer>
      </div>
    </div>
  );
};

export default AnalizeWithAI;
