import { useState, useEffect, useContext } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import { LoadStars } from "./Helper_function";

export default function Star({ num }) {
  const [isLoading, setisLoading] = useState(true);
  const { SceneId } = useContext(SceneContext);
  // const [hide, setHide] = useState(0);

  const [Grey, setGrey] = useState("");
  const [Gold, setGold] = useState("");
  const [bar, setBar] = useState("");
  useEffect(() => {
    LoadStars(setGrey, setGold, setBar);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 300);
  }, []);

  console.log(SceneId);

  useEffect(() => {
    if (
      SceneId === "/" ||
      SceneId === "/Scene2" ||
      SceneId === "/Scene2" ||
      SceneId === "/WellDone1" ||
      SceneId === "/WellDone"
    ) {
      // setHide(1);
    }
  }, []);

  return (
    <>
      {!isLoading && (
        <div
          className="fadeup"
          // style={{ display: hide === 1 ? "none" : "block" }}
        >
          <img
            alt=""
            src={`data:image/svg+xml;utf8,${encodeURIComponent(bar)}`}
            className="Progress_Bar"
          />

          <div id="star_wrap1" style={{ position: "fixed", right: "5%" }}>
            <img
              id="stars"
              className={num === 1 ? "current_star" : ""}
              alt=""
              src={
                num >= 1
                  ? `data:image/svg+xml;utf8,${encodeURIComponent(Gold)}`
                  : `data:image/svg+xml;utf8,${encodeURIComponent(Grey)}`
              }
            />
            <img
              id="stars"
              className={num === 2 ? "current_star" : ""}
              alt=""
              src={
                num >= 2
                  ? `data:image/svg+xml;utf8,${encodeURIComponent(Gold)}`
                  : `data:image/svg+xml;utf8,${encodeURIComponent(Grey)}`
              }
            />
            <img
              id="stars"
              className={num === 3 ? "current_star" : ""}
              alt=""
              src={
                num >= 3
                  ? `data:image/svg+xml;utf8,${encodeURIComponent(Gold)}`
                  : `data:image/svg+xml;utf8,${encodeURIComponent(Grey)}`
              }
            />
            <img
              id="stars"
              className={num === 4 ? "current_star" : ""}
              alt=""
              src={
                num >= 4
                  ? `data:image/svg+xml;utf8,${encodeURIComponent(Gold)}`
                  : `data:image/svg+xml;utf8,${encodeURIComponent(Grey)}`
              }
            />
            <img
              id="stars"
              className={num === 5 ? "current_star" : ""}
              alt=""
              src={
                num >= 5
                  ? `data:image/svg+xml;utf8,${encodeURIComponent(Gold)}`
                  : `data:image/svg+xml;utf8,${encodeURIComponent(Grey)}`
              }
            />
          </div>
        </div>
      )}
    </>
  );
}
