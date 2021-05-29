import _subheadline from "./layout/_subheadline";
import Link from "next/link";

export default function PortfolioItem({
  link,
  image,
  imageAlt,
  title,
  description,
}) {
  return (
    <div className="col item">
      <Link href={link}>
        <a>
          <div className="image">
            <img src={image} alt={imageAlt} />
          </div>
          <div class="content">
            <h2 class="title">{title}</h2>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
