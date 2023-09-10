import React from "react";
import InputBar from "../components/Elements/Input/InputBar"
import Button from "../components/Elements/Button/Button"
import InputDash from "../components/Elements/Input/InputDash";

const FormResetPass = () => {
    return (
        <form action="">
            <p className="text-justify text-[11px] font-semibold my-8 ">
                Masukkan e-mail atau nomor telepon yang terdaftar. Kami akan mengirimkan kode verifikasi untuk atur ulang kata sandi.
            </p>
            <InputDash w="w-full" placeholder="No Telepon atau email" txtSize="text-sm" txtAlign="text-justify"/>

            <Button h="h-10" rounded="rounded-full" color="bg-[#594545]" text="Lanjut"></Button>
        </form>
    );
};
export default FormResetPass;