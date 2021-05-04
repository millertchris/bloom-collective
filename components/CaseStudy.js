import _pageTitle from "./layout/_pageTitle";

export default function CaseStudy() {
  return (
    <section className="caseStudy h-screen">
      <div
        className="row flex justify-center items-end
        sm:justify-start"
      >
        <div
          className="col absolute z-10 max-w-6xl
           text-white text-center
           m-5
           sm:text-left sm:m-10"
        >
          <div className="content p-5">
            <div className="title">
              <_pageTitle className="text-left">Majid Al Futtaim Advanced Analytics Video</_pageTitle>
            </div>
          </div>
        </div>
        <div className="col w-full h-full">
          <img
            className="object-cover w-full max-h-screen"
            src="https://source.unsplash.com/random"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
