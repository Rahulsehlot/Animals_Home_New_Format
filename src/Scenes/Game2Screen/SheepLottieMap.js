const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const SheepLottieMap = {
  id: "sheepLottie",

  Bg: `${imgUrl}houses/sheep_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/sheep_grass.svg`,
    `${imgUrl}animalfood_name/grass.svg`,
  ],

  sounds: [`${soundUrl}eats/sheep_eats.mp3`],

  lottie: [`${lottieUrl}sheep_eats.json`],
};

export default SheepLottieMap;
