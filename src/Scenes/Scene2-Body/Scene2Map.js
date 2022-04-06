const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "Scene2",

  Bg: `${imgUrl}scene2.svg`,

  sprites: [
    `${imgUrl}skip_button.svg`,
    `${imgUrl}progress_bar.svg`,
    `${imgUrl}progress_bar_02.svg`,
    `${imgUrl}progress_on.svg`,
    `${imgUrl}sb_30_highlight_green.svg`,
    `${imgUrl}sb_30_highlight_red.svg`,
  ],

  sounds: [`${soundUrl}02.mp3`],

  lottie: [`${lottieUrl}scene_03.json`],
};

export default IntroMap;
