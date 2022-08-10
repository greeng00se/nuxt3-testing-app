import { setLocale } from "yup";

export default defineNuxtPlugin((nuxtApp) => {
  setLocale({
    string: {
      min: "최소 ${min}자리 여야 합니다.",
    },
    number: {
      min: "${min} 이상의 값이어야 합니다.",
    },
    mixed: {
      required: "필수 값입니다.",
      notType: "타입을 확인해주세요.",
    },
  });
});
