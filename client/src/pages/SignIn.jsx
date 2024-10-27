import React, { useState } from "react";
import loginPics from "../assets/loginPage";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const SignIn = () => {
  const [index, setIndex] = useState(0);

  const handleImageChangeBackward = () => {
      if (index > 0) {
          setIndex(index - 1);
      } else {
          setIndex(loginPics.length-1);
      }
  };
  
  const handleImageChangeForward = () => {
      if (index + 1 > loginPics.length-1) {
          setIndex(0);
      } else {
          setIndex(index + 1);
      }
  };
  

  return (
    <div className="bg-[#676179] relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="flex relative items-center justify-around gap-3 bg-[#2B2738] w-[60%] h-[65%] rounded-[20px] p-3">
        <div className="relative w-full h-full rounded-[17px] hidden lg:block">
        <p className={`${index === 1 ? 'text-black' : 'text-white'} absolute font-Montserrat text-[30px] m-2 bottom-0 left-[35%]`}
>Welcome</p>
          <FaRegArrowAltCircleLeft className="absolute left-6 top-[50%] text-white z-10 text-[50px] pointer-events-auto" onClick={handleImageChangeBackward} />
          <FaRegArrowAltCircleRight className="absolute right-6 top-[50%] text-white z-10 text-[50px] pointer-events-auto" onClick={handleImageChangeForward} />
          <img
            src={loginPics[index].src}
            className="w-full h-full rounded-[22px]"
          />
        </div>
        <div className=" w-full h-full rounded-[23px] flex flex-col items-center justify-center gap-5">
          <h1 className="text-white text-center xl:text-[30px] text-[30px] font-Montserrat">
            Create an Account
          </h1>
          <p className="text-white">
            Already an account ? <a className="text-[#676179]">LogIn</a>
          </p>
          <div className="flex relative items-center justify-evenly gap-3 p-5">
            <input
              className="h-[50px] w-full rounded-[5px] bg-[#676179] p-3"
              placeholder="First Name"
              type="text"
            />
            <input
              className="h-[50px] w-full rounded-[5px] bg-[#676179] p-3"
              placeholder="Last Name"
              type="text"
            />
          </div>

          <div className=" flex relative flex-col w-full gap-3 px-[35px]">
            <input
              className="h-[50px] border-0 w-full rounded-[5px] bg-[#676179] p-3"
              type="email"
              placeholder="Email"
            />
            <input
              className="h-[50px] border-0 w-full rounded-[5px] bg-[#676179] p-3"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center gap-3 p-0 m-0">
            <input type="checkbox" />
            <p className="text-white">
              I agree to the{" "}
              <a className="text-[#676179]">terms & conditions.</a>
            </p>
          </div>
          <button className="bg-[#676179] text-white w-full h-[60px] font-Montserrat text-[27px] rounded-xl m-5 hover:bg-white hover:text-[#676179] transition-all duration-100">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
