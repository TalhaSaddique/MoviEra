import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-4 md:mx-32 lg:mx-52 mt-8 md:mt-16 lg:mt-32">
      <div className="p-1 w-full bg-gradient-to-r from-yellow-500 to-slate-900"></div>
      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 lg:space-x-8 xl:space-x-[400px] my-6 md:my-8 lg:my-20 text-sm md:text-base lg:text-lg font-bold text-white">
          <div className="mb-4 md:mb-0">
            Developer: &nbsp;&nbsp;
            <a
              className="text-transparent tracking-widest bg-clip-text bg-gradient-to-br from-green-500 to-blue-900 hover:underline hover:underline-offset-8 hover:decoration-cyan-500"
              href="https://talhasaddique.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talha Saddique &nbsp;
            </a>
            ↗
          </div>
          <div>
            LinkTree: &nbsp;&nbsp;
            <a
              className="text-transparent tracking-widest bg-clip-text bg-gradient-to-br from-green-500 to-blue-900 hover:underline hover:underline-offset-8 hover:decoration-cyan-500"
              href="https://linktr.ee/TalhaSaddique"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talha Saddique &nbsp;
            </a>
            ↗
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
