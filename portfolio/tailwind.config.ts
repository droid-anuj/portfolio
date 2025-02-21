import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0A",       // Deep Black
        secondary: "#1A1A1A",     // Soft Black
        accent: "#2563EB",        // Royal Blue
        highlight: "#3B82F6",     // Vibrant Blue
        warning: "#DC2626",       // Bright Red
        danger: "#EF4444",        // Soft Red
        success: "#1D4ED8",       // Deep Blue
        textPrimary: "#FFFFFF",   // Pure White
        textSecondary: "#E5E7EB", // Light Gray
        background: "#000000",    // Pure Black
        cardBg: "#111111",        // Dark Card Background
        border: "#2D3748",        // Dark Gray Border
        overlay: "rgba(0, 0, 0, 0.7)", // Dark Overlay
      },
      backdropBlur: {
        xs: "2px",
        "3xl": "48px",
      },
      blur: {
        "3xl": "48px",
      },
      transitionProperty: {
        width: "width",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(to right, #000000, #2563EB, #DC2626)",
      },
    },
  },
  plugins: [],
} satisfies Config;
