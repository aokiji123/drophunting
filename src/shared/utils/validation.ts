export function validateAmount(
  value: string,
  currencyType: "Fiat" | "Crypto" = "Fiat"
): {
  isValid: boolean;
  amount: number | null;
  error?: string;
} {
  const dotCount = (value.match(/\./g) || []).length;
  if (dotCount > 1) {
    return {
      isValid: false,
      amount: null,
      error: "Only one decimal point is allowed",
    };
  }

  const cleanValue = value.replace(/[^0-9.]/g, "");

  if (!cleanValue) {
    return {
      isValid: false,
      amount: null,
      error: "Amount is required",
    };
  }

  const numValue = parseFloat(cleanValue);
  if (isNaN(numValue)) {
    return {
      isValid: false,
      amount: null,
      error: "Please enter a valid number",
    };
  }

  if (numValue <= 0) {
    return {
      isValid: false,
      amount: null,
      error: "Amount must be greater than 0",
    };
  }

  const decimalPlaces = (cleanValue.split(".")[1] || "").length;
  if (decimalPlaces > 2) {
    return {
      isValid: false,
      amount: null,
      error: "Maximum 2 decimal places allowed",
    };
  }

  // Apply currency-specific limits
  if (currencyType === "Fiat" && numValue > 2000) {
    return {
      isValid: false,
      amount: null,
      error: "Maximum amount for fiat is $2000",
    };
  }

  if (currencyType === "Crypto" && numValue > 2000) {
    return {
      isValid: false,
      amount: null,
      error: "Maximum amount for crypto is $2000",
    };
  }

  return {
    isValid: true,
    amount: numValue,
  };
}

export function formatAmount(value: number): string {
  return `$ ${value.toFixed(2)}`;
}
