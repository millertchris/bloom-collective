import _wrapper from "./layout/_wrapper";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";


export default function PortfolioLayout(props) {
  return (
    <section className="block portfolio-layout pt-32 pb-10">
      <_wrapper>
        <div className="row">
          <div className="col content py-10">
            <_pageTitle>{props.headline}</_pageTitle>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">{props.children}</div>
      </_wrapper>
    </section>
  );
}
