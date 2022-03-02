import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";
import IntroMap from "./WellDoneAssetMap";

export default function WellDone({ scenename }) {
  const { Bg, Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const [playing, setplaying] = useState(false);

  const Ref = useRef(null);
  const Ref1 = useRef(null);

  useEffect(() => {
    if (Assets?.wellDone && !Loading) {
      Assets?.wellDone?.sounds[0]?.play();
      setplaying(true);
      Assets?.wellDone?.sounds[0].on("end", () => {
        // setSceneId("/Lion_Game2");
        Assets?.wellDone?.sounds[2]?.play();
        Assets?.wellDone?.sounds[2].on("end", () => {
          setplaying(false);
        });
      });
    }
  }, [Assets, Loading, isLoading]);

  useEffect(() => {
    if (Assets && Ref.current && !Loading) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: Assets?.wellDone?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [Assets, Loading]);

  useEffect(() => {
    if (Assets && Ref.current && !Loading) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref1.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: Assets?.wellDone?.lottie[1],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [Assets, Loading]);

  const forward = () => {
    if (playing === false) {
      setSceneId("/");
    }
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}

          <div ref={Ref} className="welldone_lottie_container"></div>
          <div ref={Ref1} className="welldone_animation"></div>

          <Image
            src={Assets?.wellDone?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="trunky_podium"
            onClick={forward}
          />

          <Image
            src={Assets?.wellDone?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="next_wellDone"
            onClick={forward}
            style={{ cursor: "pointer" }}
          />
        </>
      }
    />
  );
}
