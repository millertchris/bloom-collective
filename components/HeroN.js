import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";
import Link from "next/link";

export default function HeroN(props) {
  return (
    <section
      className={
        "block hero-n style-2 content-a content-" +
        props.positionContent +
        " theme-" +
        props.theme
      }
    >
      <_wrapper>
        <div className="row">
          <div className="col" data-aos="fade-up" data-aos-offset="200">
            <img src={props.logo} className="logo" />
            <h2 className="title">{props.headline}</h2>
            <p>{props.text}</p>

            <Link href={props.buttonLink}>
              <a className="btn">{props.buttonText}</a>
            </Link>
          </div>
          <div
            className="col image"
            data-aos="fade-up"
            data-aos-offset="600"
            data-aos-delay="200"
          >
            <img src="../phone.svg" alt="Place Holder" />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
