import React from "react";

const Requirement = (props) => {
    const { icon, text } = props;
    return (
        <div>
            <h1 className="block text-4xl text-center font-semibold">{`${icon}`}</h1>
            <span className="text-base px-2">{`${text}`}</span>
        </div>
    );
};

export default Requirement;