import React from "react";

const Button = (props) => {
    const { h ,color, text, rounded } = props;
    return (
        <button
            className={`${h} px-36 w-full font-semibold ${rounded} mt-6 ${color} text-white`}
            type="submit">
            {`${text}`}
        </button>
    );
};

export default Button;