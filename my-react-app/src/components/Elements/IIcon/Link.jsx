import React from "react";

const Link = (props) => {
    const { text } = props;
    return (
        <div>
            <a href="#" className="font-bold underline">{text}</a>
        </div>
    );
};

export default Link;