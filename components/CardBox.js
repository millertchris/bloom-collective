import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

export default function CardBox(props) {
  return (
    <section className="block">
      <_wrapper>
        <div className="row card-box">
          <div className="col flex justify-center items-center">
            <img src={props.image} />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
