import React from "react";

const InputBar = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input className={`px-5 py-3 w-full rounded-xl bg-[#D8D8DC] block text-black mb-3`}
            type={type}
            placeholder={placeholder}
            name={name}>
        </input>
    );
};

export default InputBar;
