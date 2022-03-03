import { useContext, useRef, useEffect } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Scene2Map";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";

export default function Scene2({ scenename }) {
  const { Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;

  const Ref = useRef(null);

  const stop_all_sounds = () => {
    Assets.Scene2?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    if (Assets?.Scene2 && !Loading) {
      Assets?.Scene2?.sounds[0]?.play();
      Assets?.Scene2?.sounds[0].on("end", () => {
        setSceneId("/Lion_Game2");
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
          loop: true,
          autoplay: true,
          animationData: Assets?.Scene22?.lottie[16],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [Assets, Loading]);

  const forward = () => {
    stop_all_sounds();
    setSceneId("/Lion_Game2");
  };

  return (
    <Scenes
      sprites={
        <>
          {/* Title */}
          <Image
            src={Assets?.Scene2?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="intro_BG"
          />

          <div ref={Ref} id="fadeup" className="Scene2_lottie_container"></div>
          <Image
            src={Assets?.Scene2?.sprites[0]}
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
