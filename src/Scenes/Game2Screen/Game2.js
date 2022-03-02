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
import { counter } from "./Helper_function";

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

export default function Game2({
  position,
  sceneName,
  NextSceneId,
  count,
  setCount,
}) {
  const { Bg, Loading } = useLoadAsset(get_tracer_obj(sceneName));
  // const [Loading, setLoading] = useState(true);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const [playing, setplaying] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const { intro } = Assets;

  const Ref = useRef(null);

  useEffect(() => {
    if (Assets?.Scene22 && !Loading) {
      Assets?.Scene22?.sounds[2]?.play();
      Assets?.Scene22?.sounds[2].on("end", () => {});
    }
  }, [Assets, Loading, isLoading]);

  console.log(Assets?.Scene22?.sounds[2]);
  const playCorrectSound = () => {
    Assets?.Scene22?.sounds[2]?.stop();
    counter(count, setCount);
    if (Assets?.Scene22 && !Loading) {
      setplaying(true);
      Assets?.Scene22?.sounds[0]?.play();
      Assets?.Scene22?.sounds[0]?.on("end", () => {
        setplaying(false);
      });
    }
  };
  const playWrongSound = () => {
    if (Assets?.Scene22 && !Loading) {
      setplaying(true);
      Assets?.Scene22?.sounds[1]?.play();
      Assets?.Scene22?.sounds[1]?.on("end", () => {
        setplaying(false);
      });
    }
  };

  const Option1 = () => {
    console.log("Correct");
    playCorrectSound();
    setCorrect(1);
    const timeout = setTimeout(() => {
      setSceneId(NextSceneId);
    }, 1500);
  };

  const Option2 = () => {
    console.log("Wrong");
    playWrongSound();
    setWrong(1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWrong(0);
    }, 3000);
  }, [wrong]);

  return (
    <Scenes
      sprites={
        <>
          {/* Title */}
          <Image
            src={Assets?.[sceneName]?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="Game2_question_img"
          />

          <Image
            src={Assets?.[sceneName]?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Game2_Character_Container"
          />

          <div className="Character">
            <Image
              src={Assets?.[sceneName]?.sprites[4]}
              alt="txt"
              id="fadeup"
              className="Character_img"
            />
          </div>

          <div className="Character_Name">
            <Image
              src={Assets?.[sceneName]?.sprites[5]}
              alt="txt"
              id="fadeup"
              className="CharacterName_img"
            />
          </div>

          <div
            className="Option1"
            onClick={Option1}
            style={{
              left: position === 1 ? "0%" : "51%",
            }}
          ></div>
          <Image
            src={Assets?.Scene22?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Option1Green"
            style={{
              left: position === 1 ? "0%" : "51%",
              display: correct === 1 ? "block" : "none",
            }}
          />

          <div
            className="Option2"
            onClick={Option2}
            style={{ left: position === 1 ? "51%" : "0%" }}
          ></div>
          <Image
            src={Assets?.Scene22?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="Option1Red"
            style={{
              left: position === 1 ? "51%" : "0%",
              display: wrong === 1 ? "block" : "none",
            }}
          />

          <Image
            src={Assets?.[sceneName]?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="Option1NameContainer"
          />

          <div
            className="Option1_Name"
            style={{
              left: position === 1 ? "6.2%" : "78.2%",
            }}
          >
            <Image
              src={Assets?.[sceneName]?.sprites[6]}
              alt="txt"
              id="fadeup"
              className="Option1Name_img"
            />
          </div>

          <Image
            src={Assets?.[sceneName]?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="Option2NameContainer"
          />

          <div
            className="Option2_Name"
            style={{
              left: position === 1 ? "78.2%" : "6.2%",
            }}
          >
            <Image
              src={Assets?.[sceneName]?.sprites[7]}
              alt="txt"
              id="fadeup"
              className="Option2Name_img"
            />
          </div>

          <Star num={count} />
        </>
      }
    />
  );
}
