
import React from "react";

const TestimonialCard = ({ quote, name, title, avatarSrc, description }) => (
  <div className="flex flex-col grow px-6 py-11 w-full bg-white rounded-sm border border-emerald-700 border-solid text-zinc-700 max-md:px-5 max-md:mt-10 max-md:max-w-full shadow-xl transition hover:border-emerald-500/100 hover:shadow-emerald-500/20">
    <div className="text-7xl font-semibold text-emerald-700 leading-[80px] max-md:text-4xl">
      <img src="/images/quote_icon.png" alt="" />
    </div>
    <h3 className="mt-11 text-2xl leading-9 text-stone-900 max-md:mt-10">
      {quote}
    </h3>
    <p className="mt-4 text-base leading-6">
      {description}
    </p>
    <div className="flex gap-3.5 mt-16 leading-[150%] max-md:mt-10">
      
      <div className="flex flex-col grow shrink-0 self-start mt-3 basis-0 w-fit">
        <div className="text-2xl">{name}</div>
        <div className="text-base">{title}</div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
