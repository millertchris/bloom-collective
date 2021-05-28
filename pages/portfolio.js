import PortfolioItem from "../components/PortfolioItem";
import Header from "../components/Header";

export default function portfolio() {
  return (
    <>
      <Header theme="black" logo="/bloom_logo_black.svg" />

      <section className="block portfolio">
        <div className="component-wrapper">
          <div className="row intro">
            <h1 class="title">The word we do.</h1>
          </div>
          <div className="row items">
            <PortfolioItem
              image="https://source.unsplash.com/random"
              imageAlt="Place holder image"
              title="Lorem ipsum dolor"
              description="This is a description of the post that is featured in this post item here."
              link="/case-study"
            />
            <PortfolioItem
              image="https://source.unsplash.com/random"
              imageAlt="Place holder image"
              title="Lorem ipsum dolor"
              description="This is a description of the post that is featured in this post item here."
              link="/case-study"
            />
            <PortfolioItem
              image="https://source.unsplash.com/random"
              imageAlt="Place holder image"
              title="Lorem ipsum dolor"
              description="This is a description of the post that is featured in this post item here."
              link="/case-study"
            />
            <PortfolioItem
              image="https://source.unsplash.com/random"
              imageAlt="Place holder image"
              title="Lorem ipsum dolor"
              description="This is a description of the post that is featured in this post item here."
              link="/case-study"
            />
            <PortfolioItem
              image="https://source.unsplash.com/random"
              imageAlt="Place holder image"
              title="Lorem ipsum dolor"
              description="This is a description of the post that is featured in this post item here."
              link="/case-study"
            />
            <PortfolioItem
              image="https://source.unsplash.com/random"
              imageAlt="Place holder image"
              title="Lorem ipsum dolor"
              description="This is a description of the post that is featured in this post item here."
              link="/case-study"
            />
            <PortfolioItem
              image="https://source.unsplash.com/random"
              imageAlt="Place holder image"
              title="Lorem ipsum dolor"
              description="This is a description of the post that is featured in this post item here."
              link="/case-study"
            />
            <PortfolioItem
              image="https://source.unsplash.com/random"
              imageAlt="Place holder image"
              title="Lorem ipsum dolor"
              description="This is a description of the post that is featured in this post item here."
              link="/case-study"
            />
          </div>
        </div>
      </section>
    </>
  );
}
