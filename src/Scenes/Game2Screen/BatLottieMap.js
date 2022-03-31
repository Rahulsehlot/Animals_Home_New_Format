const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const BatLottieMap = {
  id: "batLottie",

  Bg: `${imgUrl}Houses/Bat_Explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal-food/Insects.svg`,
    `${imgUrl}animalFood_Name/insects.svg`,
    `${imgUrl}animal-food/Bat_Insects.svg`,
    `${imgUrl}animal-food/Bat_insects_1.svg`,
    `${imgUrl}animal-food/Bat_insects_1.svg`,
    `${imgUrl}animal-food/Insects_04.svg`,
  ],

  sounds: [`${soundUrl}Eats/bat_eats_insects.mp3`],

  lottie: [`${lottieUrl}Bat_eats.json`],
};

export default BatLottieMap;
