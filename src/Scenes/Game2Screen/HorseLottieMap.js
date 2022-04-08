const imgUrl = "ee02_ow_wai_pl1/images/";
const soundUrl = "ee02_ow_wai_pl1/sounds/";
const lottieUrl = "ee02_ow_wai_pl1/lottie/";

const HorseLottieMap = {
  id: "horseLottie",

  Bg: `${imgUrl}houses/horse_explain.svg`,

  sprites: [
    `${imgUrl}animal_food/hay.svg`,
    `${imgUrl}animalfood_name/hay.svg`,
    `${imgUrl}horse_foreground.svg`,
  ],

  sounds: [`${soundUrl}eats/horse_eats.mp3`],

  lottie: [`${lottieUrl}horse_eats.json`],
};

export default HorseLottieMap;
