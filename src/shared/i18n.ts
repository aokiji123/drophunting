import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      authHeader: {
        back: "Back to site",
      },
      authFooter: {
        support: "Support",
        terms: "Terms",
        privacy: "Privacy",
      },
      emailConfirmation: {
        title: "Email message was send",
        description:
          "We have sent a message to your e-mail address. To restore your password, please follow the link provided in the message.",
        login: "Log In",
      },
      forgotPassword: {
        title: "Restore password",
        description:
          "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.",
        email: "Email",
        reset: "Email password reset link",
        loading: "Loading...",
        error: "Error",
        required: "Email is required.",
        invalid: "Please enter a valid email address.",
        failed: "Failed to send reset link. Please try again.",
      },
      login: {
        title: "Sign In",
        description: "Authorize in the system to get into your account",
        email: "Email",
        password: "Password",
        loginButton: "Log In",
        loggingIn: "Logging in...",
        or: "or",
        continueWithGoogle: "Continue with Google",
        forgotPassword: "Forgot your password?",
        noAccount: "Don't have an account?",
        signUp: "Sign Up",
        captchaError: "Please verify you are not a robot",
        invalidCredentials:
          "This login and password does not exist, please try again or register a new profile",
        emailError: "Please enter a valid email address",
        passwordError: "Password must be at least 8 characters long",
      },
      signUp: {
        title: "Sign Up",
        description: "Create an account to track your investments and progress",
        name: "Name",
        email: "Email",
        password: "Password",
        signUpButton: "Sign Up",
        signingUp: "Signing up...",
        or: "or",
        continueWithGoogle: "Continue with Google",
        haveAccount: "Already have an account?",
        signIn: "Sign In",
        captchaError: "Please verify you are not a robot",
        emailExists: "This email already exists, please try again or login",
        nameRequired: "Name is required",
        emailError: "Please enter a valid email address",
        passwordError: "Password must be at least 8 characters long",
      },
      passwordResetConfirmation: {
        title: "Password reset successful",
        description:
          "Your password has been reset. You can try to log in with the new password now.",
        login: "Log In",
      },
    },
    ru: {
      authHeader: {
        back: "Назад на сайт",
      },
      authFooter: {
        support: "Поддержка",
        terms: "Условия",
        privacy: "Конфиденциальность",
      },
      emailConfirmation: {
        title: "Email сообщение отправлено",
        description:
          "Мы отправили сообщение на ваш электронный адрес. Чтобы восстановить ваш пароль, пожалуйста, следуйте ссылке, предоставленной в сообщении.",
        login: "Войти",
      },
      forgotPassword: {
        title: "Восстановить пароль",
        description:
          "Забыли пароль? Не проблема. Просто дайте нам знать ваш адрес электронной почты, и мы отправим вам ссылку для сброса пароля, которая позволит выбрать новый.",
        email: "Email",
        reset: "Отправить ссылку для сброса пароля",
        loading: "Загрузка...",
        error: "Ошибка",
        required: "Email обязателен.",
        invalid: "Пожалуйста, введите действительный адрес электронной почты.",
        failed:
          "Не удалось отправить ссылку для сброса пароля. Пожалуйста, попробуйте снова.",
      },
      login: {
        title: "Вход",
        description: "Авторизуйтесь в системе, чтобы войти в свой аккаунт",
        email: "Email",
        password: "Пароль",
        loginButton: "Войти",
        loggingIn: "Вход...",
        or: "или",
        continueWithGoogle: "Продолжить с Google",
        forgotPassword: "Забыли пароль?",
        noAccount: "Нет аккаунта?",
        signUp: "Регистрация",
        captchaError: "Пожалуйста, подтвердите, что вы не робот",
        invalidCredentials:
          "Такой логин и пароль не существуют, попробуйте снова или зарегистрируйте новый профиль",
        emailError:
          "Пожалуйста, введите действительный адрес электронной почты",
        passwordError: "Пароль должен содержать не менее 8 символов",
      },
      signUp: {
        title: "Регистрация",
        description:
          "Создайте аккаунт для отслеживания ваших инвестиций и прогресса",
        name: "Имя",
        email: "Email",
        password: "Пароль",
        signUpButton: "Зарегистрироваться",
        signingUp: "Регистрация...",
        or: "или",
        continueWithGoogle: "Продолжить с Google",
        haveAccount: "Уже есть аккаунт?",
        signIn: "Войти",
        captchaError: "Пожалуйста, подтвердите, что вы не робот",
        emailExists: "Этот email уже существует, попробуйте снова или войдите",
        nameRequired: "Имя обязательно",
        emailError:
          "Пожалуйста, введите действительный адрес электронной почты",
        passwordError: "Пароль должен содержать не менее 8 символов",
      },
      passwordResetConfirmation: {
        title: "Пароль успешно сброшен",
        description:
          "Ваш пароль был сброшен. Вы можете попробовать войти с новым паролем сейчас.",
        login: "Войти",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
