import PortfolioLayout from "../components/PortfolioLayout";
import PortfolioItem from "../components/PortfolioItem";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";
import Link from "next/link";

export default function portfolio() {
  return (
    <>
      <Header theme="black" logo="/bloom_logo_black.svg" />
      <Layout>
        <PortfolioLayout headline="The work we do">
          <PortfolioItem
            image="https://source.unsplash.com/random"
            title="Lorem ipsum dolor"
            text="This is a description of the post that is featured in this post item here."
            link="/case-study"
          />
          <PortfolioItem
            image="https://source.unsplash.com/random"
            title="Lorem ipsum dolor"
            text="This is a description of the post that is featured in this post item here."
            link="/case-study"
          />
          <PortfolioItem
            image="https://source.unsplash.com/random"
            title="Lorem ipsum dolor"
            text="This is a description of the post that is featured in this post item here."
            link="/case-study"
          />
          <PortfolioItem
            image="https://source.unsplash.com/random"
            title="Lorem ipsum dolor"
            text="This is a description of the post that is featured in this post item here."
            link="/case-study"
          />
          <PortfolioItem
            image="https://source.unsplash.com/random"
            title="Lorem ipsum dolor"
            text="This is a description of the post that is featured in this post item here."
            link="/case-study"
          />
          <PortfolioItem
            image="https://source.unsplash.com/random"
            title="Lorem ipsum dolor"
            text="This is a description of the post that is featured in this post item here."
            link="/case-study"
          />
          <PortfolioItem
            image="https://source.unsplash.com/random"
            title="Lorem ipsum dolor"
            text="This is a description of the post that is featured in this post item here."
            link="/case-study"
          />
          <PortfolioItem
            image="https://source.unsplash.com/random"
            title="Lorem ipsum dolor"
            text="This is a description of the post that is featured in this post item here."
            link="/case-study"
          />
        </PortfolioLayout>
      </Layout>
    </>
  );
}
