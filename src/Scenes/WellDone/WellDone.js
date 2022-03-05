import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";

export default function WellDone() {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const [playing, setplaying] = useState(false);
  const [pointerOn, setpointerOn] = useState(false);

  const Ref = useRef(null);
  const Ref1 = useRef(null);

  useEffect(() => {
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
  }, []);

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
