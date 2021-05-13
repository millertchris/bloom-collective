import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";

export default function ContentG(props) {
  return (
    <section className="block content-g">
      <_wrapper>
        <div className="row py-5 grid gap-4 md:grid-cols-7">
          <div className="col max-w-96 md:col-span-3">
            <_headline>
              <span className="inline-block text-yellow-300 line-yellow">
                {props.headlineUnderline}{" "}
              </span>
              {props.headlineNoUnderline}
            </_headline>
          </div>
          <div className="col md:col-span-4">
            <_paragraph>{props.paragraphOne}</_paragraph>
            <_paragraph>{props.paragraphTwo}</_paragraph>
            <_paragraph>{props.paragraphThree}</_paragraph>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
