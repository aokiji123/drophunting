import { create } from "zustand";
import axiosInstance from "../api/axios";

type Timezone = {
  value: string;
  label: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  avatar?: {
    src: string;
    height: number;
    width: number;
  };
  timezone?: string;
};

type StoreState = {
  timezones: Timezone[];
  selectedTimezone: string;
  user: User | null;
  paymentRedirectUrl: string | null;
  error: string | null;
  fetchTimezones: () => Promise<void>;
  updateUser: (updateData: Partial<User>) => Promise<void>;
  deleteUser: () => Promise<void>;
  payWithYookassa: (amount: number) => Promise<void>;
  payWithNowPayments: (amount: number) => Promise<void>;
  setSelectedTimezone: (timezone: string) => void;
  changePassword: (
    oldPassword: string,
    newPassword: string,
    passwordConfirmation: string
  ) => Promise<void>;
};

const useStore = create<StoreState>((set) => ({
  timezones: [],
  selectedTimezone: "Select your timezone",
  user: null,
  paymentRedirectUrl: null,
  error: null,

  setSelectedTimezone: (timezone: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedTimezone", timezone);
    }
    set({ selectedTimezone: timezone });
  },

  fetchTimezones: async () => {
    try {
      const response = await axiosInstance.get("/api/timezones");

      let timezoneData: Timezone[] = [];

      if (Array.isArray(response.data)) {
        timezoneData = response.data.map(
          (tz: string | { value: string; label: string }) => ({
            value: typeof tz === "string" ? tz : tz.value,
            label: typeof tz === "string" ? tz : tz.label,
          })
        );
      } else if (typeof response.data === "object" && response.data !== null) {
        timezoneData = Object.entries(response.data).map(([value, label]) => ({
          value,
          label: label as string,
        }));
      }

      if (typeof window !== "undefined") {
        const savedTimezone = localStorage.getItem("selectedTimezone");
        if (savedTimezone && savedTimezone !== "Select your timezone") {
          set({
            timezones: timezoneData,
            selectedTimezone: savedTimezone,
            error: null,
          });
        } else {
          set({ timezones: timezoneData, error: null });
        }
      } else {
        set({ timezones: timezoneData, error: null });
      }
    } catch (error) {
      console.error("Error fetching timezones:", error);
      set({
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  },

  updateUser: async (updateData: Partial<User>) => {
    try {
      const response = await axiosInstance.put<User>(
        "/api/user/update",
        updateData
      );
      set({ user: response.data, error: null });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  },

  deleteUser: async () => {
    try {
      await axiosInstance.post("/api/user/delete", {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      });
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("user");
      }
      set({ user: null, error: null });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  },

  payWithYookassa: async (amount: number) => {
    try {
      const response = await axiosInstance.post("/api/payments/yookassa/pay", {
        amount,
      });

      set({
        paymentRedirectUrl: (response.data as { redirect_url: string })
          .redirect_url,
        error: null,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  },

  payWithNowPayments: async (amount: number) => {
    try {
      const response = await axiosInstance.post(
        "/api/payments/nowpayments/pay",
        {
          amount,
        }
      );

      set({
        paymentRedirectUrl: (response.data as { redirect_url: string })
          .redirect_url,
        error: null,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  },

  changePassword: async (
    oldPassword: string,
    newPassword: string,
    passwordConfirmation: string
  ) => {
    try {
      console.log(oldPassword, newPassword, passwordConfirmation);
      await axiosInstance.post("/api/user/change-password", {
        old_password: oldPassword,
        password: newPassword,
        password_confirmation: passwordConfirmation,
      });
      set({ error: null });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
      });
      throw error;
    }
  },
}));

export default useStore;
