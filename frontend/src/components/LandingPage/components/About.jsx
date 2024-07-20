import React from "react";

const About = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900 mb-10 md:mb-32" id="about">
        <div class="grid max-w-screen-xl px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-6">
            <header className="flex flex-col pl-8 max-md:pl-5 max-md:max-w-full">
              <h2 className="text-2xl leading-9 text-emerald-700 max-md:max-w-full">
                About Us
              </h2>
              <h1 className="mt-2 text-5xl font-semibold text-black leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                We Transform Child Health Data into Actionable Insights
              </h1>
            </header>
            <p className="mt-8 text-base leading-6 text-zinc-700 max-md:max-w-full">
              At Ade, we are dedicated to transforming the way health data for
              children under the age of 5 is collected, analyzed, and utilized.
              Our mission is to empower NGOs and companies with the tools they
              need to make informed decisions that can positively impact child
              health globally.
            </p>
            <div className="flex flex-col justify-center mt-8 rounded-sm border-4 border-emerald-700 border-solid max-md:max-w-full">
              <div className="flex-wrap gap-y-5 justify-between  max-md:max-w-full md:flex-nowrap flex">
                <div class="flex flex-col  rounded-xl p-4  w-full">
                  <h4 class="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                    Free Plan
                  </h4>
                  <span class="mt-2  text-gray-800 font-semibold dark:text-neutral-200">
                    <span className="font-bold text-5xl">$0</span> /month
                  </span>

                  <ul class="mt-2 space-y-2.5 text-sm">
                    <li class="flex space-x-2">
                      <svg
                        class="flex-shrink-0 mt-0.5 size-4 text-emerald-600 dark:text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span class="text-gray-800 dark:text-neutral-400">
                        Access to Analyzed data
                      </span>
                    </li>

                    <li class="flex space-x-2">
                      <svg
                        class="flex-shrink-0 mt-0.5 size-4 text-emerald-600 dark:text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span class="text-gray-800 dark:text-neutral-400">
                        Basic AI Analysis Bot
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="flex flex-col  rounded-xl p-4  w-full">
                  <h4 class="font-medium text-lg text-gray-800 dark:text-neutral-200">
                    Basic Plan
                  </h4>
                  <span class="mt-2 text-gray-800 font-semibold dark:text-neutral-200">
                    <span className="font-bold text-4xl">$29.99</span> /month
                  </span>

                  <ul class="mt-2 space-y-2.5 text-sm">
                    <li class="flex space-x-2">
                      <svg
                        class="flex-shrink-0 mt-0.5 size-4 text-emerald-600 dark:text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span class="text-gray-800 dark:text-neutral-400">
                        Access to data collection forms
                      </span>
                    </li>

                    <li class="flex space-x-2">
                      <svg
                        class="flex-shrink-0 mt-0.5 size-4 text-emerald-600 dark:text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span class="text-gray-800 dark:text-neutral-400">
                        AI data Analysis
                      </span>
                    </li>

                    <li class="flex space-x-2">
                      <svg
                        class="flex-shrink-0 mt-0.5 size-4 text-emerald-600 dark:text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span class="text-gray-800 dark:text-neutral-400">
                        Standard Visualizations
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-6 lg:flex justify-center">
            <img src="/images/About_us.png" alt="mockup" />
          </div>
        </div>
        <div className="px-4 max-w-screen-xl mx-auto">

        <button
          type="button"
          class="py-4 px-6 inline-flex items-center gap-x-2 rounded-br-3xl border border-gray-200 text-primary text-xl bg-primary text-white hover:border-primary hover:bg-emerald-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
        >
          Get Started
        </button>
        </div>
      </section>
    </div>
  );
};

export default About;
