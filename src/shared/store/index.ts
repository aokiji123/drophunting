import { create } from "zustand";
import { persist } from "zustand/middleware";
import axiosInstance from "../api/axios";
import Cookies from "js-cookie";

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
  balance?: string;
};

type Plan = {
  id: number;
  name: string;
  count_days: number;
  price: string;
  price_month: string | null;
  sort: number;
};

type Subscription = {
  date_start: string;
  date_end: string;
  price: string;
  name: string;
};

type SubscriptionsResponse = {
  current_page: number;
  data: Subscription[];
  first_page_url: string;
  from: number;
  next_page_url: string | null;
  path: string;
  per_page: string;
  prev_page_url: string | null;
  to: number;
};

type ReferralUser = {
  id: number;
  email: string;
  avatar: string;
  name: string;
};

type ReferralTransaction = {
  id: number;
  sum: string;
  referal_id: number;
  date: string;
  referal: ReferralUser;
};

type ReferralsResponse = {
  limit_referals: number;
  referrals_count: number;
  profit: string;
  rewards: number;
  referal_link: string;
  transactions: {
    current_page: number;
    data: ReferralTransaction[];
    first_page_url: string;
    from: number;
    next_page_url: string | null;
    path: string;
    per_page: string;
    prev_page_url: string | null;
    to: number;
  };
};

type TagName = {
  en: string;
  ru: string;
};

type Tag = {
  id: number;
  name: TagName;
  sort: number;
};

type Icon = {
  id: number;
  path: string;
};

type Marker = {
  id: number;
  title: string;
  icon_id: number | null;
  highlighted: boolean;
  pivot: {
    project_id: number;
    marker_id: number;
  };
  icon: Icon | null;
};

type Guide = {
  id: number;
  tag_id: number | null;
  title: string;
  slug: string;
  time: number;
  description: string;
  evaluation: number;
  tvl: string;
  investments: string;
  logo: string;
  tasks_count: number;
  competed_tasks_count: number;
  favorite: number;
  updated: string;
  markers: Marker[];
};

