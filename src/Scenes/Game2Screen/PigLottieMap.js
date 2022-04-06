const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const PigLottieMap = {
  id: "pigLottie",

  Bg: `${imgUrl}houses/pig_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/mixture_and_vegetables.svg`,
    `${imgUrl}animalfood_name/mixture_and_vegetable.svg`,
  ],

  sounds: [`${soundUrl}eats/pig_eats.mp3`],

  lottie: [`${lottieUrl}pig_eats.json`],
};

export default PigLottieMap;
