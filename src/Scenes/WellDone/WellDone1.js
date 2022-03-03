import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";
import IntroMap from "./WellDoneAssetMap";

export default function WellDone1({ scenename, NextSceneId }) {
  const { Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const [playing, setplaying] = useState(false);

  const Ref = useRef(null);
  const Ref1 = useRef(null);

  const stop_all_sounds = () => {
    Assets[scenename]?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    if (Assets?.wellDone && !Loading) {
      Assets?.wellDone?.sounds[1]?.play();
      setplaying(true);

      Assets?.wellDone?.sounds[1].on("end", () => {
        // setSceneId("/Lion_Game2");
        setplaying(false);
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
          animationData: Assets?.Scene22?.lottie[17],
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
          loop: true,
          autoplay: true,
          animationData: Assets?.Scene22?.lottie[18],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [Assets, Loading]);

  const forward = () => {
    if (playing === false) {
      setSceneId(NextSceneId);
    }
  };

  return (
    <Scenes
      sprites={
        <>
          {/* Title */}

          <Image
            src={Assets?.wellDone?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="intro_BG"
          />

          <div
            ref={Ref}
            id="fadeup"
            className="welldone_lottie_container"
          ></div>
          <div ref={Ref1} id="fadeup" className="welldone_animation"></div>

          <Image
            src={Assets?.wellDone?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="trunky_podium"
            onClick={forward}
          />

          <Image
            src={Assets?.wellDone?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="next"
            onClick={forward}
            style={{ cursor: "pointer" }}
          />
        </>
      }
    />
  );
}
