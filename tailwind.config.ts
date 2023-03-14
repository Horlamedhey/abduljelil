import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    screens: {
      xxxs: "320px",
      xxs: "375px",
      xs: "425px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      body: "Open Sans",
      poppins: "Poppins",
      croissant: ["Croissant One", "cursive"],
    },
    extend: {
      colors: {
        primary: "#0D0D0D",
        secondary: "#FFB703",
      },
      backgroundImage: {
        hero: "url('assets/img/hero.svg')",
        trace: "url('assets/img/traced-bg.svg')",
      },
    },
  },
};
