export default function Gallery(props) {
  return (
    <section className={"block gallery " + props.columns}>
      <div className="component-wrapper">
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
}
