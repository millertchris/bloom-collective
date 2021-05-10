import _pageTitle from "./layout/_pageTitle";
import _wrapper from "./layout/_wrapper";

export default function HeroD(props) {
  return (
    <section className="block hero relative">
      <_wrapper>
        <div className="row flex justify-start">
          <div className="col z-10 max-w-6xl py-40 text-white">
            <img src="logo-majid-white.svg" className="py-5" />
            <_pageTitle>{props.headline}</_pageTitle>
          </div>
          <div className="col absolute top-0 left-0 w-full h-full">
            <img
              className="object-cover object-center w-full h-full"
              src={props.background}
              alt=""
            />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
