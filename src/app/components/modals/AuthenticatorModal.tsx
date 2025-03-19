import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import qrCode from "../../../../public/assets/authenticator.png";
import { LuCopy } from "react-icons/lu";

type DeleteAccountModalType = {
  onClose: () => void;
  onNext: () => void;
};

export const AuthenticatorModal = ({
  onClose,
  onNext,
}: DeleteAccountModalType) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-80 flex items-center justify-center">
      <div className="bg-[#1C1E22] rounded-[16px] p-6 max-w-[370px] w-full absolute top-[120px]">
        <button className="absolute top-5 right-5" onClick={onClose}>
          <IoMdClose size={24} className="text-[#8E8E8E] cursor-pointer" />
        </button>

        <div className="flex flex-col gap-[15px]">
          <p className="text-[18px] font-bold leading-[20px]">
            Link an Authenticator
          </p>

          <p className="text-[#949392] leading-[20px] mb-6">
            Scan this QR code in the App
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            src={qrCode}
            alt="QR Code"
            className="w-[178px] h-[183px] mb-[32px]"
          />
          <p className="text-[14px] leading-[18px] font-semibold font-sans cursor-pointer flex items-center gap-2">
            IQRJSPZSD6YUFEFY
            <LuCopy size={16} />
          </p>
          <p className="my-[16px] text-[14px] leading-[16px] font-sans text-[#656768] text-center">
            If you can&apos;t scan the QR code, enter the code manually into the
            app.
          </p>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-[#11CA00] h-[56px] py-[12px] px-[18px] rounded-[16px] font-semibold hover:bg-[#0FB300] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-[17px] leading-[20px] font-sans mt-[8px]">
          Next
        </button>
      </div>
    </div>
  );
};
