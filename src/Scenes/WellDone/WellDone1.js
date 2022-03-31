import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";
import IntroMap from "./WellDoneAssetMap";
import { BGContext } from "../../contexts/Background";

export default function WellDone1({ scenename, NextSceneId, preLoad }) {
  const Next = useLoadAsset(preLoad);
  const { Bg, setBg } = useContext(BGContext);
  const [pointerOn, setpointerOn] = useState(false);

  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;
  const [playing, setplaying] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const Ref = useRef(null);
  const Ref1 = useRef(null);

  const stop_all_sounds = () => {
    Assets[scenename]?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    setBg(Assets?.wellDone?.Bg);

    if (isLoading === false) {
      if (Assets?.wellDone) {
        Assets?.wellDone?.sounds[1]?.play();
        setplaying(true);

        Assets?.wellDone?.sounds[1].on("end", () => {
          // setSceneId(NextSceneId);
          setpointerOn(true);

          // setSceneId("/Lion_Game2");
          setplaying(false);
        });
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (Assets && Ref.current) {
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
  }, []);

  const transRef = useRef(null);

  useEffect(() => {
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref1.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.wellDone?.lottie[1],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const forward = () => {
    if (playing === false) {
      setSceneId(NextSceneId);
    }
  };

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
          {/* Title */}
          <div
            className="transition"
            style={{ display: isLoading ? "block" : "none" }}
            ref={transRef}
          ></div>

          {/* <Image
            src={Assets?.wellDone?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="intro_BG"
          /> */}

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
            style={{ cursor: pointerOn === true ? "pointer" : "" }}
          />
        </>
      }
    />
  );
}
