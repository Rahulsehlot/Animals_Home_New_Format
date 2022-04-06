import { useState, useEffect, useContext } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Image from "../../utils/elements/Image";
import { LoadStars } from "./Helper_function";
import IntroMap from "./Game2AssetMap";

export default function Star({ num }) {
  const [isLoading, setisLoading] = useState(true);
  const { SceneId, Assets } = useContext(SceneContext);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 300);
  }, []);

  return (
    <>
      {!isLoading && (
        <div
          // className="fadeup"
          id="fade"
        >
          {/* <img
            alt=""
            src={`data:image/svg+xml;utf8,${encodeURIComponent(bar)}`}
            className="Progress_Bar"
          />

          <div
            className="star_wrap1"
            id="fade"
            style={{ position: "fixed", right: "5%" }}
          >
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
          </div> */}
          <Image
            src={Assets?.Scene2?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="Progress_Bar"
          />
          <Image
            src={Assets?.Scene2?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="Progress_Bar"
          />

          <div className="starspos">
            {[...Array(num)].map((elementInArray, index) => (
              <Image
                src={Assets?.Scene2?.sprites[3]}
                alt=""
                className="progressBarStars"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
