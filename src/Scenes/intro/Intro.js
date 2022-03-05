import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/intro.css";
import Image from "../../utils/elements/Image";
import IntroMap from "../Scene2-Body/Scene2Map";
import { BGContext } from "../../contexts/Background";

export default function Intro({ setplayBtn, playBtn }) {
  const Next = useLoadAsset(IntroMap);
  const { Bg, setBg } = useContext(BGContext);
  const [Switch, setSwitch] = useState(false);

  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const [playing, setplaying] = useState(false);
  const [playBtnHide, SetplayBtnHide] = useState(0);

  const Ref = useRef(null);

  useEffect(() => {
    setBg(intro?.Bg);

    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.intro?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [Assets]);

  useEffect(() => {
    if (Switch && !Next.Loading) {
      setSceneId("/Scene2");
    }
  }, [Next.Loading, Switch]);

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}

          <Image
            src={intro?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="senses_txt_img"
          />

          <Image
            className="play_btn"
            src={intro?.sprites[1]}
            alt="txt"
            id="fadeup"
            onClick={() => {
              SetplayBtnHide(1);

              // setplayBtn(1);
              if (playing === false) {
                setplaying(true);
                Assets?.intro?.sounds[0]?.play();
                Assets?.intro?.sounds[0].on("end", () => {
                  setSwitch(true);
                });
              }
            }}
            style={{
              backgroundColor: "Red",
              borderRadius: "100%",
              alignItems: "center",
              justifyContent: "center",
              cursor: playing === false ? "pointer" : "",
              display: playBtnHide === 0 ? "block" : "none",
            }}
          />
          <div ref={Ref} id="fadeup" className="intro_lottie_container"></div>
        </>
      }
    />
  );
}
