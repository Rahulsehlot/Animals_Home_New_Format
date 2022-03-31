const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const CowLottieMap = {
  id: "cowLottie",

  Bg: `${imgUrl}Houses/Cow_Explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal-food/Sheep_Grass.svg`,
    `${imgUrl}animalFood_Name/grass.svg`,
  ],

  sounds: [`${soundUrl}Eats/cow_eats.mp3`],

  lottie: [`${lottieUrl}Cow_eats.json`],
};

export default CowLottieMap;
