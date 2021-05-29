import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";

export default function ContentC(props) {
  return (
    <section className="block content-c">
      <_wrapper>
        <div className="row grid md:grid-cols-7">
          <div className="col md:col-span-3 md:mr-10 mb-6 ">
            <_headline>
              <span className="inline-block text-yellow-300 line-yellow">
                {props.headlineUnderline}
              </span>{" "}
              {props.headlineNoUnderline}
            </_headline>
          </div>
          <div className="col md:col-span-4">
            <_paragraph>{props.paragraphOne}</_paragraph>
            <_paragraph>{props.paragraphTwo}</_paragraph>
            <_paragraph>{props.paragraphThree}</_paragraph>
            <div className="flex justify-left items-center py-4">
              <img
                src={props.personAvatar}
                className="rounded-full w-16 h-16 mr-5"
              />
              <div className="person-info">
                <h4 className="font-bold text-xl">{props.personName}</h4>
                <h5 className="position">{props.personTitle}</h5>
              </div>
            </div>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
