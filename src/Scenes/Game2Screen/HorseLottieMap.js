const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const HorseLottieMap = {
  id: "horseLottie",

  Bg: `${imgUrl}Houses/Horse_Explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal-food/Hay.svg`,
    `${imgUrl}animalFood_Name/hay.svg`,
    `${imgUrl}`,
    `${imgUrl}horse_ForeGround.svg`,
  ],

  sounds: [`${soundUrl}Eats/horse_eats.mp3`],

  lottie: [`${lottieUrl}Horse_eats.json`],
};

export default HorseLottieMap;
