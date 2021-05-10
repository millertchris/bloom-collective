import _wrapper from "./layout/_wrapper";
import _paragraph from "./layout/_paragraph";
import _pageTitle from "./layout/_pageTitle";

export default function HeroB(props) {
  return (
    <section className="block hero-b overflow-x-hidden">
      <_wrapper>
        <div className="row max-w-xl mx-auto pt-40 pb-10">
          <div className="col flex flex-col justify-end items-center">
            <_pageTitle>
              <span className="line-yellow text-yellow-300 inline-block">
                {props.headlineUnderline}
              </span>{" "}
              {props.headlineNoUnderline}
            </_pageTitle>
            <p className="py-5 text-center">{props.text}</p>
          </div>
        </div>
        <div className="row">
          <div className="col full-width">
            <img
              className="object-cover object-center w-full h-half"
              src={props.photo}
            />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
