import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";



export default function HeroC(props) {
  return (
    <section className="block hero-c">
      <_wrapper>
        <div className="row pt-32 pb-10">
          <div className="col">
            <_pageTitle>{props.headline}</_pageTitle>
          </div>
        </div>
        <div className="row">
          <div className="col h-500">
            <img
              src={props.image}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-center pt-10 pb-5">
            <_subheadline>{props.subheader}</_subheadline>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
