import FeaturedImage from "../components/FeaturedImage";
import ContentD from "../components/ContentD";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Intro from "../components/Intro";

export default function services() {
  return (
    <>
      <Header theme="black" logo="/bloom_logo_black.svg" />

      <Hero
        style="style-1"
        title="Our Services"
        image="https://source.unsplash.com/random"
        imageAlt="Background Image"
      />

      {/* <FeaturedImage image="https://source.unsplash.com/random" /> */}

      {/* <HeroC
        headline="Our Services"
        image="https://source.unsplash.com/random"
      /> */}

      <Intro title="What we do" />

      <ContentD
        positionContent="right"
        title="Lorem ipsum dolor"
        paragraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat."
        paragraphTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat."
        listItems={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]}
        photo="https://source.unsplash.com/random"
      />

      <ContentD
        positionContent="left"
        title="Lorem ipsum dolor"
        paragraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat."
        paragraphTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat."
        listItems={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]}
        photo="https://source.unsplash.com/random"
      />
    </>
  );
}
