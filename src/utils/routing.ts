import router from "next/router";

export const handleRoute = (value: string) => {
  router.push(`/${value}`);
};
