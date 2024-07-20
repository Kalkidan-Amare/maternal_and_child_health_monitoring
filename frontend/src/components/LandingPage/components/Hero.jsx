import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-primary" id="home">
      <Navbar />
      <section class="">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-6">
            <h1 class="max-w-2xl mb-4 text-[30px] font-semibold tracking-tight leading-tight md:text-[48px] text-white">
              Empowering Maternal and Child Health with AI-Driven Insights
            </h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-[20px] text-gray-100">
              Join us in revolutionizing healthcare with our innovative
              AI-powered survey platform.
            </p>
            <button
              type="button"
              class="py-2 px-6 inline-flex items-center gap-x-2 font-medium rounded-br-3xl border border-gray-200 text-primary text-xl bg-white hover:border-primary hover:bg-emerald-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
            >
              Get Started
            </button>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img src="/images/Hero.png" alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
