import React from "react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
      <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm md:w-[30%]">
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800">
              Forgot password?
            </h1>
            <p class="mt-2 text-sm text-gray-600">
              Remember your password?
              <a
                class="text-blue-600 decoration-2 hover:underline font-medium"
                href="../examples/html/signin.html"
              >
                Sign in here
              </a>
            </p>
          </div>

          <div class="mt-5">
            <form>
              <div class="grid gap-y-4">
                <div>
                  <label for="email" class="block text-sm mb-2">
                    Email address
                  </label>
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="py-3 px-4 block w-full border-gray-200 border-2 focus:outline-blue-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="email-error"
                    />
                    <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        class="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p class="hidden text-xs text-red-600 mt-2" id="email-error">
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>

                <button
                  type="submit"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
