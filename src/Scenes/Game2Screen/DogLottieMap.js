const imgUrl = "ee02_ow_wai_pl1/images/";
const soundUrl = "ee02_ow_wai_pl1/sounds/";
const lottieUrl = "ee02_ow_wai_pl1/lottie/";

const DogLottieMap = {
  id: "dogLottie",

  Bg: `${imgUrl}houses/dog_explain.svg`,

  sprites: [
    `${imgUrl}animal_food/bone.svg`,
    `${imgUrl}animalfood_name/bone.svg`,
  ],

  sounds: [`${soundUrl}eats/dog_eats.mp3`],

  lottie: [`${lottieUrl}dog_eats.json`],
};

export default DogLottieMap;
