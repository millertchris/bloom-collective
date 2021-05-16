import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

export default function ContentE(props) {
  return (
    <section className="block content-e" data-aos="fade-up" data-aos-delay="500">
      <_wrapper>
        <div className="row gap-16 grid md:grid-cols-2 py-10">
          <div className="col image h-500">
            <img
              src={props.photo}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="col content self-center">
            <h4 className="font-bold text-xl">{props.title}</h4>
            <_paragraph>{props.paragraphOne}</_paragraph>
            <_paragraph>{props.paragraphTwo}</_paragraph>
            <ul className="list-disc list-inside">
              <li>{props.listItemOne}</li>
              <li>{props.listItemTwo}</li>
              <li>{props.listItemThree}</li>
              <li>{props.listItemFour}</li>
            </ul>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
