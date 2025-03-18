import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import useStore from "@/shared/store";

type ChangePasswordModalType = {
  onClose: () => void;
};

export const ChangePasswordModal = ({ onClose }: ChangePasswordModalType) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const { changePassword } = useStore();

  const handleSubmit = async () => {
    setError(undefined);
    setIsLoading(true);

    try {
      if (!oldPassword) {
        throw new Error("Current password is required");
      }

      if (!newPassword) {
        throw new Error("New password is required");
      }

      if (newPassword.length < 8) {
        throw new Error("New password must be at least 8 characters long");
      }

      if (!confirmPassword) {
        throw new Error("Please confirm your new password");
      }

      if (newPassword !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      if (oldPassword === newPassword) {
        throw new Error("New password must be different from current password");
      }

      await changePassword(oldPassword, newPassword, confirmPassword);
      onClose();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to change password"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-80 flex items-center justify-center">
      <div className="bg-[#17181B] rounded-[16px] py-[32px] px-[24px] w-[375px] absolute top-[70px]">
        <button className="absolute top-5 right-5" onClick={onClose}>
          <IoMdClose size={24} className="text-[#8E8E8E] cursor-pointer" />
        </button>

        <p className="text-[22px] font-bold leading-[20px] mb-[24px]">
          Change your password
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-[#949392]">
              Current Password
            </label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full bg-[#212226] placeholder:text-[#949392] border-[1px] border-[#212226] py-[12px] px-[16px] rounded-[14px] focus:border-[1px] focus:border-gray-400 focus:outline-none"
              placeholder="Enter current password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#949392]">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-[#212226] placeholder:text-[#949392] border-[1px] border-[#212226] py-[12px] px-[16px] rounded-[14px] focus:border-[1px] focus:border-gray-400 focus:outline-none"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#949392]">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-[#212226] placeholder:text-[#949392] border-[1px] border-[#212226] py-[12px] px-[16px] rounded-[14px] focus:border-[1px] focus:border-gray-400 focus:outline-none"
              placeholder="Confirm new password"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-[#11CA00] h-[56px] py-[12px] px-[18px] rounded-[16px] font-semibold hover:bg-[#0FB300] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-[17px] leading-[20px] font-sans mt-[40px]"
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};
