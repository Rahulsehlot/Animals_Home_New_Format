const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const CowLottieMap = {
  id: "cowLottie",

  Bg: `${imgUrl}houses/cow_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/sheep_grass.svg`,
    `${imgUrl}animalfood_name/grass.svg`,
  ],

  sounds: [`${soundUrl}eats/cow_eats.mp3`],

  lottie: [`${lottieUrl}cow_eats.json`],
};

export default CowLottieMap;
