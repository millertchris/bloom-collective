import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";
import Form from "./Form";
import Lottie from "react-lottie";
import animationData from "../public/lottieAnimation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: "https://lottiefiles.com/share/ham6xpau",
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function ContactUs() {
  return (
    <section className="block contact-us">
      <_wrapper>
        <div className="row pt-32 flex flex-col lg:flex-row md:gap-6">
          <div className="col h-500 w-full md:max-w-xl">
            <Lottie options={defaultOptions} className="w-full h-full" />
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
