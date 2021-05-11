import PortfolioLayout from "../components/PortfolioLayout";
import PortfolioItem from "../components/PortfolioItem";
import Layout from "../components/layout/Layout";

export default function portfolio() {
  return (
    <Layout>
      <PortfolioLayout headline="The work we do">
        <PortfolioItem
          image="https://source.unsplash.com/random"
          title="Lorem ipsum dolor"
          text="This is a description of the post that is featured in this post item here."
        />
        <PortfolioItem
          image="https://source.unsplash.com/random"
          title="Lorem ipsum dolor"
          text="This is a description of the post that is featured in this post item here."
        />
        <PortfolioItem
          image="https://source.unsplash.com/random"
          title="Lorem ipsum dolor"
          text="This is a description of the post that is featured in this post item here."
        />
        <PortfolioItem
          image="https://source.unsplash.com/random"
          title="Lorem ipsum dolor"
          text="This is a description of the post that is featured in this post item here."
        />
        <PortfolioItem
          image="https://source.unsplash.com/random"
          title="Lorem ipsum dolor"
          text="This is a description of the post that is featured in this post item here."
        />
        <PortfolioItem
          image="https://source.unsplash.com/random"
          title="Lorem ipsum dolor"
          text="This is a description of the post that is featured in this post item here."
        />
        <PortfolioItem
          image="https://source.unsplash.com/random"
          title="Lorem ipsum dolor"
          text="This is a description of the post that is featured in this post item here."
        />
        <PortfolioItem
          image="https://source.unsplash.com/random"
          title="Lorem ipsum dolor"
          text="This is a description of the post that is featured in this post item here."
        />
      </PortfolioLayout>
    </Layout>
  );
}
