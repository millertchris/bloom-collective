import GoBig from "../components/GoBig";
import Empower from "../components/Empower";
import Awards from "../components/Awards";
import Layout from "../components/layout/Layout";
import Location from "../components/Location";

export default function about() {
  return (
    <Layout>
      <GoBig />
      <Empower />
      <Awards />
      <Location />
    </Layout>
  );
}