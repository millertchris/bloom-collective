import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

export default function Services() {
  return (
    <section className="block ">
      <_wrapper>
        <div className="row pt-32 pb-10">
          <div className="col">
            <_pageTitle>Our Services</_pageTitle>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src="https://source.unsplash.com/random"
              className="w-full h-96 object-center object-cover"
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-center pt-10 pb-5">
            <_subheadline>What we do</_subheadline>
          </div>
        </div>
        <div className="row gap-10 grid md:grid-cols-2 py-10">
          <div className="col content">
            <h4 className="font-bold text-xl">Lorem ipsum dolor</h4>
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
            <ul className="list-disc list-inside">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div className="col image h-96">
            <img
              src="https://source.unsplash.com/random"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="row gap-10 grid md:grid-cols-2 py-10">
          <div className="col image h-96">
            <img
              src="https://source.unsplash.com/random"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="col content">
            <h4 className="font-bold text-xl">Lorem ipsum dolor</h4>
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
            <ul className="list-disc list-inside">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
        <div className="row gap-10 grid md:grid-cols-2 py-10">
          <div className="col content">
            <h4 className="font-bold text-xl">Lorem ipsum dolor</h4>
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
            <ul className="list-disc list-inside">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div className="col image h-96">
            <img
              src="https://source.unsplash.com/random"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
