const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const HorseLottieMap = {
  id: "horseLottie",

  Bg: `${imgUrl}houses/horse_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/hay.svg`,
    `${imgUrl}animalfood_name/hay.svg`,
    `${imgUrl}`,
    `${imgUrl}horse_foreground.svg`,
  ],

  sounds: [`${soundUrl}eats/horse_eats.mp3`],

  lottie: [`${lottieUrl}horse_eats.json`],
};

export default HorseLottieMap;
