import Hero from "../../components/Hero";
import Gallery from "../../components/Gallery";
import FeaturedImage from "../../components/FeaturedImage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BasicContent from "../../components/BasicContent";

export default function caseStudy() {
  return (
    <>
      <Header theme="white" logo="/bloom_logo_white.svg" />

      <Hero
        style="style-2"
        logo="/logo-majid-white.svg"
        logoAlt="Logo"
        title="Majid Al Futtaim Internal Comms Social Content"
        image="https://source.unsplash.com/random"
        imageAlt="Background Image"
      />
      <BasicContent style="style-1">
        <div className="col content">
          <h2 class="title">24/7/365 Social Newsroom</h2>
          <p>
            With nearly 45,000 employees spread across 16 countries in the
            Middle East, Africa, and Asia – Majid Al Futtaim is an organization
            teeming with diversity. And it goes with out saying that they have a
            lot to talk about.
          </p>
          <p>
            As MAF's internal comms creative agency, Bloom Collective has had
            the honor of creating hundreds of pieces of content on their behalf.
            Below is a sampling of some of the content we've created for MAF.
          </p>
          <p>
            For a deeper take, look at our client
            <a href="/case-study/majid-al-futtaim"> case study</a>, which
            details our crisis content strategy approach for MAF during
            Covid-19.
          </p>
        </div>
        <div className="col list">
          <h2 className="title">Project services</h2>
          <ul>
            <li>Creative ideation</li>
            <li>Content design</li>
            <li>Content calendar management</li>
            <li>Channel management</li>
          </ul>
        </div>
      </BasicContent>
      <Gallery columns="two-column">
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/zUmCTtmIVBY"
              title="Majid Al Futtaim Virtual Leadership Workshop Promo Video – Coaching Skills"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/vKig9JtN4So"
              title="Majid Al Futtaim Virtual Leadership Workshop Promo Video – Team Dialogue"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/4v2pSGIWdR8"
              title="Majid Al Futtaim Virtual Leadership Workshop Promo Video – Building Sincere Relationships"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/oRGBATvPwJk"
              title="Majid Al Futtaim Virtual Leadership Workshop Promo Video – Trustworthiness"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
      </Gallery>
      <Gallery columns="three-column">
        <div className="col image">
          <img
            src="/maf-holiday-posters/earth-day.jpg"
            alt="Majid Al Futtaim Holiday Posters – Earth Day"
          />
        </div>
        <div className="col image">
          <img
            src="/maf-holiday-posters/jordan-independence-day.jpg"
            alt="Majid Al Futtaim Holiday Posters – Jordan Independence Day"
          />
        </div>
        <div className="col image">
          <img
            src="/maf-holiday-posters/labor-day.jpg"
            alt="Majid Al Futtaim Holiday Posters – Labor Day"
          />
        </div>
      </Gallery>
      <Gallery columns="three-column">
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/IvOLXw6GkVY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/Z4w6nsqzwsE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/4UvWtEsB8Pc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/IoF6MZaRlhc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/XNuSgPsUwe4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/LgtFp8Jd38U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
      </Gallery>
      <Footer />
    </>
  );
}
