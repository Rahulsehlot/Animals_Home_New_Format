const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const RabbitLottieMap = {
  id: "rabbitLottie",

  Bg: `${imgUrl}Houses/Rabbit_Explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal-food/Carrots.svg`,
    `${imgUrl}animalFood_Name/carrots.svg`,
    `${imgUrl}`,
    `${imgUrl}rabbit_ForeGround.svg`,
  ],

  sounds: [`${soundUrl}Eats/rabbit_eats.mp3`],

  lottie: [`${lottieUrl}Rabbit_eats.json`],
};

export default RabbitLottieMap;
