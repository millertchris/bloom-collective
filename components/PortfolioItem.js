import _subheadline from "./layout/_subheadline";
import Link from "next/link";

export default function PortfolioItem({ link, image, title, text }) {
  return (
    <Link className="block" href={link}>
      <a>
        <div
          className="portfolio-item cursor-pointer"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
        >
          <div className="image">
            <img
              src={image}
              className="object-cover object-center w-full h-72"
            />
          </div>
          <div className="my-6">
            <_subheadline>{title}</_subheadline>
            <p>{text}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
