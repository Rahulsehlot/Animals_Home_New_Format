const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const SheepMap = {
  id: "sheep",

  sprites: [
    `${imgUrl}character_container.svg`,
    `${imgUrl}icon.svg`,
    `${imgUrl}Houses/Sheep_Question.svg`,
    `${imgUrl}Houses/Sheep_Explain.svg`,
    `${imgUrl}animals/Sheep.svg`,
    `${imgUrl}animal_Name/sheep.svg`,
    `${imgUrl}animalHouse_Name/pen.svg`,
    `${imgUrl}animalHouse_Name/den.svg`,
    `${imgUrl}animal-food/Sheep_Grass.svg`,
    `${imgUrl}Artboard.svg`,
    `${imgUrl}animalFood_Name/grass.svg`,
  ],

  sounds: [`${soundUrl}Eats/sheep_eats.mp3`],

  lottie: [`${lottieUrl}Sheep_eats.json`],
};

export default SheepMap;
