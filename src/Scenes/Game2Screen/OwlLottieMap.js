const imgUrl = "ee02_ow_wai_pl1/images/";
const soundUrl = "ee02_ow_wai_pl1/sounds/";
const lottieUrl = "ee02_ow_wai_pl1/lottie/";

const OwlLottieMap = {
  id: "owlLottie",

  Bg: `${imgUrl}houses/owl_explain.svg`,

  sprites: [
    `${imgUrl}animal_food/owl_worms.svg`,
    `${imgUrl}animalfood_name/worms.svg`,
    `${imgUrl}animal_food/owl_worms_1.svg`,
    `${imgUrl}animal_food/owl_worms.svg`,
  ],

  sounds: [`${soundUrl}eats/owl_eats.mp3`],

  lottie: [`${lottieUrl}owl_eats.json`],
};

export default OwlLottieMap;
