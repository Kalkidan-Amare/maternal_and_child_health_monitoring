import React from "react";
import { BarChartExampleWithCustomColor } from './Charts/BarChartExampleWithCustomColor';
import { LineChartUsageExample } from './Charts/LineChartUsageExample';

const Oveview = () => {
  return (
    <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div class="flex flex-col bg-white border shadow-sm rounded-xl">
          <div class="p-4 md:p-5">
            <div class="flex items-center gap-x-2">
              <p class="text-xs uppercase tracking-wide text-gray-500">
                Total serveys
              </p>
              <div class="hs-tooltip">
                <div class="hs-tooltip-toggle">
                  <svg
                    class="flex-shrink-0 size-4 text-gray-500"
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <span
                    class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
                    role="tooltip"
                  >
                    The number of serveys
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-1 flex items-center gap-x-2">
              <h3 class="text-xl sm:text-2xl font-medium text-gray-800">
                3000
              </h3>
              <span class="flex items-center gap-x-1 text-green-600">
                <svg
                  class="inline-block size-4 self-center"
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
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span class="inline-block text-sm">1.7%</span>
              </span>
            </div>
          </div>
        </div>

        <div class="flex flex-col bg-white border shadow-sm rounded-xl">
          <div class="p-4 md:p-5">
            <div class="flex items-center gap-x-2">
              <p class="text-xs uppercase tracking-wide text-gray-500">
                Total children Monitored
              </p>
            </div>

            <div class="mt-1 flex items-center gap-x-2">
              <h3 class="text-xl sm:text-2xl font-medium text-gray-800">
                1890
              </h3>
            </div>
          </div>
        </div>

        <div class="flex flex-col bg-white border shadow-sm rounded-xl">
          <div class="p-4 md:p-5">
            <div class="flex items-center gap-x-2">
              <p class="text-xs uppercase tracking-wide text-gray-500">
                Survey Completion Rate
              </p>
            </div>

            <div class="mt-1 flex items-center gap-x-2">
              <h3 class="text-xl sm:text-2xl font-medium text-gray-800">
                92.8%
              </h3>
              <span class="flex items-center gap-x-1 text-red-600">
                <svg
                  class="inline-block size-4 self-center"
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
                  <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                  <polyline points="16 17 22 17 22 11" />
                </svg>
                <span class="inline-block text-sm">1.7%</span>
              </span>
            </div>
          </div>
        </div>

        <div class="flex flex-col bg-white border shadow-sm rounded-xl">
          <div class="p-4 md:p-5">
            <div class="flex items-center gap-x-2">
              <p class="text-xs uppercase tracking-wide text-gray-500">
                Total health reports Generated
              </p>
            </div>

            <div class="mt-1 flex items-center gap-x-2">
              <h3 class="text-xl sm:text-2xl font-medium text-gray-800">320</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 sm:gap-6">
        <div class="p-4 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-sm text-gray-500">Rate</h2>
              <p class="text-xl sm:text-2xl font-medium text-gray-800">
                BMI and Vaccination
              </p>
            </div>

           
          </div>

          <div id="hs-multiple-bar-charts">
            <LineChartUsageExample/>
          </div>
        </div>

        <div class="p-4 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-sm text-gray-500">Comparison</h2>
              <p class="text-xl sm:text-2xl font-medium text-gray-800">Nutritional Status</p>
            </div>

          </div>

          <div id="hs-single-area-chart">
            <BarChartExampleWithCustomColor/>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Oveview;
