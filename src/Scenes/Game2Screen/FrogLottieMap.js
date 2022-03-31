const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const FrogLottieMap = {
  id: "frogLottie",

  Bg: `${imgUrl}Houses/Frog_Explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal-food/Insects.svg`,
    `${imgUrl}animalFood_Name/insects.svg`,
    `${imgUrl}animal-food/Bat_Insects.svg`,
    `${imgUrl}animal-food/Bat_insects_1.svg`,
    `${imgUrl}animal-food/Bat_insects_1.svg`,
  ],

  sounds: [`${soundUrl}Eats/frog_eats.mp3`],

  lottie: [`${lottieUrl}Frog_eats.json`],
};

export default FrogLottieMap;
