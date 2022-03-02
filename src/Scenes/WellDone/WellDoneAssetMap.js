const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "wellDone",

  Bg: `${imgUrl}SB_30_Well_done_BG.svg`,

  sprites: [
    `${imgUrl}Well_done_Elephant_baby.svg`,
    `${imgUrl}Next_Button.svg`,
    `${imgUrl}replay_Button.svg`,
  ],

  sounds: [
    `${soundUrl}great_thanks_for_taking_animals_to_thier_homes.mp3`,
    `${soundUrl}well_done.mp3`,
  ],

  lottie: [`${lottieUrl}well_done.json`, `${lottieUrl}welldone_animation.json`],
};

export default IntroMap;
