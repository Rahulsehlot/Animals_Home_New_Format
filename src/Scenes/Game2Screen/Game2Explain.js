import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Game2AssetMap";
import lottie from "lottie-web";
import "../../styles/Game2.css";
import Image from "../../utils/elements/Image";
import LionMap from "./LionMap";
import DogMap from "./DogMap";
import HorseMap from "./HorseMap";
import RabbitMap from "./RabbitMap";
import FrogMap from "./FrogMap";
import SparrowMap from "./SparrowMap";
import BearMap from "./BearMap";
import PigMap from "./PigMap";
import HenMap from "./HenMap";
import SheepMap from "./SheepMap";
import CowMap from "./CowMap";
import MonkeyMap from "./MonkeyMap";
import CamelMap from "./CamelMap";
import BatMap from "./BatMap";
import OwlMap from "./OwlMap";
import Star from "./progressBar";
import { BGContext } from "../../contexts/Background";

function get_tracer_obj(type) {
  switch (type) {
    case "lion":
      return LionMap;
      break;
    case "dog":
      return DogMap;
      break;
    case "horse":
      return HorseMap;
      break;
    case "rabbit":
      return RabbitMap;
      break;
    case "frog":
      return FrogMap;
      break;
    case "sparrow":
      return SparrowMap;
    case "bear":
      return BearMap;
    case "pig":
      return PigMap;
    case "hen":
      return HenMap;
    case "sheep":
      return SheepMap;
    case "cow":
      return CowMap;
    case "monkey":
      return MonkeyMap;
    case "camel":
      return CamelMap;
    case "bat":
      return BatMap;
    case "owl":
      return OwlMap;

    default:
      return "";
  }
}

export default function Game2Explain({
  NextSceneId,
  sceneName,
  count,
  setCount,
  lottieID,
  preLoad,
}) {
  const Next = useLoadAsset(preLoad);
  const { Bg, setBg } = useContext(BGContext);

  const [Switch, setSwitch] = useState(false);

  // const { Bg, Loading } = useLoadAsset(get_tracer_obj(sceneName));
  // const [Loading, setLoading] = useState(true);

  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const [playing, setplaying] = useState(false);
  const [grey, setGrey] = useState(false);
  const { intro } = Assets;
  const [isLoading, setisLoading] = useState(true);

  const Ref = useRef(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading === false) {
        if (Assets?.[sceneName]) {
          Assets?.[sceneName]?.sounds[0]?.play();
          Assets?.[sceneName]?.sounds[0]?.on("end", () => {
            setSwitch(true);
          });
        }
      }
    }, 700);
  }, [isLoading]);

  useEffect(() => {
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.[sceneName]?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    setBg(Assets?.[sceneName]?.Bg);

    if (Switch && !Next.Loading) {
      const timeout = setTimeout(() => {
        setSceneId(NextSceneId);
      }, 1500);
    }
  }, [Next.Loading, Switch]);

  const transRef = useRef(null);
  useEffect(() => {
    if (Assets && transRef.current) {
      lottie.loadAnimation({
        name: "boy",
        container: transRef.current,
        renderer: "svg",
        autoplay: true,
        loop: true,
        animationData: Assets?.intro?.lottie[1],
        speed: 0.7,
      });
    }
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  }, []);

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          <div
            className="transition"
            style={{ display: isLoading ? "block" : "none" }}
            ref={transRef}
          ></div>

          {/* Title */}
          <Star num={count} />

          {/* <Image
            src={Assets?.[sceneName]?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Game2_question_img"
          /> */}

          {SceneId === "/Monkey_Game2_Explain" ? (
            <></>
          ) : (
            <Image
              src={Assets?.[sceneName]?.sprites[0]}
              alt="txt"
              id="fadeup"
              className={"Game2_animal_food_" + sceneName}
            />
          )}

          <Image
            src={Assets?.[sceneName]?.sprites[2]}
            alt="txt"
            id="fadeup"
            className={"Game2_animal1_food_" + sceneName}
          />

          <Image
            src={Assets?.[sceneName]?.sprites[3]}
            alt="txt"
            id="fadeup"
            className={"Game2_animal2_food_" + sceneName}
          />

          <Image
            src={Assets?.[sceneName]?.sprites[4]}
            alt="txt"
            id="fadeup"
            className={"Game2_animal3_food_" + sceneName}
          />

          {SceneId === "/Pig_Game2_Explain" ? (
            <div id="fadeup" className={"animal_text_div_" + sceneName}>
              <div className={"animal_text_" + sceneName}>
                <Image
                  src={Assets?.[sceneName]?.sprites[1]}
                  alt="txt"
                  id="fadeup"
                  className="text"
                />
              </div>
            </div>
          ) : (
            <>
              <Image
                src={Assets?.lionLottie?.sprites[2]}
                alt="txt"
                id="fadeup"
                className={"animal_text_" + sceneName}
              />
              <div className={"animal_text_" + sceneName}>
                <Image
                  src={
                    SceneId === "/Monkey_Game2_Explain"
                      ? Assets?.[sceneName]?.sprites[0]
                      : Assets?.[sceneName]?.sprites[1]
                  }
                  alt="txt"
                  id="fadeup"
                  className="text"
                />
              </div>
            </>
          )}

          {SceneId === "/Horse_Game2_Explain" ? (
            <div className={sceneName + "_Foreground-div"}>
              <Image
                src={Assets?.[sceneName]?.sprites[2]}
                alt="txt"
                id="fadeup"
                className="horse_Foreground"
              />
            </div>
          ) : (
            <></>
          )}

          {SceneId === "/Rabbit_Game2_Explain" ? (
            <div className={sceneName + "_Foreground-div"}>
              <Image
                src={Assets?.[sceneName]?.sprites[2]}
                alt="txt"
                id="fadeup"
                className="horse_Foreground"
              />
            </div>
          ) : (
            <></>
          )}

          <div ref={Ref} className={"Game2_" + sceneName} id="fadeup"></div>
        </>
      }
    />
  );
}
