import "./App.css";
import mockup from "./images/illustration-mockups.svg";
import logo from "./images/logo.svg";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";

function App() {
  return (
    <main className=" h-[100vh] bg-Violet  bg-no-repeat bg-contain bg-bg-mobile md:bg-bg-Desk ">
      <div className=" container  w-[375px] mx-auto md:w-[1440px]   ">
        <img src={logo} alt="" className=" w-[150px] md:w-[250px] pt-10 " />
        <div className=" grid md:grid-cols-2 md:mt-20 gap-10">
          <div>
            <img src={mockup} alt="" className=" mt-20 " />
          </div>
          <div className="flex flex-col  items-center md:items-start  md:pt-[5rem] ">
            <h1 className=" font-open text-[white] font-[600] text-[2rem] text-center mt-4 md:text-[3rem] md:text-start ">
              Build The Community Your Fans Will Love
            </h1>
            <p className=" text-[white] mt-5 font-popins font-normal text-center md:text-start text-[18px] md:w-[80%] ">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className=" rounded-full md:px-10 py-3 px-20 bg-[white] shadow-lg mt-5 text-Violet font-open text-1xl hover:bg-SoftMagenta hover:text-[white]  ">
              Register
            </button>
            <div className=" w-[100%] mt-8 flex gap-3 text-[white] items-center justify-center lg:justify-end lg:mt-[15rem] md:gap-5   ">
              <RiFacebookCircleLine className=" text-[35px] hover:text-SoftMagenta  " />
              <TiSocialTwitterCircular className=" text-[40px] hover:text-SoftMagenta  " />
              <BsInstagram className=" text-[30px]  hover:text-SoftMagenta" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
