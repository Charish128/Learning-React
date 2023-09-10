import React from "react";
import InputBar from "../components/Elements/Input/InputBar"
import Button from "../components/Elements/Button/Button"
import Requirement from "../components/Elements/IIcon/PassRequiremet"


const FormNewPass = () => {
    return (
        <form action="">
            <div className='block text-black my-8'>
                <InputBar type="password" placeholder="Kata sandi"></InputBar>
                <InputBar type="password" placeholder="Konfirmasi kata sandi"></InputBar>
            </div>
            <p className='mt-6 mb-6 text-[#594545]'>Password harus terdiri dari :</p>
            <div className="flex justify-around">
                <Requirement icon="a" text="Huruf Kecil"></Requirement>
                <Requirement icon="A" text="Huruf Besar"></Requirement>
                <Requirement icon="123" text="Angka"></Requirement>
                <Requirement icon="8+" text="Karakter"></Requirement>
            </div>
            <Button h="h-10" rounded="rounded-md" color="bg-[#594545]" text="Lanjut"></Button>
        </form>
    );
};
export default FormNewPass;