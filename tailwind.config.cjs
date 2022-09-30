/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*js",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'League Spartan',
      },
      
      colors: {
        theme1: {
          Key: 'hsl(30, 25%, 89%)',
          KeyShadow: 'hsl(28, 16%, 65%)',
          KeyPad: 'hsl(223, 31%, 20%)',
          DelKey: 'hsl(225, 21%, 49%)',
          DelKeyShadow: 'hsl(224, 28%, 35%)',
          InputBg: 'hsl(224, 36%, 15%)',
          MainBg: ' hsl(222, 26%, 31%)',
          Calculate: 'hsl(6, 63%, 50%)',
          CalculateShadow: 'hsl(6, 70%, 34%)',
          clr: 'hsl(0, 0, 100%)',
          textClr: 'hsl(0,100%,100%)'
        },

        theme2: {
          Key: 'hsl(45, 7%, 89%)',
          KeyShadow: 'hsl(35, 11%, 61%)',
          KeyPad: 'hsl(0, 5%, 81%)',
          DelKey: 'hsl(185, 42%, 37%)',
          DelKeyShadow: 'hsl(185, 58%, 25%)',
          InputBg: 'hsl(0, 0%, 93%)',
          MainBg: ' hsl(0, 0%, 90%)',
          Calculate: 'hsl(6, 63%, 50%)',
          CalculateShadow: 'hsl(6, 70%, 34%)',
          clr: 'hsl(60, 10%, 19%)',
          textClr: 'hsl(0 ,0 ,100%)'
        },

        theme3: {
          Key: 'hsl(268, 47%, 21%)',
          KeyShadow: 'hsl(290, 70%, 36%)',
          KeyPad: 'hsl(268, 71%, 12%)',
          DelKey: 'hsl(281, 89%, 26%)',
          DelKeyShadow: 'hsl(285, 91%, 52%)',
          InputBg: 'hsl(268, 71%, 12%)',
          MainBg: 'hsl(268, 75%, 9%)',
          Calculate: 'hsl(176, 100%, 44%)',
          CalculateShadow: 'hsl(177, 92%, 70%)',
          clr: 'hsl(52, 100%, 62%)',
          textClr: 'hsl(52, 100%, 62%)'
        },

      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}