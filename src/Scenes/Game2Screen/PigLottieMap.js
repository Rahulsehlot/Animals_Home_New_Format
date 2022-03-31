const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const PigLottieMap = {
  id: "pigLottie",

  Bg: `${imgUrl}Houses/Pig_Explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal-food/mixture_and_vegetables.svg`,
    `${imgUrl}animalFood_Name/mixture_and_vegetable.svg`,
  ],

  sounds: [`${soundUrl}Eats/pig_eats.mp3`],

  lottie: [`${lottieUrl}Pig_eats.json`],
};

export default PigLottieMap;
