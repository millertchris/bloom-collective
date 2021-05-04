import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";

import _paragraph from "./layout/_paragraph";

export default function Testimonials() {
  return (
    <section className="block testimonials">
      <_wrapper>
        <div className="row flex place-items-center gap-2 mx-auto max-w-4xl">
          <div className="col w-16">
            <svg
              className="fill-current text-gray-400 cursor-pointer
              hover:text-black
              transition duration-200 ease-in-out
              transform hover:-translate-x-1"
              width="30"
              height="26"
              viewBox="0 0 24 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.100079 11L7.68341 21.5H11.7667L5.35008 12.75H23.6667V9.25H5.35008L11.7667 0.5H7.68341L0.100079 11Z" />
            </svg>
          </div>
          <div className="col flex flex-col place-items-center gap-2 py-10">
            <_headline>Some of our partners and clients.</_headline>
            <p className="serif py-5 text-center sm:text-xl">
              “We've been working with Bloom for more than a year now. Our
              previous experience with outsource teams was not always positive.
              In the case of Bloom, everything is perfect: adequate estimation
              and work on time...”
            </p>
            <img
              src="https://source.unsplash.com/random"
              className="rounded-full w-16 h-16"
            />
            <h4 className="font-bold text-xl">Chris Young</h4>
            <h5>Creative Director at Youtube</h5>
          </div>
          <div className="col w-16">
            <svg
              className="fill-current text-gray-400 cursor-pointer
            hover:text-black
              transition duration-200 ease-in-out
              transform hover:translate-x-1"
              width="30"
              height="26"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8999 11L16.3166 21.5H12.2333L18.6499 12.75H0.333252V9.25H18.6499L12.2333 0.5H16.3166L23.8999 11Z"
                fill=""
              />
            </svg>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
