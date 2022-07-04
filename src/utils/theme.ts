import {
    extendTheme,
    theme as baseTheme,
    withDefaultColorScheme,
} from "@chakra-ui/react";

const theme = extendTheme(
    {
        config: {
            initialColorMode: "system",
            useSystemColorMode: true,
        },
        colors: {
            brand: {
                900: "#1a365d",
                800: "#153e75",
                700: "#2a69ac",
                600: "#5e9ed6",
                500: "#73bcf7",
                400: "#9fd1ff",
                300: "#c3eaff",
                200: "#e8f4ff",
                100: "#fcfdfe",
                50: "#fafbfc",
            },
        },
        //   fonts: {
        //     body: `Noto Sans, ${baseTheme.fonts.body}, sans-serif`,
        //     heading: `Potta One, ${baseTheme.fonts.heading}, serif`,
        //     mono: `JetBrains Mono, ${baseTheme.fonts.heading}, monospace`,
        //   },
        //   FontFaceSet: {
        //     "JetBrains Mono": {
        //       fontFamily: `JetBrains Mono`,
        //       fontStyle: `normal`,
        //       fontWeight: `400`,
        //       src: `url("/fonts/JetBrainsMono-Regular.woff2") format("woff2"), url("/fonts/JetBrainsMono-Regular.woff") format("woff")`,
        //     },
        //     "Potta One": {
        //       fontFamily: `Potta One`,
        //       fontStyle: `normal`,
        //       fontWeight: `400`,
        //       src: `url("/fonts/PottaOne-Regular.woff2") format("woff2"), url("/fonts/PottaOne-Regular.woff") format("woff")`,
        //     },
        //     "Noto Sans": {
        //       fontFamily: `Noto Sans`,
        //       fontStyle: `normal`,
        //       fontWeight: `400`,
        //       src: `url("/fonts/NotoSans-Regular.ttf") format("truetype"), url("/fonts/NotoSans-Regular.woff") format("woff")`,

        //   },

        //   // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
        //   // fontWeights: {
        //   //   body: 400,
        //   //   heading: 700,
        //   //   bold: 700,
        //   // },
        //   // lineHeights: {
        //   //   body: 1.5,
        //   //   heading: 1.25,
        //   // },

        //   // text: {
        //   //   body: {
        //   //     color: `#2a69ac`,
        //   //     fontFamily: `body`,
        //   //     fontSize: [1, 2],
        //   //     lineHeight: `body`,
        //   //     fontStyle: `normal`
        //   //   },
        //   //   heading: {
        //   //     fontFamily: `heading`,
        //   //     lineHeight: `heading`,
        //   //     fontWeight: `heading`,
        //   //   },
        //   // },
        //   // styles: {
        //   //   root: {
        //   //     fontFamily: `body`,
        //   //     lineHeight: `body`,
        //   //     fontWeight: `body`,
        //   //   },
        //   // },
    },
    withDefaultColorScheme({
        colorScheme: "brand",
    }),
    baseTheme,
);

export default theme;
