import HeroD from "../components/HeroD";
import ContentF from "../components/ContentF";
import CardBox from "../components/CardBox";
import ContentG from "../components/ContentG";
import ImageGrid from "../components/ImageGrid";
import FeaturedImage from "../components/FeaturedImage";
import Layout from "../components/layout/Layout";

export default function caseStudy() {
  return (
    <Layout lightNav>
      <HeroD
        headline="Majid Al Futtaim Advanced Analytics"
        background="https://source.unsplash.com/random"
      />
      <ContentF headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
      paragraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat."
        paragraphTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco."
        paragraphThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <CardBox image="notes-grid.svg" />
      <ImageGrid imageOne="https://source.unsplash.com/random" imageTwo="https://source.unsplash.com/random" imageThree="https://source.unsplash.com/random" imageFour="https://source.unsplash.com/random" />
    </Layout>
  );
}
