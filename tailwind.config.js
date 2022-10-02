/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts,tsx}"],
  theme: {
    extend: {
      ///내가 원하는 색상을 지정
      colors: {
        "type-one-blue": "#4158D0",
        "type-one-puple": "#C850C0",
        "type-one-yellow": "#FFCC70",
        "type-two-blue": "#12c2e9",
        "type-two-puple": "#c471ed",
        "type-two-pink": "#f64f59",
        "type-three-pink": "#FA8BFF",
        "type-three-blue": "#2BD2FF",
        "type-three-green": "#2BFF88",
        "pastel-purple": "#E0C3FC",
        "pastel-blue": "#8EC5FC",
        "pastel-green-blue": "#97D9E1",
        "type-lime-light": "#FFFB7D",
        "type-lime-normal": "#85FFBD",
        glass: "#",
      },
      //내가 원하는 blur 픽셀 지정
      blur: {},

      //내가 원하는 animation-설정 지정
      animation: {
        wiggle: "wiggle 0.2s ease-in-out infinite",
        "wiggle-third": "wiggle 0.12s ease-out 3",
        "bounce-short": "bounce 0.2s ease-in-out infinite",
        "ping-one": "ping 0.1s ease-out 1",
        "green-blink": "green-blink 0.25s ease-in-out 1",
      },

      // 내가 원하는 animation-keyframes 지정
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "green-blink": {
          "0%, 100%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "rgb(134 239 172)" },
        },
      },
    },
  },
  plugins: [],
};
