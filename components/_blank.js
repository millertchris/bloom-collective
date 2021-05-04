import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

export default function Blank() {
  return (
    <section className="block blank">
      <_wrapper>
        <div className="row">
          <div className="col">
            <span className="text">hello</span>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
