import { createStitches } from "@stitches/react";

export const {
  config,
  theme,
  styled,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  css
} = createStitches({
  theme: {
    colors: {
      rocketseat: '#8257e6'
    } as const,
  } 
})