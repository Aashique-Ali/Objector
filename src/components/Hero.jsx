import React from "react"
import flower from "../images/flower.png"
import lines from "../images/lines.png"
import { IoCall } from "react-icons/io5"

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row text-center md:text-start justify-between items-center uppercase px-12 pt-8 md:pt-0">
      <div className="text-white md:hidden ">
        <h2 className="md:text-end md:pr-10">create 3d ai generated</h2>
        <h1 className="text-8xl font-semibold">object</h1>
      </div>
      <div className="text-white order-last md:order-none ">
        <h2 className="text-end pr-10 hidden md:block">
          create 3d ai generated
        </h2>
        <h1 className="text-8xl font-bold hidden md:block">object</h1>
        <p className="w-[350px] md:w-[380px] text-sm text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <span className="flex md:justify-start justify-center items-center gap-1 pt-5">
          <button className="bg-white py-1 px-12 text-black  uppercase font-bold rounded-full border-4 border-tertiary">
            signup
          </button>
          <span className="bg-white p-2 rounded-[50%] border-4 border-tertiary ">
            <IoCall className="text-black" />
          </span>
        </span>
      </div>
      <div className="flex justify-center items-center gap-8 ">
        <img src={flower} alt="" className="w-[500px]" />
        <img src={lines} alt="" className="w-[5px] hidden md:block" />
      </div>
    </div>
  )
}

export default Hero
