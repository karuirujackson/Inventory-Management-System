import type { Config } from "tailwindcss"; // Importing the Config type from Tailwind CSS for type-checking.
import { createThemes } from "tw-colors"; // Importing createThemes function from tw-colors for theme generation.
import colors from "tailwindcss/colors"; // Importing the default Tailwind color palette.

// List of base colors used for theme generation.
const baseColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

// Mapping of light theme shades to their inverted dark theme shades.
const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
}; 

const generateThemeObject = (colors: any, mapping: any, invert = false) => {
  const theme: any = {}; // Initialize an empty theme object.
  baseColors.forEach((color) => {
    theme[color] = {}; // Create a nested object for each base color.
    Object.entries(mapping).forEach(([key, value]: any) => {
      const shadeKey = invert ? value : key; // Use inverted shade if invert is true.
      theme[color][key] = colors[color][shadeKey]; // Assign the corresponding color shade.
    });
  });
  return theme; // Return the constructed theme object.
};

const lightTheme = generateThemeObject(colors, shadeMapping); // Generate light theme using default shade mapping.
const darkTheme = generateThemeObject(colors, shadeMapping, true); // Generate dark theme with inverted shade mapping.

// Define the complete themes object with both light and dark themes.
const themes = {
  light: {
    ...lightTheme, // Spread the light theme object.
    white: "#ffffff", // Define white color explicitly for light theme.
  },
  dark: {
    ...darkTheme, // Spread the dark theme object.
    white: colors.gray["950"], // Use a dark shade of gray for white in dark theme.
    black: colors.gray["50"], // Use a light shade of gray for black in dark theme.
  },
};

const config: Config = {
  darkMode: "class", // Enable dark mode using a CSS class.
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Files to scan for Tailwind class usage.
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Include components folder.
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Include app folder.
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", // Radial gradient utility.
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", // Conic gradient utility.
      },
    },
  },
  plugins: [createThemes(themes)], // Use createThemes plugin to apply the themes.
};

export default config; // Export the Tailwind CSS configuration.
