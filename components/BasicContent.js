export default function BasicContent({ style, positionContent, children }) {
  return (
    <section
      className={"block basic-content " + style + " content-" + positionContent}
    >
      <div className="component-wrapper">
        <div className="row">{children}</div>
      </div>
    </section>
  );
}
