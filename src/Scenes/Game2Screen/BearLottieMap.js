const imgUrl = "ee02_ow_wai_pl1/images/";
const soundUrl = "ee02_ow_wai_pl1/sounds/";
const lottieUrl = "ee02_ow_wai_pl1/lottie/";

const BearLottieMap = {
  id: "bearLottie",

  Bg: `${imgUrl}houses/bear_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/fish.svg`,
    `${imgUrl}animalfood_name/fish.svg`,
  ],

  sounds: [`${soundUrl}eats/bear_eats.mp3`],

  lottie: [`${lottieUrl}bear_eats.json`],
};

export default BearLottieMap;
