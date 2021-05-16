import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

export default function Location(props) {
  return (
    <section className="block location mb-16">
      <_wrapper>
        <div className="row grid gap-10 md:grid-cols-2 items-center">
          <div className="col max-w-md" data-aos="fade-up">
            <_headline>
              {props.headlineNoUnderline}{" "}
              <span className="inline-block text-yellow-300 line-yellow">
                {props.headlineUnderline}
              </span>
            </_headline>
            <_paragraph>{props.text}</_paragraph>
          </div>
          <div className="col h-500" data-aos="fade-up" data-aos-delay="800">
            <img
              src={props.photo}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
