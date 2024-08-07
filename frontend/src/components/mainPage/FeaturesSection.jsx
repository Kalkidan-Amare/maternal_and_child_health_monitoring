/**
 * This code was generated by Builder.io.
 */
import React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/48440a4df71df20ce30d52dbe69a1204c0ab5bc6345e2d885eb4fe4c4e55e0ab?apiKey=27e3725db8b34053b390a33ddc94eaed&",
      title: "Efficient Data Collection",
      description:
        "Easily gather health data through user-friendly forms submitted by NGO data collectors.",
      viewMoreLink: "#",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7087a060568f6379915f84417fa29a7b2679ea759bb7940a8f4ab302989f28bb?apiKey=27e3725db8b34053b390a33ddc94eaed&",
      title: "AI-Driven Analysis",
      description:
        "Harness the power of AI to gain deep insights and uncover trends in child health data.",
      viewMoreLink: "#",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c15c58be81f9a440a366d246ac5bd87ea56f5860a7bf0318754662ea5807a7bd?apiKey=27e3725db8b34053b390a33ddc94eaed&",
      title: "Interactive Visualizations",
      description:
        "Transform raw data into intuitive visual representations for quick and effective understanding.",
      viewMoreLink: "#",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/431e8e16dc8e5b5c119eb96f64544df94c7e862f90d3ba2a1e0456afc0869aba?apiKey=27e3725db8b34053b390a33ddc94eaed&",
      title: "Secure and Accessible",
      description:
        "Ensure data security while providing access to authorized users anytime, anywhere.",
      viewMoreLink: "#",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ccdf89231acc5916de17fcfc9eec3b00c6b85f9326ee153fad89541c5314c547?apiKey=27e3725db8b34053b390a33ddc94eaed&",
      title: "Real-Time Reporting",
      description:
        "Generate and access real-time reports to monitor the health status of children and make timely interventions.",
      viewMoreLink: "#",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0405083a2bf141a5d262fe21a721cc75265b3a65d5e3e813beffd13d4672ae6c?apiKey=27e3725db8b34053b390a33ddc94eaed&",
      title: "Collaborative Tools",
      description: "",
      viewMoreLink: "#",
    },
  ];

  return (
    <section className="mt-20 w-full max-w-[1292px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col w-[calc(33.33%-1rem)] max-md:w-full"
          >
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
