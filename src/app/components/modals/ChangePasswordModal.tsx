import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import useStore from "@/shared/store";

type ChangePasswordModalType = {
  onClose: () => void;
};

export const ChangePasswordModal = ({ onClose }: ChangePasswordModalType) => {
  const { t } = useTranslation();
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
        throw new Error(t("changePasswordModal.currentPasswordRequired"));
      }

      if (!newPassword) {
        throw new Error(t("changePasswordModal.newPasswordRequired"));
      }

      if (newPassword.length < 8) {
        throw new Error(t("changePasswordModal.passwordTooShort"));
      }

      if (!confirmPassword) {
        throw new Error(t("changePasswordModal.confirmPasswordRequired"));
      }

      if (newPassword !== confirmPassword) {
        throw new Error(t("changePasswordModal.passwordsDontMatch"));
      }

      if (oldPassword === newPassword) {
        throw new Error(t("changePasswordModal.samePassword"));
      }

      await changePassword(oldPassword, newPassword, confirmPassword);
      onClose();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : t("changePasswordModal.changeFailed"),
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-80 flex items-center justify-center">
      <div className="bg-[#17181B] rounded-[16px] py-[32px] px-[24px] max-w-[370px] w-full absolute top-[70px]">
        <button className="absolute top-5 right-5" onClick={onClose}>
          <IoMdClose size={24} className="text-[#8E8E8E] cursor-pointer" />
        </button>

        <p className="text-[22px] font-bold leading-[20px] mb-[24px]">
          {t("changePasswordModal.title")}
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-[#949392]">
              {t("changePasswordModal.currentPassword")}
            </label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full bg-[#212226] placeholder:text-[#949392] border-[1px] border-[#212226] py-[12px] px-[16px] rounded-[14px] focus:border-[1px] focus:border-gray-400 focus:outline-none"
              placeholder={t("changePasswordModal.currentPasswordPlaceholder")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#949392]">
              {t("changePasswordModal.newPassword")}
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-[#212226] placeholder:text-[#949392] border-[1px] border-[#212226] py-[12px] px-[16px] rounded-[14px] focus:border-[1px] focus:border-gray-400 focus:outline-none"
              placeholder={t("changePasswordModal.newPasswordPlaceholder")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#949392]">
              {t("changePasswordModal.confirmPassword")}
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-[#212226] placeholder:text-[#949392] border-[1px] border-[#212226] py-[12px] px-[16px] rounded-[14px] focus:border-[1px] focus:border-gray-400 focus:outline-none"
              placeholder={t("changePasswordModal.confirmPasswordPlaceholder")}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-[#11CA00] h-[56px] py-[12px] px-[18px] rounded-[16px] font-semibold hover:bg-[#0FB300] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-[17px] leading-[20px] font-sans mt-[40px]">
          {isLoading
            ? t("changePasswordModal.saving")
            : t("changePasswordModal.save")}
        </button>
      </div>
    </div>
  );
};
