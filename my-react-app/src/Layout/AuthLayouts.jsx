import React from "react";

const AuthLayout = (props) => {
    const { children, title } = props;
    return (
        <div className='w-full max-w-md'>
            <h1 className='text-4xl font-bold text-[#594545] text-center'>{title}</h1>
            {children}
        </div>
    );
};

export default AuthLayout;