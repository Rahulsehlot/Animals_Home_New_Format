const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const OwlLottieMap = {
  id: "owlLottie",

  Bg: `${imgUrl}houses/owl_explain.svg`,

  sprites: [
    `${imgUrl}`,
    `${imgUrl}animal_food/owl_worms.svg`,
    `${imgUrl}animalfood_name/worms.svg`,
    `${imgUrl}`,
    `${imgUrl}animal_food/owl_worms_1.svg`,
    `${imgUrl}animal_food/owl_worms.svg`,
  ],

  sounds: [`${soundUrl}eats/owl_eats.mp3`],

  lottie: [`${lottieUrl}owl_eats.json`],
};

export default OwlLottieMap;
