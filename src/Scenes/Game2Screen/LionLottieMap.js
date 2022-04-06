const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const LionLottieMap = {
  id: "lionLottie",

  Bg: `${imgUrl}houses/lion_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/meat.svg`,
    `${imgUrl}animalfood_name/meat.svg`,
    `${imgUrl}artboard.svg`,
  ],

  sounds: [`${soundUrl}eats/lion_eats.mp3`],

  lottie: [`${lottieUrl}lion_eats.json`],
};

export default LionLottieMap;
