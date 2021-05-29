import _wrapper from "./layout/_wrapper";

export default function FeaturedImage(props) {
  return (
    <section className="block featured-image">
      <div className="component-wrapper">
        <div className="row">
          <div className="col">
            <img src={props.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
