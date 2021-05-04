import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";

export default function Science() {
  return (
    <section className="block">
      <_wrapper>
        <div className="row flex flex-wrap justify-center items-center">
          <div className="col">
            <img className="w-96" src="../phone.svg" />
          </div>
          <div className="col max-w-xl py-10">
            <img src="logo-breakthrough.svg" className="py-5" />
            <_headline>The Science of Social</_headline>
            <_paragraph>
              The Breakthrough Prizes are awarded each year to groundbreaking
              ideas in the areas of Physics, Mathematics and Life Sciences. See
              how Bloom Collective designed a custom content workflow to achieve
              their communications goals.
            </_paragraph>
            <button
              className="px-5 py-3 w-full max-w-xxs
                text-gray-400
                border-2 border-gray-400
                hover:bg-yellow-300 hover:border-yellow-300 hover:text-black
                transition duration-300 ease-in-out"
            >
              Learn more
            </button>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
