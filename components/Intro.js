import _wrapper from "./layout/_wrapper";
import _subheadline from "./layout/_subheadline";

export default function Intro(props) {
  return (
    <section className="block intro">
      <div className="component-wrapper">
        <div className="row">
          <div className="col">
            <h2 className="title">{props.title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
