import _subheadline from "./layout/_subheadline";
import Link from "next/link";

export default function PortfolioItem(props) {
  return (
    <Link className="block" href="/case-study">
      <a>
        <div className="portfolio-item cursor-pointer" data-aos="fade-up" data-aos-offset="100">
          <div className="image">
            <img
              src={props.image}
              className="object-cover object-center w-full h-72"
            />
          </div>
          <div className="my-6">
            <_subheadline>{props.title}</_subheadline>
            <p>{props.text}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
