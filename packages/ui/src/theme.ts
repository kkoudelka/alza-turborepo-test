export const baseTheme = {
  colors: {
    transparent: "rgb(255, 255, 255, 0)",
    white: "#ffffff",
    grey0: "#f0f0f0",
    grey1: "#f8f8f8",
    grey2: "#f4f5f5",
    grey3: "#e0e0e0",
    grey4: "#c6c6c6",
    grey5: "#a4a4a4",
    grey6: "#505050",
    grey7: "#383838",
    grey8: "#212121",
    black: "#000000",

    blue100: "#ecf5fe",
    blue300: "#bfdaee",
    blue500: "#0094E7",
    blue700: "#0383CB",

    blueBorder: "#B5E4FE",
    bluePrimary: "#00275B",
    bluePrimaryLight: "#1653A4",
    blueHeadings: "#00275A",

    green100: "#f2fde5",
    green500: "#a1c900",
    green700: "#689700",
    green900: "#5c7e10",

    greenBorder: "#D3ECB6",
    greenSecondary: "#84b517",
    greenPrimaryLight: "#B1DA0F",

    yellow100: "#fff9d7",
    yellow700: "#ffd538",

    yellowBorder: "#EAE3B8",

    goldPrimary: "#b7a265",

    orange100: "#fff3ec",
    orange500: "#f29400",
    orange700: "#fd7528",

    orangeBorder: "#FFDAC5",
    orangePrimaryLight: "#FA8F42",

    red100: "#ffeeee",
    red500: "#e9242e",
    red700: "#c91f28",

    redBorder: "#F9CDCD",
    redPrice: "#F00000",
    redPremium: "#AF1528",

    brown100: "#FAF6F2",
    brown500: "#916a3f",
    brown700: "#764510",

    brownBorder: "#ECE4DB",
    brownPrimaryLight: "#975216",
  },

  specialColors: {
    yellowDiscount: "#fdf988",
    greenB2B: "#43bd9e",
  },

  sectionColors: {
    blueAlza: "#00275b",
    blueAlzaLight: "#1653a4",
    blueMedia: "#0094e7",
    blueMediaLight: "#3cb2f5",
    orangeToys: "#fd7528",
    orangeToysLight: "#fa8f42",
    goldTrendy: "#c7b276",
    goldTrendyDark: "#b7a265",
    redMaxi: "#e9242e",
    redMaxiDark: "#c91f28",
    greenSport: "#a1c900",
    greenSportLight: "#b1da0f",
    brownHobby: "#764510",
    brownHobbyLight: "#975216",
    greyAutoMoto: "#262f38",
    greyAutoMotoLight: "#4f5b68",
    ochrePet: "#cb8f10",
    ochrePetLight: "#e1a82f",
  },

  availabilityColors: {
    avl0: "#398000",
    avl1: "#00275a",
    avl2: "#91c71d",
    avl3: "#84551f",
    avl4: "#e0621f",
    avl5: "#3697d9",
    avl7: "#0000c0",
  },

  socialColors: {
    twitter: "#00a2e1",
    facebook: "#355896",
    googleplus: "#e55045",
    isic: "#D0F0FB",
    isicdark: "#4ebcbd",
    neo: "#2eb3fd",
  },

  energyClassColors: {
    highLandGreen: "#00a651",
    freshGreen: "#50b848",
    limeGreen: "#bfd730",
    telecomYellow: "#fff200",
    mustardYellow: "#fdb913",
    teracottaOrange: "#f36f21",
    lipstickRed: "#ed1c24",
  },

  controls: {
    disabled: "rgba(0, 0, 0, 0.26)",
    height: {
      small: 32,
      medium: 42,
      large: 60,
    },
  },

  icons: {
    infoIconCircle: "/React/src/assets/icons/icons-circle-info.svg",
  },

  breakpoints: {
    // Up to this width (including) show mobile versions of components,
    // Above this width show desktop versions of components
    // Generally we want this to be one of breakpoints. Currently set to sm breakpoint.
    mobile: 600,
  },

  semiTransparentColors: {
    black: "rgba(0, 0, 0, .85)",
  },

  zIndex: {
    modal: 8002,
    snackbar: 8003,
    tooltip: 8100,
  },
} as const;
