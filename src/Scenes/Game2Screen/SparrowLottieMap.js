const imgUrl = "ee02_ow_wai_pl1/images/";
const soundUrl = "ee02_ow_wai_pl1/sounds/";
const lottieUrl = "ee02_ow_wai_pl1/lottie/";

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
