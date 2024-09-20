import React from "react";

const TryMeet = () => {
  return (
    <div className=" bg-white py-[10%]">
      <h2 className="text-lg md:text-2xl lg:text-6xl text-[#331181] font-medium text-center ">
        Try Meet wise
      </h2>
      <p className="text-center my-10 text-black">
        with our advanced artificial intelligence your meeting are not just{" "}
        <br />
        recorded they are transformed into valuable insights and productivity
        booster
      </p>

      {/* buttons are here  */}
      <div className="flex justify-center items-center gap-6">
        <button className="cursor-pointer transition-all bg-[#33118199] text-white px-6 py-2 rounded-3xl border-[#331181B3]border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
          Start for free
        </button>

        <button className="bg-white text-[#331181] border border-[#331181] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-3xl hover:bg-[#331181] hover:text-white hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-[#331181] shadow-[#331181] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Hover Me
        </button>
      </div>
      <div className="flex items-center justify-center  rounded-3xl bg-slate-100 w-auto">
        <iframe
          className="p-4 rounded-2xl"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/T-OTCU1xXmY?si=Mt3m5RNjwMpZWKUo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default TryMeet;
