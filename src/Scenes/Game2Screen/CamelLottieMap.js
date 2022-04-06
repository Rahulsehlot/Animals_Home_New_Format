const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const CamelLottieMap = {
  id: "camelLottie",

  Bg: `${imgUrl}houses/camel_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/camel_grass.svg`,
    `${imgUrl}animalfood_name/grass.svg`,
  ],

  sounds: [`${soundUrl}eats/camel_eats.mp3`],

  lottie: [`${lottieUrl}camel_eats.json`],
};

export default CamelLottieMap;
