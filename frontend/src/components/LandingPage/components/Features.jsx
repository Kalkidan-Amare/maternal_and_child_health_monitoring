import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="" id="service">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20 lg:pt-32">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-xl font-semibold sm:text-3xl text-primary">
            Our Services
          </h2>

          <p className="mt-4 md:text-[32px] font-semibold">
            Provide Awesome Service With Our Tools
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:mt-10">
          <FeatureCard
            imageSrc="/images/survey.png"
            title="Take a survey"
            description="Easily gather health data through user-friendly forms submitted by NGO data collectors."
            iconSrc="/images/survey_icion.png"
          />
          <FeatureCard
            imageSrc="/images/leverage_ai.png"
            title="Leverage AI"
            description="Harness the power of AI to gain deep insights and uncover trends in child health data."
            iconSrc="/images/leverage_ai_icon.png"
          />
          <FeatureCard
            imageSrc="/images/visualization.png"
            title="Interactive Visualizations"
            description="Transform raw data into visual representations for quick and effective understanding."
            iconSrc="/images/visualization_icon.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
