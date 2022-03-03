import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./AssetMap";
import lottie from "lottie-web";

import "../../styles/intro.css";
import Image from "../../utils/elements/Image";

export default function Intro({ setplayBtn, playBtn }) {
  const { Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const [playing, setplaying] = useState(false);
  const [playBtnHide, SetplayBtnHide] = useState(0);

  const Ref = useRef(null);

  useEffect(() => {
    if (Assets && Ref.current && !Loading) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.Scene22?.lottie[15],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [Assets, Loading]);

  console.log(playBtn);
  console.log(Assets?.Intro?.lottie[0]);
  return (
    <Scenes
      sprites={
        <>
          {/* Title */}

          <Image
            src={intro?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="intro_BG"
          />

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
                  const timeout = setTimeout(() => {
                    setplaying(false);
                    setSceneId("/Scene2");
                  }, 1500);
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
