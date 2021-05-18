import _wrapper from "./layout/_wrapper";
import _subheadline from "./layout/_subheadline";

export default function Clients(props) {
  return (
    <section
      className="block clients"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="1800"
      data-aos-easing="ease-in-out"
      data-aos-offset="-500"
    >
      <div className="component-wrapper">
        <div className="row">
          <div className="col">
            <_subheadline>{props.headline}</_subheadline>
          </div>

          <div className="col">
            <img src={props.logoOne} />
            <img src={props.logoTwo} />
            <img src={props.logoThree} />
          </div>
        </div>
      </div>
    </section>
  );
}
