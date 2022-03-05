const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "Scene2",

  Bg: `${imgUrl}Scene2.svg`,

  sprites: [
    `${imgUrl}Skip_Button.svg`,
    `${imgUrl}progress_bar.svg`,
    `${imgUrl}progress_bar_02.svg`,
    `${imgUrl}progress_on.svg`,
    `${imgUrl}SB_30_highlight _green.svg`,
    `${imgUrl}SB_30_highlight_red.svg`,
  ],

  sounds: [`${soundUrl}02.mp3`],

  lottie: [`${lottieUrl}Scene_03.json`],
};

export default IntroMap;
