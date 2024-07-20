import React from "react";

function FeatureCard({ iconSrc, title, description, imageSrc }) {
  return (
    <article className="flex flex-col self-stretch p-5 rounded-2xl border border-solid border-emerald-700 border-opacity-80 max-w-[377px] shadow-xl transition hover:border-emerald-500/10 hover:shadow-emerald-500/10">
      <div className="flex justify-center items-center w-20 h-20 bg-zinc-300 rounded-[40px]">
        <img loading="lazy" src={iconSrc} alt="" className="w-full aspect-square" />
      </div>
      <h2 className="text-3xl font-semibold leading-8 text-center text-black">
        {title}
      </h2>
      <p className="text-base text-center text-gray-600">
        {description}
      </p>
      <img loading="lazy" src={imageSrc} alt="Survey feature illustration" className="h-full aspect-[1.47]" />
    </article>
  );
}

export default FeatureCard;