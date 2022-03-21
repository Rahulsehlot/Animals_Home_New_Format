import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Scene2Map";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";
import LionMap from "../Game2Screen/LionMap";
import { BGContext } from "../../contexts/Background";

export default function Scene2({ scenename }) {
  const Next = useLoadAsset(LionMap);
  const [Switch, setSwitch] = useState(false);
  const { Bg, setBg } = useContext(BGContext);
  // const [Switch, setSwitch] = useState(false);
  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;

  const Ref = useRef(null);
  const transRef = useRef(null);
  const stop_all_sounds = () => {
    Assets.Scene2?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    if (Assets?.Scene2) {
      Assets?.Scene2?.sounds[0]?.play();
      Assets?.Scene2?.sounds[0].on("end", () => {
        setSceneId("/Lion_Game2");
        setSwitch(true);
      });
    }
  }, []);

  useEffect(() => {
    setBg(Assets?.Scene2?.Bg);

    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.Scene2?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [Assets]);

  const forward = () => {
    setSceneId("/Lion_Game2");
    setSwitch(true);
  };
  useEffect(() => {
    if (Switch && !Next.Loading) {
      setSceneId("/Lion_Game2");
      stop_all_sounds();
    }
  }, [Next.Loading, Switch]);

  const [isLoading, setisLoading] = useState(true);
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
    }, 2000);
  }, []);

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}
          <div
            className="transition"
            style={{ opacity: isLoading ? 1 : 0 }}
            ref={transRef}
          ></div>
          <Image
            src={Assets?.Scene2?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="next"
            onClick={forward}
            style={{ cursor: "pointer" }}
          />
          <div ref={Ref} id="fadeup" className="Scene2_lottie_container"></div>
        </>
      }
    />
  );
}
