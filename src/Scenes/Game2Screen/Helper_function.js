import { LoadImage } from "../../utils/loadImage";

export const LoadStars = async (setGrey, setGold, setBar) => {
  setGrey(await LoadImage("ee02_ow_wai_pl1/images/progress_off.svg"));
  setGold(await LoadImage("ee02_ow_wai_pl1/images/progress_on.svg"));
  setBar(await LoadImage("ee02_ow_wai_pl1/images/progress_bar.svg"));
};

export const counter = (count, setCount) => {
  setCount(count + 1);
};
