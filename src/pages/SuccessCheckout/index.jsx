import React from "react";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";

export default function SuccessCheckoutPage() {
  return (
    <div className="relative flex flex-col flex-1 p-[10px]">
      <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]">
        <img
          src="assets/images/backgrounds/background-glow.png"
          className="absolute bottom-0 transform -translate-x-1/2 left-1/2"
          alt=""
        />
      </div>
      <nav className="flex items-center justify-between p-[30px]">
        <Navbar />
        <div className="flex items-center gap-3">
          <Link to="signin.html">
            <div className="flex items-center gap-3 w-fit rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
              <span className="font-semibold text-white">My Dashboard</span>
            </div>
          </Link>
          <Link to="/manager/sign-up">
            <div className="flex items-center gap-3 w-fit rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
              <span className="font-semibold text-white">Sign Up</span>
            </div>
          </Link>
        </div>
      </nav>
      <h1 className="font-extrabold text-[46px] leading-[69px] text-white text-center m-auto">
        Success checkout <br />
        Please Login to continue
      </h1>
      <Link to="/manager/sign-in">
        <div class="flex items-center justify-center gap-3 w-max mx-auto mt-10 rounded-full border p-[25px_50px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
          <span class="font-semibold text-white">Sign In Now</span>
        </div>
      </Link>
    </div>
  );
}
