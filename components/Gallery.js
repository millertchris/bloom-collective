export default function Gallery(props) {
  return (
    <section className="block gallery">
      <div className="component-wrapper">
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
}
