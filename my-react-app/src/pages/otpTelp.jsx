import React from "react";
import OTPVerify from "../Fragments/OTPVerify"
import AuthLayout from "../Layout/AuthLayouts";
import Button from "../components/Elements/Button/Button";
import InputOTP from "../components/Elements/Input/InputDash";
import Link from "../components/Elements/IIcon/Link";

function OtpTelpPages() {

  return (
    <div>
      <h1 className="text-4xl font-bold text-[#594545] mb-10 p-10">PeduliSekitar</h1>
      <div className="flex justify-center">
        <AuthLayout title="Verifikasi">
          <OTPVerify
            text="Masukkan Kode"
            otp="Kode verifikasi telah dikirimkan melalu nomor telepon "
            type="08********12">
          </OTPVerify>
          <div className="flex justify-between ">
            <InputOTP></InputOTP>
            <InputOTP></InputOTP>
            <InputOTP></InputOTP>
            <InputOTP></InputOTP>
            <InputOTP></InputOTP>
            <InputOTP></InputOTP>
          </div>
          <Button h="h-12" rounded="rounded-full" color="bg-[#594545]" text="Verifikasi"></Button>
          <h3 className="flex justify-center gap-x-1 text-md font-bold text-[#594545] text-center mt-3 mb-5">Tidak Menerima Kode?
            <Link text="kirim ulang"></Link>
          </h3>
          <div className="flex justify-center">
            <h3 className="text-lg text-center font-semibold text-[#594545] mt-3 mb-5">Tidak Menerima Kode,
              saya meyetujui
              <div className="flex gap-2 justify-center">
                <Link text="Syarat dan Ketentuan "></Link>
                 serta 
                <Link text=" Kebijakan Privasi"></Link>
              </div>
            </h3>
          </div>
        </AuthLayout>
      </div>
    </div>
  );
};

export default OtpTelpPages ;
