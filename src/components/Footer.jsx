import React from "react"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { IoArrowDownOutline } from "react-icons/io5"
import { IoArrowBack } from "react-icons/io5"
import { IoArrowForward } from "react-icons/io5"

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-12 ">
      <div className=" invisible md:visible md:flex text-white  justify-center items-center gap-5">
        <FaXTwitter />
        <FaFacebookF />
        <FaInstagram />
      </div>
      <div
        //   style={{ backgroundImage: `url("${arrowbg}")` }}
        className=" text-white mt-5 md:mt-0 bg-gradient-to-b from-tertiary to-gray-600 py-[8px] px-[7px] rounded-[50%]"
      >
        <IoArrowDownOutline />
      </div>
      <div className="text-gray-500 invisible md:flex md:visible justify-center items-center gap-5 ">
        <IoArrowBack />
        <IoArrowForward />
      </div>
    </div>
  )
}

export default Footer
