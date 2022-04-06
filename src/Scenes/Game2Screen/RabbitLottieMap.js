const imgUrl = "ee02_ow_wai_pl1/images/";
const soundUrl = "ee02_ow_wai_pl1/sounds/";
const lottieUrl = "ee02_ow_wai_pl1/lottie/";

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
