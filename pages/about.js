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
        experience working across Asia Pacic, North America and the Middle
        East."
          photo="bloom-project-brief.jpg"
        />
        <ContentC
          headlineUnderline="Empowering"
          headlineNoUnderline="businesses with content workflows."
          paragraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat."
          paragraphTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat."
          paragraphThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat."
          personName="Matthew Ooley"
          personTitle="Founder at Bloom Collective"
          personAvatar="matt-ooley-sm.jpg"
        />

        <Awards title="We are an award-winning agency.">
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
          text="Jakarta. Djakarta. Batavia. The Big Durian. Whatver you want to call it, most of us have a love/hate relationship with this jungle-come-megacity. But one thing is certain – you gotta be tough to live in Jakarta. We Bloomies pride ourselves on our Jakarta heriatge. It makes us who we are – tough, resilient and ready to weather the storm."
          photo="jakarta.png"
        />
      </Layout>
      <Footer />
    </>
  );
}
