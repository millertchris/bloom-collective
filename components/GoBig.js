import _wrapper from "./layout/_wrapper";
import _paragraph from "./layout/_paragraph";
import _pageTitle from "./layout/_pageTitle";

export default function GoBig() {
  return (
    <section className="goBig relative h-screen">
      <_wrapper>
      <div className="row max-w-xl mx-auto pt-40 pb-10">
        <div className="col flex flex-col justify-end items-center">
          <_pageTitle>
            <span className="line-yellow text-yellow-300 inline-block">
              Go Big,
            </span>{" "}
            or Go Home.
          </_pageTitle>
          <p className="py-5 text-center">
            Bloom Collective is a full-service digital consulting agency
            specializing in content strategy, design and production. We have
            experience working across Asia Pacic, North America and the Middle
            East.
          </p>
        </div>
      </div>
      <div className="row">
      <div className="col absolute top-50 left-0 w-full h-full">
          <img
            className="object-cover object-center w-full h-full max-h-96"
            src="https://source.unsplash.com/random"
          />
        </div>
      </div>
      </_wrapper>
    </section>
  );
}
