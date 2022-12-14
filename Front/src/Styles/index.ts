import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import cashLoading from "../Lotties/cashLoading.json";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  
  font-family: 'IBM Plex Sans', sans-serif;;
}

button {
 cursor: pointer;
}

`;

export const lottieLoadOptions = {
  loop: true,
  autoplay: true,
  animationData: cashLoading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
