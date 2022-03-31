const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const SheepLottieMap = {
  id: "sheepLottie",

  Bg: `${imgUrl}Houses/Sheep_Explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal-food/Sheep_Grass.svg`,
    `${imgUrl}animalFood_Name/grass.svg`,
  ],

  sounds: [`${soundUrl}Eats/sheep_eats.mp3`],

  lottie: [`${lottieUrl}Sheep_eats.json`],
};

export default SheepLottieMap;
