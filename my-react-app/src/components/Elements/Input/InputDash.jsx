import React from "react";

const InputDash = (props) => {
    const { w, placeholder, txtSize, txtAlign} = props;
    return (
        <input className={`px-3 py-3 ${w} border-b-4 border-[#594545] bg-[#fff] block text-[#594545] mb-3 ${txtAlign} ${txtSize}`} 
            placeholder= {placeholder}
            type="text">
        </input>
    );
};

export default InputDash;
