const imgUrl = "ee02_ow_wai_pl1/images/";
const soundUrl = "ee02_ow_wai_pl1/sounds/";
const lottieUrl = "ee02_ow_wai_pl1/lottie/";

const CowLottieMap = {
  id: "cowLottie",

  Bg: `${imgUrl}houses/cow_explain.svg`,

  sprites: [
    `${imgUrl}animal_food/sheep_grass.svg`,
    `${imgUrl}animalfood_name/grass.svg`,
  ],

  sounds: [`${soundUrl}eats/cow_eats.mp3`],

  lottie: [`${lottieUrl}cow_eats.json`],
};

export default CowLottieMap;
