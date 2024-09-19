import AutoRecord from "./components/Homepage/AutoRecord";
import Banner from "./components/Homepage/Banner";
import TryMeet from "./components/Homepage/TryMeet";

export default function Home() {
  return (
    <div>
      <Banner />
      <AutoRecord></AutoRecord>
      <TryMeet />
    </div>
  );
}
