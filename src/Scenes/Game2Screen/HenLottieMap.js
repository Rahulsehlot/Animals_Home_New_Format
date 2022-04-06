const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const HenLottieMap = {
  id: "henLottie",

  Bg: `${imgUrl}houses/hen_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/hen_grain.svg`,
    `${imgUrl}animalfood_name/grain.svg`,
  ],

  sounds: [`${soundUrl}eats/hen_eats.mp3`],

  lottie: [`${lottieUrl}hen_eats.json`],
};

export default HenLottieMap;
