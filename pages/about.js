import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HeroB from "../components/HeroB";
import ContentC from "../components/ContentC";
import Awards from "../components/Awards";
import Layout from "../components/layout/Layout";
import Location from "../components/Location";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AwardItem from "../components/AwardItem";

export default function about() {
  return (
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
        <Carousel
          className="row
        flex flex-col place-items-center gap-4
        sm:flex-row sm:justify-between"
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
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
        </Carousel>
      </Awards>
      <Location
        headlineNoUnderline="We are located in"
        headlineUnderline="Jakarta, Indonesia."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat."
      />
      <Footer />
    </Layout>
  );
}
