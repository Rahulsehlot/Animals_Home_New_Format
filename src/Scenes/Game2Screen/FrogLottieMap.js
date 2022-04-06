const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const FrogLottieMap = {
  id: "frogLottie",

  Bg: `${imgUrl}houses/frog_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/insects.svg`,
    `${imgUrl}animalfood_name/insects.svg`,
    `${imgUrl}animal_food/bat_insects.svg`,
    `${imgUrl}animal_food/bat_insects_1.svg`,
    `${imgUrl}animal_food/bat_insects_1.svg`,
  ],

  sounds: [`${soundUrl}eats/frog_eats.mp3`],

  lottie: [`${lottieUrl}frog_eats.json`],
};

export default FrogLottieMap;
