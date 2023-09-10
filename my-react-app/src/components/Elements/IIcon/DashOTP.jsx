import React from "react";

const DashOTP = (props) => {
    const { icon, text } = props;
    return (
        <div>
            <h1 className="text-4xl font-semibold">{`${icon}`}</h1>
        </div>
    );
};

export default DashOTP;