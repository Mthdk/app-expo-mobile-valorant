import { DefaultTheme } from "@react-navigation/native";

export const myRouterTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "blue",
    background: "white",
  },
};
