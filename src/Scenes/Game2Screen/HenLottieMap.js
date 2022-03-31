const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const HenLottieMap = {
  id: "henLottie",

  Bg: `${imgUrl}Houses/Hen_Explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal-food/hen_grain.svg`,
    `${imgUrl}animalFood_Name/grain.svg`,
  ],

  sounds: [`${soundUrl}Eats/hen_eats.mp3`],

  lottie: [`${lottieUrl}Hen_eats.json`],
};

export default HenLottieMap;
