import { LoadImage } from "../../utils/loadImage";

export const LoadStars = async (setGrey, setGold, setBar) => {
  setGrey(await LoadImage("internal/images/progress_off.svg"));
  setGold(await LoadImage("internal/images/progress_on.svg"));
  setBar(await LoadImage("internal/images/progress_bar.svg"));
};

export const counter = (count, setCount) => {
  setCount(count + 1);
};
