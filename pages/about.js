import HeroB from "../components/HeroB";
import ContentC from "../components/ContentC";
import Awards from "../components/Awards";
import Layout from "../components/layout/Layout";
import Location from "../components/Location";
import AwardItem from "../components/AwardItem";
import Footer from "../components/Footer";

import Header from "../components/Header";

import Flickity from "react-flickity-component";

const flickityOptions = {
  wrapAround: true,
  initialIndex: 3,
  contain: true,
};

export default function about() {
  return (
    <>
      <Header theme="black" logo="/bloom_logo_black.svg" aos={false} />
      <Layout>
        <HeroB
          headlineUnderline="Go Big,"
          headlineNoUnderline="or Go Home."
          text="Bloom Collective is a full-service digital consulting agency
        specializing in content strategy, design and production. We have
        experience working across Asia Pacific, North America and the Middle
        East."
          photo="whiteboard-ux.jpg"
        />
        <ContentC
          headlineUnderline="Empowering"
          headlineNoUnderline="businesses with content workflows."
          paragraphOne="In the last ten years the content paradigm has changed drastically. With an ever-growing number of relevant platforms, every business now needs to make choices about where, what and how often they will communicate–and the process can be daunting."
          paragraphTwo="Whether it's telling your brand story to an external audience, communicating internally, Bloom Collective can help you along your content journey. Our goal is to plug in where you need us, and make the process as seamless as possible."
          paragraphThree="Take a look around our site, check out our portfolio, and see what our clients are saying. Free to contact us if you have any questions, or if you would like to hear more about how we work."
          personName="Matthew Ooley"
          personTitle="Founder at Bloom Collective"
          personAvatar="matt-ooley-sm.jpg"
        />

        <Awards title="We are an award-winning agency:">
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate={true} // default false
            static={true} // default false
          >
            <AwardItem
              awardLogo="logo-marcom-awards.svg"
              awardName="2020 MarCom Award"
              awardText="Social Media Content"
            />
            <AwardItem
              awardLogo="logo-summit-awards.svg"
              awardName="2020 Summit Creative Award"
              awardText="Covid-19 Content"
            />
            <AwardItem
              awardLogo="logo-marcom-awards.svg"
              awardName="2020 MarCom Award"
              awardText="Social Media Campaign"
            />
            <AwardItem
              awardLogo="logo-summit-awards.svg"
              awardName="2020 Summit Creative Award"
              awardText="Video Campaign"
            />
            <AwardItem
              awardLogo="logo-marcom-awards.svg"
              awardName="2020 MarCom Award"
              awardText="Covid-19 Crisis Communications"
            />
            <AwardItem
              awardLogo="logo-summit-awards.svg"
              awardName="2020 Summit Creative Award"
              awardText="Social Media Content"
            />
          </Flickity>
        </Awards>
        <Location
          headlineNoUnderline="We are located in"
          headlineUnderline="Jakarta, Indonesia."
          text="Jakarta. Djakarta. Batavia. The Big Durian. Whatver you want to call it, most of us have a love/hate relationship with this jungle-come-megacity. But one thing is certain – you gotta be tough to live in Jakarta. We Bloomies pride ourselves on our Jakarta heriatge. It makes us who we are – tough, resilient and ready to weather the flood (sometimes literally)."
          photo="jakarta-sunset.jpg"
        />
      </Layout>
      <Footer />
    </>
  );
}
