import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

export default function ContentF(props) {
  return (
    <section className="block content-f">
      <_wrapper>
        <div className="row py-5 grid gap-16 md:grid-cols-7">
          <div className="col md:col-span-4">
            <_headline>{props.headline}</_headline>
            <_paragraph>{props.paragraphOne}</_paragraph>
            <_paragraph>{props.paragraphTwo}</_paragraph>
            <_paragraph>{props.paragraphThree}</_paragraph>
          </div>
          <div className="col self-center md:col-span-3">
            <h4 className="font-bold">Project Services</h4>
            <ul className="text-gray-400">
              <li>Five Part Series</li>
              <li>Average Duration: 02:00</li>
              <li>Storyboarding Motion</li>
              <li>Graphics Design Motion </li>
              <li>Graphics Animation</li>
            </ul>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
