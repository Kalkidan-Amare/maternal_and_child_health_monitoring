/**
 * This code was generated by Builder.io.
 */
import React from "react";

const FeatureCard = ({ iconSrc, title, description, viewMoreLink }) => (
  <div className="flex flex-col px-6 py-6 w-full text-white bg-emerald-700 rounded-none shadow-sm max-md:pl-5 max-md:mt-10">
    <img loading="lazy" src={iconSrc} alt="" className="w-20 aspect-square" />
    <h3 className="mt-4 text-2xl font-medium">{title}</h3>
    <p className="mt-4 text-base leading-7">{description}</p>
    <a
      href={viewMoreLink}
      className="justify-center self-end px-6 py-4 mt-28 text-sm leading-5 text-emerald-700 bg-white rounded-none max-md:px-5 max-md:mt-10"
    >
      View More
    </a>
  </div>
);

export default FeatureCard;