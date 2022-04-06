const imgUrl = "ee02_ow_wai_pl1/images/";
const soundUrl = "ee02_ow_wai_pl1/sounds/";
const lottieUrl = "ee02_ow_wai_pl1/lottie/";

const WellDoneMap = {
  id: "wellDone",

  Bg: `${imgUrl}sb_30_well_done_bg.svg`,

  sprites: [
    `${imgUrl}well_done_elephant_baby.svg`,
    `${imgUrl}next_button.svg`,
    `${imgUrl}replay_button.svg`,
  ],

  sounds: [
    `${soundUrl}great_thanks_for_taking_animals_to_thier_homes.mp3`,
    `${soundUrl}well_done.mp3`,
    `${soundUrl}replay_common_in_english.mp3`,
  ],

  lottie: [`${lottieUrl}well_done.json`, `${lottieUrl}welldone_animation.json`],
};

export default WellDoneMap;
