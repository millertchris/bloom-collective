import _wrapper from "./layout/_wrapper";
import _subheadline from "./layout/_subheadline";

export default function HeroA(props) {
  return (
    <section className="block hero relative">
      <_wrapper>
        <div className="row flex items-center h-calc pt-32 pb-10">
          <div className="col content relative z-10 w-full max-w-md text-white">
            <div className="title">
              <h1
                className="text-4xl font-semibold
                sm:text-5xl"
              >
                <span className="line-yellow text-yellow-300 inline-block">
                  {props.headlineUnderline}
                </span>
                <br />
                {props.headlineNoUnderline}
              </h1>
            </div>
            <p className="py-5">{props.text}</p>
            <div
              className="flex flex-col gap-5
              sm:flex-row"
            >
              <button
                className="px-5 py-3 w-full max-w-xxs
              bg-yellow-300
              text-black
              border-2 border-yellow-300
              hover:bg-yellow-400
              transition duration-300 ease-in-out"
              >
                {props.buttonOne}
              </button>
              <button
                className="px-5 py-3 w-full max-w-xxs
                text-yellow-300
                border-2 border-yellow-300
                hover:bg-yellow-400 hover:text-black
                transition duration-300 ease-in-out"
              >
                {props.buttonTwo}
              </button>
            </div>
          </div>
          <div className="col video-wrap">
            <video className="" muted autoPlay>
              <source src="../vid-2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
