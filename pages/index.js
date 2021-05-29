import Footer from "../components/Footer";
import HeroA from "../components/HeroA";
import Clients from "../components/Clients";
import HeroN from "../components/HeroN";
import Testimonials from "../components/Testimonials";
import Form from "../components/Form";
import TestimonialItem from "../components/TestimonialItem";
import Header from "../components/Header";

import Layout from "../components/layout/Layout";

export default function index() {
  return (
    <>
      <Header
        theme="white"
        logo="/bloom_logo_white.svg"
        aos={"fade-down"}
        aosDelay={"1800"}
        aosDuration={"1200"}
      />
      <Layout lightNav>
        <HeroA
          headlineUnderline="Business-driven"
          headlineNoUnderline="content workflows"
          text="Every business needs to be a content producer. Let Bloom
        Collective show you how to do it right."
          buttonOneText="Learn more"
          buttonOneLink="/services"
          // buttonTwoText="Watch video"
          mainVideo="../bloom-collective-studio.mp4"
        />
        <Clients
          headline="Clients who trust us."
          logoOne="logo-breakthrough.svg"
          logoTwo="logo-dbs.svg"
          logoThree="logo-majid.svg"
        />

        <HeroN
          image="phone.svg"
          logo="logo-majid.svg"
          headline="Content During Crisis"
          text="Majid Al Futtaim is the leading shopping mall, communities, retail and leisure pioneer across the Middle East, Africa and Asia. Find out how Bloom Collective mobilised to help them communicate during a time of crisis"
          buttonText="Learn more"
          buttonLink="/case-study/item-a"
          positionContent="left"
          theme="yellow"
        />

        <HeroN
          image="phone.svg"
          logo="logo-breakthrough.svg"
          headline="The Science of Social"
          text="The Breakthrough Prizes are awarded each year to groundbreaking ideas in the areas of Physics, Mathematics and Life Sciences. See how Bloom Collective designed a custom content workflow to achieve their communications goals."
          buttonText="Learn more"
          buttonLink="/case-study/item-a"
          positionContent="right"
          theme="purple"
        />

        <Testimonials headline="Some of our partners and clients.">
          <TestimonialItem
            text="“When we started working with Bloom Collective it was like the lights turned on from a content creation standpoint. We worked closely together with them to set up what has now become a full-fledged internal communications content workflow. I couldn’t be more pleased with what we have accomplished together.”"
            personPhoto="https://source.unsplash.com/random"
            personName="Chris Young"
            personTitle="Creative Director at YouTube"
          />
          <TestimonialItem
            text="“When we started working with Bloom Collective it was like the lights turned on from a content creation standpoint. We worked closely together with them to set up what has now become a full-fledged internal communications content workflow. I couldn’t be more pleased with what we have accomplished together.”"
            personPhoto="https://source.unsplash.com/random"
            personName="Chris Young"
            personTitle="Creative Director at YouTube"
          />
        </Testimonials>

        <Form
          mainPage
          headlineNoUnderline="Tell us everything and "
          headlineUnderline="let's get to work"
          text="Please share your thoughts in the form below and we’ll be in touch. We’d love to hear from you."
        />
      </Layout>
      <Footer />
    </>
  );
}
