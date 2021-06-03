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
            <h2 class="title">Content Strategy and Workflow Design</h2>
            <p>
              Your comms channels are only as good as the content you post. But
              sometimes it isn't so easy to know what constitutes 'good
              content.' And the answer to that question might look a lot
              different, depending on the channel, target audience or
              communications goals.
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
          <div className="col image">
            <img
              src="whiteboard-ux-design.jpg"
              alt="Bloom Collective content strategy"
            />
          </div>
        </BasicContent>

        <BasicContent style="style-3" positionContent="left">
          <div className="col content">
            <h2 class="title">Content Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
            <ul>
              <li>Content design</li>
              <li>Motion graphics design</li>
              <li>Presentation and annual report design</li>
              <li>Print and collateral design</li>
            </ul>
          </div>
          <div className="col image">
            <img
              src="bloom-logo-night-work.jpg"
              alt="Bloom Collective graphic design"
            />
          </div>
        </BasicContent>

        <BasicContent style="style-3" positionContent="right">
          <div className="col content">
            <h2 class="title">Lorem, ipsum dolor.</h2>
            <p>
              Have a cool idea for a new YouTube serial, but don't know where to
              start? Whether it's an in-studio shoot, or a fully illustrated
              animation, Bloom Collective can take you from concept to finished
              product––and in record time.
            </p>
            <p>
              Our team of in-house creators and producers have experience
              designing just about everything. From motion graphics and
              animation to video editing and even sound design – we can handle
              it.
            </p>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div className="col image">
            <img
              src="bloom-collective-content-production.jpg"
              alt="Bloom Collective content production"
            />
          </div>
        </BasicContent>
      </main>
      <Footer />
    </>
  );
}
