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
}) {
  const { Bg, Loading } = useLoadAsset(get_tracer_obj(sceneName));
  // const [Loading, setLoading] = useState(true);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const [playing, setplaying] = useState(false);
  const [grey, setGrey] = useState(false);
  const { intro } = Assets;

  const Ref = useRef(null);

  useEffect(() => {
    if (Assets?.[sceneName] && !Loading) {
      Assets?.[sceneName]?.sounds[0]?.play();
      Assets?.[sceneName]?.sounds[0].on("end", () => {
        setSceneId(NextSceneId);
        console.log(NextSceneId);
        console.log(count);
      });
    }
  }, [Assets, Loading, isLoading]);

  useEffect(() => {
    if (count === 5) {
      setCount(0);
    }

    console.log(NextSceneId);
  }, []);

  useEffect(() => {
    if (Assets && Ref.current && !Loading) {
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
  }, [Assets, Loading]);

  console.log(NextSceneId);
  return (
    <Scenes
      sprites={
        <>
          {/* Title */}
          <Image
            src={Assets?.[sceneName]?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="Game2_question_img"
          />

          <Image
            src={Assets?.[sceneName]?.sprites[8]}
            alt="txt"
            id="fadeup"
            className={"Game2_animal_food_" + sceneName}
          />

          <Image
            src={Assets?.[sceneName]?.sprites[12]}
            alt="txt"
            id="fadeup"
            className={"Game2_animal1_food_" + sceneName}
          />

          <Image
            src={Assets?.[sceneName]?.sprites[12]}
            alt="txt"
            id="fadeup"
            className={"Game2_animal2_food_" + sceneName}
          />

          <Image
            src={Assets?.[sceneName]?.sprites[13]}
            alt="txt"
            id="fadeup"
            className={"Game2_animal3_food_" + sceneName}
          />

          <Image
            src={Assets?.[sceneName]?.sprites[9]}
            alt="txt"
            id="fadeup"
            className={"animal_text_" + sceneName}
          />

          <div className={"animal_text_" + sceneName}>
            <Image
              src={Assets?.[sceneName]?.sprites[10]}
              alt="txt"
              id="fadeup"
              className="text"
            />
          </div>

          <div className={sceneName + "_Foreground-div"}>
            <Image
              src={Assets?.[sceneName]?.sprites[11]}
              alt="txt"
              id="fadeup"
              className="horse_Foreground"
            />
          </div>

          <div ref={Ref} className={"Game2_" + sceneName}></div>
        </>
      }
    />
  );
}
