const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const RabbitLottieMap = {
  id: "rabbitLottie",

  Bg: `${imgUrl}houses/rabbit_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/carrots.svg`,
    `${imgUrl}animalfood_name/carrots.svg`,
    `${imgUrl}`,
    `${imgUrl}rabbit_foreground.svg`,
  ],

  sounds: [`${soundUrl}eats/rabbit_eats.mp3`],

  lottie: [`${lottieUrl}rabbit_eats.json`],
};

export default RabbitLottieMap;
