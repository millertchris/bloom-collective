import FeaturedImage from "../components/FeaturedImage";
import ContentD from "../components/ContentD";
import BasicContent from "../components/BasicContent";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

export default function services() {
  return (
    <>
      <Header theme="black" logo="/bloom_logo_black.svg" />

      <main className="main-wrapper">
        <Hero
          style="style-3"
          title="Our Services"
          image="bloom-logo-blur.jpg"
          imageAlt="Background Image"
        />

        <Intro title="What we do" />

        <BasicContent style="style-3" positionContent="right">
          <div className="col content">
            <h2 class="title">Content Strategy and Workflow Consulting</h2>
            <p>
              Your comms channels are only as good as the content you post. But
              sometimes it isn't so easy to know what constitutes 'good
              content.' And the answer to that question might look a lot
              different, depending on the channel, target audience or
              communication goals.
            </p>
            <p>
              At Bloom Collective we spend a lot of time thinking about the
              'good content' question. In fact, we created our entire agency
              aroud our scalable, bespoke content process, which centers around
              identifying the right content – and then implementing it across
              your organisation. Let us put together a custom content workflow,
              tailored to your marketing commmucation goals, budget and
              frequency.
            </p>
            <ul>
              <li>Content planning and strategy</li>
              <li>Creative consulting</li>
              <li>Content ideation</li>
              <li>Episodic and serial content</li>
            </ul>
          </div>
          <div className="col lottie">
            <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_hqq7s21h.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
        </BasicContent>

        <BasicContent style="style-3" positionContent="left">
          <div className="col content">
            <h2 class="title">Content Design and Creative</h2>
            <p>
              Brand designers. Web desingers. Print designers. What do they all
              have in common? A lot less than you might think. When it comes do
              design, not everyone is a Swiss army knife. But one thing usually
              sets designers apart – experience.
            </p>
            <p>
              Our team of in-house creators and producers have experience
              working with just about everything. We can handle just about
              anything, from motion graphics, to print, to annual reports.
            </p>
            <ul>
              <li>Graphic design</li>
              <li>Motion graphics design</li>
              <li>UX/UI design</li>
              <li>Presentation and annual report design</li>
              <li>Print and collateral design</li>
              <li>Creative concepting</li>
              <li>Copywriting</li>
            </ul>
          </div>
          <div className="col lottie">
          <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_znx6jwam.json" background="transparent" speed="1" loop autoplay></lottie-player>          </div>
        </BasicContent>

        <BasicContent style="style-3" positionContent="right">
          <div className="col content">
            <h2 class="title">Content Production</h2>
            <p>
              Have a cool idea for a new YouTube serial, but don't know where to
              start? Whether it's an in-studio shoot, or a fully illustrated
              animation, Bloom Collective can take you from concept to finished
              product–and in record time.
            </p>
            <ul>
              <li>Motion graphics animation</li>
              <li>Video editing</li>
              <li>Website production</li>
              <li>In-studio shoots</li>
              <li>On-location shoots</li>
            </ul>
          </div>
          <div className="col lottie">
          <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_hjgoiuoq.json" background="transparent" speed="1" loop autoplay></lottie-player>          </div>
        </BasicContent>
      </main>
      <Footer />
    </>
  );
}
