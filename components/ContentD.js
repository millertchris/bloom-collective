import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

export default function ContentD(props) {
  return (
    <section className={"block content-d content-" + props.positionContent}>
      <_wrapper>
        <div className="row">
          <div className="col content">
            <h4 className="font-bold text-xl">{props.title}</h4>
            <_paragraph>{props.paragraphOne}</_paragraph>
            <_paragraph>{props.paragraphTwo}</_paragraph>

            {props.listItems && (
              <ul className="list-disc list-inside">
                {props.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="col image">
            <img
              src={props.photo}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
