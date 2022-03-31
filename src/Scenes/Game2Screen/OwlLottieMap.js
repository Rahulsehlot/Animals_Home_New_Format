const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const OwlLottieMap = {
  id: "owlLottie",

  Bg: `${imgUrl}Houses/Owl_Explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal-food/Owl_worms.svg`,
    `${imgUrl}animalFood_Name/worms.svg`,
    `${imgUrl}`,
    `${imgUrl}animal-food/Owl_worms_1.svg`,
    `${imgUrl}animal-food/Owl_worms.svg`,
  ],

  sounds: [`${soundUrl}Eats/owl_eats.mp3`],

  lottie: [`${lottieUrl}Owl_eats.json`],
};

export default OwlLottieMap;
