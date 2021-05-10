import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

<<<<<<< HEAD
export default function Blank() {
  return (
    <section className="block blank">
=======
export default function Location(props) {
  return (
    <section className="block location">
>>>>>>> sam-bloom/dev
      <_wrapper>
        <div className="row grid gap-10 md:grid-cols-2 items-center">
          <div className="col max-w-md">
            <_headline>
<<<<<<< HEAD
              We are located in {" "}
              <span className="inline-block text-yellow-300 line-yellow">
                Jakarta, Indonesia.
              </span>
            </_headline>
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
=======
              {props.headlineNoUnderline}{" "}
              <span className="inline-block text-yellow-300 line-yellow">
                {props.headlineUnderline}
              </span>
            </_headline>
            <_paragraph>{props.text}</_paragraph>
>>>>>>> sam-bloom/dev
          </div>
          <div className="col">
            <img
              src="https://source.unsplash.com/random"
<<<<<<< HEAD
              className="w-full h-full object-cover object-center"
=======
              className="w-full object-cover object-center"
>>>>>>> sam-bloom/dev
            />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
