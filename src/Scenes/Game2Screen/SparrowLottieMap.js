const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const SparrowLottieMap = {
  id: "sparrowLottie",

  Bg: `${imgUrl}houses/nest_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/grain.svg`,
    `${imgUrl}animalfood_name/grain.svg`,
  ],

  sounds: [`${soundUrl}eats/birds_eats.mp3`],

  lottie: [`${lottieUrl}spparow_eats.json`],
};

export default SparrowLottieMap;
