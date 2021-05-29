import ContactUs from "../components/ContactUs";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function contact() {
  return (
    <>
      <Header theme="black" logo="/bloom_logo_black.svg" />
      <Layout>
        <ContactUs image="https://source.unsplash.com/random" />
      </Layout>
      <Footer />
    </>
  );
}
