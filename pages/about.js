import HeroB from "../components/HeroB";
import ContentC from "../components/ContentC";
import Awards from "../components/Awards";
import Layout from "../components/layout/Layout";
import Location from "../components/Location";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AwardItem from "../components/AwardItem";

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
          photo="https://source.unsplash.com/random"
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
          personAvatar="https://source.unsplash.com/random"
        />

        <Awards headline="We are an award-winning agency.">
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate={true} // default false
            static={true} // default false
          >
            <AwardItem
              awardLogo="logo-marcom.svg"
              awardName="2020 MarCom Award"
            />
            <AwardItem
              awardLogo="logo-marcom.svg"
              awardName="2020 MarCom Award"
            />
            <AwardItem
              awardLogo="logo-summit.svg"
              awardName="2020 Summit Creative Award"
            />
            <AwardItem
              awardLogo="logo-summit.svg"
              awardName="2020 Summit Creative Award"
            />
            <AwardItem
              awardLogo="logo-marcom.svg"
              awardName="2020 MarCom Award"
            />
            <AwardItem
              awardLogo="logo-marcom.svg"
              awardName="2020 MarCom Award"
            />
          </Flickity>
        </Awards>
        <Location
          headlineNoUnderline="We are located in"
          headlineUnderline="Jakarta, Indonesia."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat."
          photo="jakarta.png"
        />
      </Layout>
    </>
  );
}
