import React from "react";
import AuthLayout from "../Layout/AuthLayouts";
import FormResetPass from "../Fragments/FormResetPass";
import BackButton from "../components/Elements/Button/BackButton";

const ChangeResetPass = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-[#594545] mx-40 mt-10 mb-5">PeduliSekitar</h1>
            <BackButton icon="&larr;" text="Kembali"></BackButton>
            <div className='flex justify-center mt-10'>
                <AuthLayout title="Atur Ulang Kata Sandi">
                    <FormResetPass />
                </AuthLayout>
            </div>
        </div>

    );
};
export default ChangeResetPass;