import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

export default function ContentF(props) {
  return (
    <section
      className="block content-f"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <_wrapper>
        <div className="row py-5 grid md:grid-cols-7">
          <div className="col md:col-span-4 mb-16 md:mb-0 md:mr-20">
            <_headline>{props.headline}</_headline>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
          </div>
          <div className="col self-center md:col-span-3">
            <h4 className="font-bold">Project Services</h4>
            {props.listItems && (
              <ul className="list-disc list-inside">
                {props.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
