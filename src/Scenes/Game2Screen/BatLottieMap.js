const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const BatLottieMap = {
  id: "batLottie",

  Bg: `${imgUrl}houses/bat_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/insects.svg`,
    `${imgUrl}animalfood_name/insects.svg`,
    `${imgUrl}animal_food/bat_insects.svg`,
    `${imgUrl}animal_food/bat_insects_1.svg`,
    `${imgUrl}animal_food/bat_insects_1.svg`,
    `${imgUrl}animal_food/insects_04.svg`,
  ],

  sounds: [`${soundUrl}eats/bat_eats_insects.mp3`],

  lottie: [`${lottieUrl}bat_eats.json`],
};

export default BatLottieMap;
