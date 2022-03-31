const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const CamelLottieMap = {
  id: "camelLottie",

  Bg: `${imgUrl}Houses/Camel_Explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal-food/Camel_Grass.svg`,
    `${imgUrl}animalFood_Name/grass.svg`,
  ],

  sounds: [`${soundUrl}Eats/camel_eats.mp3`],

  lottie: [`${lottieUrl}Camel_eats.json`],
};

export default CamelLottieMap;
