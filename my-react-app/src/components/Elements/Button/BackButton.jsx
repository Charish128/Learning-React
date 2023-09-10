import React from "react";

const BackButton = (props) => {
    const { icon, text } = props;
    return (
        <div className="flex text-4xl font-semibold mx-[30rem]">
            <h1 className="p-2">{icon}</h1>
            <span className="text-base text-center py-5">{text}</span>
        </div>
    );
};

export default BackButton;