import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#a2f5f5",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./png.png",
  fullDecal: "./logo.png",
});

export default state;
