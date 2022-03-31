import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";

export default function WellDone() {
  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;
  const { Bg, setBg } = useContext(BGContext);

  const [playing, setplaying] = useState(false);
  const [pointerOn, setpointerOn] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const transRef = useRef(null);

  const Ref = useRef(null);
  const Ref1 = useRef(null);

  console.log(Assets);

  useEffect(() => {
    setBg(Assets?.wellDone?.Bg);

    if (isLoading === false) {
      if (Assets?.wellDone) {
        Assets?.wellDone?.sounds[0]?.play();
        setplaying(true);
        Assets?.wellDone?.sounds[0].on("end", () => {
          // setSceneId("/Lion_Game2");
          Assets?.wellDone?.sounds[2]?.play();
          Assets?.wellDone?.sounds[2].on("end", () => {
            setplaying(false);
            setpointerOn(true);
          });
        });
      }
    }
  }, [isLoading]);

  console.log(Assets?.wellDone?.Bg);

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
  }, [Assets]);

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
  }, [Assets]);

  const forward = () => {
    if (playing === false) {
      setSceneId("/");
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
          <div
            className="transition"
            style={{ display: isLoading ? "block" : "none" }}
            ref={transRef}
          ></div>

          {/* Title */}
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
          />

          <Image
            src={Assets?.wellDone?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="next_wellDone"
            onClick={forward}
            style={{ cursor: pointerOn === true ? "pointer" : "" }}
          />
        </>
      }
    />
  );
}
