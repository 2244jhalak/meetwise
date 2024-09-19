

import AllIntegrations from "./components/Homepage/AllIntegrations";
import AutoRecord from "./components/Homepage/AutoRecord";
import Banner from "./components/Homepage/Banner";
import Carousel from "./components/Homepage/Carousel";

export default function Home() {
  return (
    <div>

      <Banner />
      <AutoRecord></AutoRecord>
      <AllIntegrations></AllIntegrations>
      <Carousel></Carousel>
    </div>
  );
}