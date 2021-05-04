import CaseStudy from "../components/CaseStudy";
import Crisis from "../components/Crisis";
import Science from "../components/Science";
import Layout from "../components/layout/Layout";

export default function caseStudy() {
  return (
    <Layout lightNav>
      <CaseStudy />
      <Crisis />
      <Science />
    </Layout>
  );
}