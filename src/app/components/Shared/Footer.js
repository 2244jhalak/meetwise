import Image from "next/image";
import logo from "/public/logo/LOGO.png";
const Footer = () => {
  return (
    <div className="bg-[#F8ECFF] ">
      <div className="pt-16 flex flex-col md:flex-row gap-5 px-[10%]">
        {/* left part  */}
        <div className="flex-1">
          <Image src={logo} alt="Website logo" width={80} height={80} />

          <p className="text-xs md:text-lg lg:text-xl text-[#000000]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa
            saepe atque voluptas tempora magni deleniti eius quis, temporibus,
            reprehenderit, fuga ratione velit alias perferendis labore commodi
            necessitatibus sunt est?
          </p>
          <h3 className="text-[#33118133] text-2xl md:text-5xl lg:text-7xl font-semibold">
            MEETWISE
          </h3>
        </div>
        {/* right part  */}
        <div className="grid grid-cols-3 gap-2 md:gap-5 border flex-1 text-black text-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">Product</h2>
            <a href="/">Overview</a>
            <a href="/">Meet-wise AI</a>
            <a href="/">integration</a>
          </div>
          <div className="flex flex-col gap-3 border ">
            <h2 className="text-lg font-bold">Company</h2>
            <a href="/">About</a>
            <a href="/">Mission and Values</a>
            <a href="/">Pricing</a>
          </div>
          <div className="flex flex-col gap-3 border">
            <h2 className="text-lg font-bold">Recourse</h2>
            <a href="/">Career</a>
            <a href="/">Contact us</a>
            <a href="/">Blog</a>
          </div>
        </div>
      </div>
      <p className="text-black text-center py-12">
        © 2024 MeetWise | Simplifying your online meeting experience.
      </p>
    </div>
  );
};

export default Footer;
