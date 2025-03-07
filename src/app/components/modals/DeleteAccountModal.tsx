import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type DeleteAccountModalType = {
  onClose: () => void;
  onConfirm: () => void;
};

export const DeleteAccountModal = ({
  onClose,
  onConfirm,
}: DeleteAccountModalType) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-80 flex items-center justify-center">
      <div className="bg-[#1C1E22] rounded-[16px] p-6 w-[95%] max-w-[400px] relative">
        <button className="absolute top-5 right-5" onClick={onClose}>
          <IoMdClose size={24} className="text-[#8E8E8E] cursor-pointer" />
        </button>

        <h2 className="text-[24px] font-bold leading-[28px] mb-4">
          Delete Account
        </h2>

        <p className="text-[#8E8E8E] leading-[20px] mb-6">
          Are you sure you want to delete your account? This action cannot be
          undone.
        </p>

        <div className="flex gap-4 w-full">
          <button
            onClick={onClose}
            className="w-[40%] bg-[#2C2D31] py-[12px] px-[18px] rounded-[12px] font-semibold hover:bg-[#36383D] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="w-[60%] bg-[#FF6F6F] py-[12px] px-[18px] rounded-[12px] font-semibold hover:bg-[#FF8585] transition-colors flex items-center justify-center gap-2"
          >
            Delete Account
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