type GuidesResponse = {
  current_page: number;
  data: Guide[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

type GuidesParams = {
  page?: number;
  tag_id?: number;
  search?: string;
  favorites?: boolean;
  sorting?: 1 | 2;
};

type Coupon = {
  sale: string;
  perc: boolean;
};

type CouponResponse = {
  type: string;
  coupon?: Coupon;
  message?: string;
};

type ErrorResponse = {
  status?: number;
  data?: {
    message?: string;
    errors?: {
      code?: string[];
    };
  };
};

type BuyPlanResponse = {
  type: string;
  message: string;
};

type StoreState = {
  timezones: Timezone[];
  selectedTimezone: string;
  user: User | null;
  paymentRedirectUrl: string | null;
  error: string | null;
  plans: Plan[];
  isLoadingPlans: boolean;
  plansFetchError: string | null;
  coupon: Coupon | null;
  isCouponLoading: boolean;
  couponError: string | null;
  isBuyingPlan: boolean;
  buyPlanError: string | null;
  buyPlanSuccess: string | null;
  subscriptions: Subscription[];
  isLoadingSubscriptions: boolean;
  subscriptionsError: string | null;
  referrals: ReferralsResponse | null;
  isLoadingReferrals: boolean;
  referralsError: string | null;
  tags: Tag[];
  isLoadingTags: boolean;
  tagsError: string | null;
  guides: GuidesResponse | null;
  isLoadingGuides: boolean;
  guidesError: string | null;
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
  fetchPlans: () => Promise<void>;
  checkCoupon: (code: string) => Promise<Coupon | null>;
  clearCoupon: () => void;
  buyPlan: (planId: number, couponCode?: string) => Promise<boolean>;
  resetBuyPlanState: () => void;
  fetchSubscriptions: () => Promise<void>;
  fetchReferrals: () => Promise<void>;
  fetchTags: () => Promise<void>;
  fetchGuides: (params?: GuidesParams) => Promise<void>;
  toggleFavorite: (guideId: number) => Promise<boolean>;
};

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      timezones: [],
      selectedTimezone: "Select your timezone",
      user: null,
      paymentRedirectUrl: null,
      error: null,
      plans: [],
      isLoadingPlans: false,
      plansFetchError: null,
      coupon: null,
      isCouponLoading: false,
      couponError: null,
      isBuyingPlan: false,
      buyPlanError: null,
      buyPlanSuccess: null,
      subscriptions: [],
      isLoadingSubscriptions: false,
      subscriptionsError: null,
      referrals: null,
      isLoadingReferrals: false,
      referralsError: null,
      tags: [],
      isLoadingTags: false,
      tagsError: null,
      guides: null,
      isLoadingGuides: false,
      guidesError: null,

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
          } else if (
            typeof response.data === "object" &&
            response.data !== null
          ) {
            timezoneData = Object.entries(response.data).map(
              ([value, label]) => ({
                value,
                label: label as string,
              })
            );
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

      updateUser: async (data) => {
        try {
          const response = await axiosInstance.put<User>(
            "/api/user/update",
            data
          );
          set({ user: response.data });
        } catch (error) {
          console.error("Error updating user:", error);
        }
      },

      deleteUser: async () => {
        try {
          await axiosInstance.post("/api/user/delete");
          Cookies.remove("auth-token");
          set({ user: null });
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      },

      payWithYookassa: async (amount: number) => {
        try {
          const response = await axiosInstance.post(
            "/api/payments/yookassa/pay",
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

      fetchPlans: async () => {
        try {
          set({ isLoadingPlans: true, plansFetchError: null });
          const response = await axiosInstance.get<Plan[]>("/api/plans");
          const sortedPlans = response.data.sort((a, b) => a.sort - b.sort);
          set({
            plans: sortedPlans,
            isLoadingPlans: false,
            plansFetchError: null,
          });
        } catch (error) {
          console.error("Error fetching plans:", error);
          set({
            plansFetchError: "Failed to load plans. Please try again later.",
            isLoadingPlans: false,
          });
        }
      },

      checkCoupon: async (code: string) => {
        try {
          set({ isCouponLoading: true, couponError: null });

          const response = await axiosInstance.post<CouponResponse>(
            "/api/coupon/check",
            {
              code,
            }
          );

          if (response.data.type === "success" && response.data.coupon) {
            const coupon: Coupon = response.data.coupon;
            set({ coupon, isCouponLoading: false });
            return coupon;
          }

          set({ isCouponLoading: false, coupon: null });
          return null;
        } catch (error: unknown) {
          let errorMessage = "Failed to check coupon";

          if (error && typeof error === "object" && "response" in error) {
            const errorResponse = error.response as ErrorResponse;
            if (errorResponse?.status === 400) {
              errorMessage =
                errorResponse.data?.message || "Coupon is not valid.";
            } else if (errorResponse?.status === 422) {
              errorMessage =
                errorResponse.data?.errors?.code?.[0] ||
                errorResponse.data?.message ||
                "Invalid coupon format.";
            }
          } else if (error instanceof Error) {
            errorMessage = error.message;
          }

          set({
            couponError: errorMessage,
            isCouponLoading: false,
            coupon: null,
          });
          return null;
        }
      },

      clearCoupon: () => {
        set({ coupon: null, couponError: null });
      },

      buyPlan: async (planId: number, couponCode?: string) => {
        try {
          set({
            isBuyingPlan: true,
            buyPlanError: null,
            buyPlanSuccess: null,
          });

          const payload: Record<string, string> = {};
          if (couponCode) {
            payload.code = couponCode;
          }

          const response = await axiosInstance.post<BuyPlanResponse>(
            `/api/plans/buy/${planId}`,
            payload
          );

          if (response.data.type === "success") {
            set({
              isBuyingPlan: false,
              buyPlanSuccess: response.data.message,
              coupon: null,
            });
            return true;
          }

          set({
            isBuyingPlan: false,
            buyPlanError: "An unexpected error occurred",
          });
          return false;
        } catch (error: unknown) {
          let errorMessage = "Failed to purchase plan";

          if (error && typeof error === "object" && "response" in error) {
            const errorResponse = error.response as ErrorResponse;
            if (errorResponse?.status === 400) {
              errorMessage =
                errorResponse.data?.message || "Failed to purchase plan";
            } else if (errorResponse?.status === 422) {
              errorMessage =
                errorResponse.data?.errors?.code?.[0] ||
                errorResponse.data?.message ||
                "Validation error";
            }
          } else if (error instanceof Error) {
            errorMessage = error.message;
          }

          set({
            isBuyingPlan: false,
            buyPlanError: errorMessage,
          });
          return false;
        }
      },

      resetBuyPlanState: () => {
        set({
          isBuyingPlan: false,
          buyPlanError: null,
          buyPlanSuccess: null,
        });
      },

      fetchSubscriptions: async () => {
        try {
          set({ isLoadingSubscriptions: true, subscriptionsError: null });

          const response = await axiosInstance.get<SubscriptionsResponse>(
            "/api/user/subscriptions"
          );

          set({
            subscriptions: response.data.data,
            isLoadingSubscriptions: false,
            subscriptionsError: null,
          });
        } catch (error) {
          console.error("Error fetching subscriptions:", error);
          let errorMessage = "Failed to load subscriptions";

          if (error && typeof error === "object" && "response" in error) {
            const errorResponse = error.response as ErrorResponse;
            if (errorResponse?.data?.message) {
              errorMessage = errorResponse.data.message;
            }
          } else if (error instanceof Error) {
            errorMessage = error.message;
          }

          set({
            subscriptionsError: errorMessage,
            isLoadingSubscriptions: false,
          });
        }
      },

      fetchReferrals: async () => {
        try {
          set({ isLoadingReferrals: true, referralsError: null });

          const response = await axiosInstance.get<ReferralsResponse>(
            "/api/user/referrals"
          );

          set({
            referrals: response.data,
            isLoadingReferrals: false,
            referralsError: null,
          });
        } catch (error) {
          console.error("Error fetching referrals:", error);
          let errorMessage = "Failed to load referrals";

          if (error && typeof error === "object" && "response" in error) {
            const errorResponse = error.response as ErrorResponse;
            if (errorResponse?.data?.message) {
              errorMessage = errorResponse.data.message;
            }
          } else if (error instanceof Error) {
            errorMessage = error.message;
          }

          set({
            referralsError: errorMessage,
            isLoadingReferrals: false,
          });
        }
      },

      fetchTags: async () => {
        try {
          set({ isLoadingTags: true, tagsError: null });

          const response = await axiosInstance.get<Tag[]>("/api/tags");

          const sortedTags = response.data.sort((a, b) => a.sort - b.sort);

          set({
            tags: sortedTags,
            isLoadingTags: false,
            tagsError: null,
          });
        } catch (error) {
          console.error("Error fetching tags:", error);
          let errorMessage = "Failed to load tags";

          if (error && typeof error === "object" && "response" in error) {
            const errorResponse = error.response as ErrorResponse;
            if (errorResponse?.data?.message) {
              errorMessage = errorResponse.data.message;
            }
          } else if (error instanceof Error) {
            errorMessage = error.message;
          }

          set({
            tagsError: errorMessage,
            isLoadingTags: false,
          });
        }
      },

      fetchGuides: async (params?: GuidesParams) => {
        try {
          set({ isLoadingGuides: true, guidesError: null });

          const queryParams = new URLSearchParams();
          if (params) {
            if (params.page) queryParams.append("page", params.page.toString());
            if (params.tag_id)
              queryParams.append("tag_id", params.tag_id.toString());
            if (params.search) queryParams.append("search", params.search);
            if (params.favorites !== undefined)
              queryParams.append("favorites", params.favorites.toString());
            if (params.sorting)
              queryParams.append("sorting", params.sorting.toString());
          }

          const queryString = queryParams.toString();
          const url = `/api/projects${queryString ? `?${queryString}` : ""}`;

          const response = await axiosInstance.get<GuidesResponse>(url);

          set({
            guides: response.data,
            isLoadingGuides: false,
            guidesError: null,
          });
        } catch (error) {
          console.error("Error fetching guides:", error);
          let errorMessage = "Failed to load guides";

          if (error && typeof error === "object" && "response" in error) {
            const errorResponse = error.response as ErrorResponse;
            if (errorResponse?.data?.message) {
              errorMessage = errorResponse.data.message;
            }
          } else if (error instanceof Error) {
            errorMessage = error.message;
          }

          set({
            guidesError: errorMessage,
            isLoadingGuides: false,
          });
        }
      },

      toggleFavorite: async (guideId: number) => {
        try {
          const currentGuides = get().guides;
          if (currentGuides) {
            const updatedGuides = {
              ...currentGuides,
              data: currentGuides.data.map((guide) => {
                if (guide.id === guideId) {
                  return {
                    ...guide,
                    favorite: guide.favorite > 0 ? 0 : 1,
                  };
                }
                return guide;
              }),
            };
            set({ guides: updatedGuides });
          }

          await axiosInstance.post(`/api/projects/favorite/${guideId}`);

          return true;
        } catch (error) {
          console.error("Error toggling favorite:", error);

          const currentGuides = get().guides;
          if (currentGuides) {
            const revertedGuides = {
              ...currentGuides,
              data: currentGuides.data.map((guide) => {
                if (guide.id === guideId) {
                  return {
                    ...guide,
                    favorite: guide.favorite > 0 ? 0 : 1,
                  };
                }
                return guide;
              }),
            };
            set({ guides: revertedGuides });
          }

          return false;
        }
      },
    }),
    {
      name: "drophunting-store",
      partialize: (state) => ({
        selectedTimezone: state.selectedTimezone,
        coupon: state.coupon,
      }),
    }
  )
);

export default useStore;
