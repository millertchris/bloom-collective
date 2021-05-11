import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";
import Form from "./Form";

import Lottie from "react-lottie";
import animationData from "./lottieAnimation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function ContactUs(props) {
  return (
    <section className="block contact-us">
      <_wrapper>
        <div className="row pt-32 flex flex-col md:flex-row gap-6">
          <div className="col h-500 w-full md:max-w-xl">
            {/* <img
              src={props.image}
              className="object-cover object-center h-full w-full"
            /> */}

            <Lottie options={defaultOptions} height={400} width={400} />

          </div>
          <div className="col">
            <Form
              headlineNoUnderline="Drop a line"
              text="Please share your thoughts in the form below and we’ll be in touch. We’d love to hear from you."
            />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
