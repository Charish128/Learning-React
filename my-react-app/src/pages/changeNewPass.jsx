import React from "react";
import AuthLayout from "../Layout/AuthLayouts";
import FormNewPass from "../Fragments/FormNewPass";
import BackButton from "../components/Elements/Button/BackButton";

const ChangeNewPass = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-[#594545] mx-40 mt-10 mb-5">PeduliSekitar</h1>
            <BackButton icon="&larr;" text="Kembali"></BackButton>
            <div className='flex justify-center mt-10'>
                <AuthLayout title="Buat Kata Sandi Baru">
                    <FormNewPass />
                </AuthLayout>
            </div>
        </div>

    );
};
export default ChangeNewPass;