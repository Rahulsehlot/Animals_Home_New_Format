const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const DogLottieMap = {
  id: "dogLottie",

  Bg: `${imgUrl}houses/dog_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/bone.svg`,
    `${imgUrl}animalfood_name/bone.svg`,
  ],

  sounds: [`${soundUrl}eats/dog_eats.mp3`],

  lottie: [`${lottieUrl}dog_eats.json`],
};

export default DogLottieMap;
