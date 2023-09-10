import React from "react";
import Button from "../components/Elements/Button/Button"


const OTPVerify = (props) => {
    const { type, text, otp } = props
    return (
        <div className='block text-center mt-10 mb-10'>
            <h3 className="text-xl font-bold text-[#594545] ">{text}</h3>
            <p className="text-xl font-semibold  text-[#594545] mt-5 mb-10 ">{otp}
                <span className="text-md font-bold">{type}</span>
            </p>
        </div>
    );
};
export default OTPVerify;