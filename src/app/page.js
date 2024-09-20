

import AllIntegrations from "./components/Homepage/AllIntegrations";
import AutoRecord from "./components/Homepage/AutoRecord";
import Banner from "./components/Homepage/Banner";
import Carousel from "./components/Homepage/Carousel";
import AutoRecord from "./components/Homepage/AutoRecord";
import Banner from "./components/Homepage/Banner";
import TryMeet from "./components/Homepage/TryMeet";
import Hiw from "./components/Homepage/HIw/Hiw";

export default function Home() {
  return (
    <div>
      <Banner />
      <Hiw></Hiw>
      <AutoRecord></AutoRecord>
      <AllIntegrations></AllIntegrations>
      <Carousel></Carousel>
      <TryMeet />
    </div>
  );
}
