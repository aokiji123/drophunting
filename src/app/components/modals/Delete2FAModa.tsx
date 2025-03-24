import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import trashIcon from "../../../../public/assets/icons/trash.png";

type Delete2FAModalType = {
  onClose: () => void;
  onConfirm: () => void;
};

export const Delete2FAModal = ({ onClose, onConfirm }: Delete2FAModalType) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-80 flex items-center justify-center">
      <div className="bg-[#1C1E22] rounded-[16px] p-6 w-[335px] absolute top-[120px]">
        <button className="absolute top-5 right-5" onClick={onClose}>
          <IoMdClose size={24} className="text-[#949392] cursor-pointer" />
        </button>

        <div className="size-[38px] bg-[#26292E] rounded-[11px] flex items-center justify-center mb-[24px]">
          <Image src={trashIcon} alt="trash" width={16} height={16} />
        </div>

        <div className="flex flex-col gap-[20px]">
          <p className="text-[18px] font-bold leading-[20px]">Delete 2FA</p>

          <p className="text-[#8E8E8E] leading-[20px] mb-6">
            Are you sure you want to delete 2FA? This action cannot be undone.
          </p>
        </div>

        <div className="flex gap-4 w-full">
          <button
            onClick={onClose}
            className="w-[50%] h-[44px] flex items-center justify-center text-[16px] leading-[20px] bg-[#2C2D31] py-[12px] px-[18px] rounded-[12px] font-semibold font-sans hover:bg-[#36383D]">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="w-[50%] h-[44px] flex items-center justify-center text-[16px] leading-[20px] bg-[#CA3D00] py-[12px] px-[18px] rounded-[12px] font-semibold font-sans hover:bg-[#ca3d00bd]">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
