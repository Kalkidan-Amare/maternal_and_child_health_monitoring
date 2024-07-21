import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import SurveyRouting from "./SurveyRouting";
import { FaFileWaveform } from "react-icons/fa6";
import { MdMedicalInformation } from "react-icons/md";
const Register = () => {
  const [clicked, setClicked] = useState("");

  const handleNavClick = (nav) => {
    setClicked(nav);
  };
  return (
    <>
      <div>
        <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64">
          <nav
            className="flex basis-full items-center w-full mx-auto px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="me-5 lg:me-0 lg:hidden">
              <a
                className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                href="/"
                aria-label="Preline"
              >
                <p className="text-xl font-medium"> Ade</p>
              </a>
            </div>

            <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
              <div className="sm:hidden">
                <button
                  type="button"
                  className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>

              <div className="hidden sm:block">
                <label htmlFor="icon" className="sr-only">
                  Search
                </label>
                <div className="relative min-w-72 md:min-w-80">
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <svg
                      className="flex-shrink-0 size-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="icon"
                    name="icon"
                    className="py-2 px-4 ps-11 block w-full border-gray-200 border-2 focus:outline-emerald-500 rounded-lg text-sm focus:border-0 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Search"
                  />
                </div>
              </div>

              <div className="flex flex-row items-center justify-end gap-2">
                <button
                  type="button"
                  className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                </button>
                <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                  <button
                    id="hs-dropdown-with-header"
                    type="button"
                    className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <img
                      className="inline-block size-[38px] rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </button>

                  <div
                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2"
                    aria-labelledby="hs-dropdown-with-header"
                  >
                    <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg">
                      <p className="text-sm text-gray-500">Signed in as</p>
                      <p className="text-sm font-medium text-gray-800">
                        james@site.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
          <div className="flex justify-between items-center py-2">
            <ol className="ms-3 flex items-center whitespace-nowrap">
              <li className="flex items-center text-sm text-gray-800">
                Application Layout
                <svg
                  className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </li>
              <li
                className="text-sm font-semibold text-gray-800 truncate"
                aria-current="page"
              >
                Dashboard
              </li>
            </ol>

            <button
              type="button"
              className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600"
              data-hs-overlay="#application-sidebar"
              aria-controls="application-sidebar"
              aria-label="Sidebar"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" />
              </svg>
              <span className="sr-only">Sidebar</span>
            </button>
          </div>
        </div>

        <div
          id="application-sidebar"
          className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
        >
          <div className="px-8 pt-4">
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="/"
              aria-label="Preline"
            >
              <p className="text-3xl font-semibold text-primary">Ade</p>
            </a>
          </div>

          <nav
            className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open
          >
            <ul className="space-y-1.5">
              <li onClick={() => handleNavClick("")}>
                <NavLink to="/surveyor">
                  <a
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 ${
                      clicked == "" ? "bg-gray-100" : ""
                    }`}
                    href="#"
                  >
                    <MdMedicalInformation className="flex-shrink-0 size-4 text-primary" />
                    Register
                  </a>
                </NavLink>
              </li>

              <li
                className="hs-accordion"
                id="users-accordion"
                onClick={() => handleNavClick("surveyors")}
              >
                <NavLink to="mother-list/antenatal">
                  <button
                    type="button"
                    className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 ${
                      clicked == "surveyors" ? "bg-gray-100" : ""
                    }`}
                  >
                    <FaFileWaveform className="flex-shrink-0 size-4 text-primary" />
                    Antinatal Follow up
                  </button>
                </NavLink>
              </li>

              <li
                className="hs-accordion"
                id="projects-accordion"
                onClick={() => handleNavClick("analyze")}
              >
                <NavLink to="mother-list/postnatal">
                  <button
                    type="button"
                    className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 ${
                      clicked == "analyze" ? "bg-gray-100" : ""
                    }`}
                  >
                    <FaFileWaveform className="flex-shrink-0 size-4 text-primary" />
                    Postnatal Follow up
                  </button>
                </NavLink>
              </li>
              <li
                className="hs-accordion"
                id="account-accordion"
                onClick={() => handleNavClick("reports")}
              >
                <NavLink to="child-list">
                  <button
                    type="button"
                    className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 ${
                      clicked == "reports" ? "bg-gray-200" : ""
                    }`}
                  >
                    <FaFileWaveform className="flex-shrink-0 size-4 text-primary" />
                    Child Follow up
                  </button>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-full lg:ps-64 bg-[#f3f4f6]">
          <SurveyRouting />
        </div>
      </div>
    </>
  );
};

export default Register;
