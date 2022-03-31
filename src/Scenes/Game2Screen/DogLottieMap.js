const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const DogLottieMap = {
  id: "dogLottie",

  Bg: `${imgUrl}Houses/Dog_Explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal-food/Bone.svg`,
    `${imgUrl}animalFood_Name/bone.svg`,
  ],

  sounds: [`${soundUrl}Eats/dog_eats.mp3`],

  lottie: [`${lottieUrl}Dog_eats.json`],
};

export default DogLottieMap;
