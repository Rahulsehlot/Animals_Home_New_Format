import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Game2AssetMap";
import lottie from "lottie-web";
import "../../styles/Game2.css";
import Image from "../../utils/elements/Image";
import LionLottieMap from "./LionLottieMap";
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
import { BGContext } from "../../contexts/Background";

function get_tracer_obj(type) {
  switch (type) {
    case "lion":
      return LionLottieMap;
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
  preLoad,
}) {
  const Next = useLoadAsset(preLoad);
  const [Switch, setSwitch] = useState(false);

  // const { Bg, Loading } = useLoadAsset(get_tracer_obj(sceneName));
  // const [Loading, setLoading] = useState(true);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const [playing, setplaying] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [imgID, setImgID] = useState(null);
  const { intro } = Assets;

  const Ref = useRef(null);

  useEffect(() => {
    if (count === 5) {
      setCount(0);
    }

    setImgID(sceneName);
    if (Assets?.lion) {
      Assets?.lion?.sounds[0]?.play();
      Assets?.lion?.sounds[0].on("end", () => {});
    }
  }, []);

  const playCorrectSound = () => {
    Assets?.lion?.sounds[0]?.stop();
    counter(count, setCount);
    if (Assets?.lion) {
      setplaying(true);
      Assets?.lion?.sounds[2]?.play();
      Assets?.lion?.sounds[2]?.on("end", () => {
        setplaying(false);
      });
    }
  };
  const playWrongSound = () => {
    if (Assets?.lion) {
      setplaying(true);
      Assets?.lion?.sounds[1]?.play();
      Assets?.lion?.sounds[1]?.on("end", () => {
        setplaying(false);
      });
    }
  };

  const Option1 = () => {
    if (playing === false) {
      playCorrectSound();
      setCorrect(1);
      const timeout = setTimeout(() => {
        setSwitch(true);
      }, 1500);
    }
  };

  const Option2 = () => {
    if (playing === false) {
      playWrongSound();
      setWrong(1);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWrong(0);
    }, 3000);
  }, [wrong]);

  useEffect(() => {
    if (Switch && !Next.Loading) {
      setSceneId(NextSceneId);
    }
  }, [Next.Loading, Switch]);

  console.log(sceneName);
  console.log(Assets);

  return (
    <Scenes
      sprites={
        <>
          {/* Title */}
          <Image
            src={Assets?.[imgID]?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Game2_question_img"
          />

          <Image
            src={Assets?.lion?.sprites[5]}
            alt="txt"
            id="fadeup"
            className="Game2_Character_Container"
          />

          <div className="Character">
            <Image
              src={Assets?.[sceneName]?.sprites[1]}
              alt="txt"
              id="fadeup"
              className="Character_img"
            />
          </div>

          <div className="Character_Name">
            <Image
              src={Assets?.[sceneName]?.sprites[2]}
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
            src={Assets?.Scene2?.sprites[4]}
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
            src={Assets?.Scene2?.sprites[5]}
            alt="txt"
            id="fadeup"
            className="Option1Red"
            style={{
              left: position === 1 ? "51%" : "0%",
              display: wrong === 1 ? "block" : "none",
            }}
          />

          <Image
            src={Assets?.lion?.sprites[6]}
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
              src={Assets?.[sceneName]?.sprites[3]}
              alt="txt"
              id="fadeup"
              className="Option1Name_img"
            />
          </div>

          <Image
            src={Assets?.lion?.sprites[6]}
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
              src={Assets?.[sceneName]?.sprites[4]}
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
