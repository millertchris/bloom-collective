export default function BasicContent(props) {
  return (
    <section className="block basic-content">
      <div className="component-wrapper">
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
}
