import _wrapper from "./layout/_wrapper";
import _subheadline from "./layout/_subheadline";

export default function Awards({ title, children }) {
  return (
    <section className="block awards">
      <div className="component-wrapper">
        <div className="row">
          <div className="col">
            <h3 className="title">{title}</h3>
          </div>
        </div>
        <div className="row">{children}</div>
      </div>
    </section>
  );
}
