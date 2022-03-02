import { useState, useEffect } from "react";
import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer";
import Router from "./utils/Router";
import "./styles/app.css";
import Scene2 from "./Scenes/Scene2-Body/Scene2";
import Game2 from "./Scenes/Game2Screen/Game2";
import { AudioPlayer2 } from "./utils/loadAudio";
import { LoadImage } from "./utils/loadImage";
import useLoadAsset from "./utils/useLoadAsset";
import IntroMap from "./Scenes/Game2Screen/Game2AssetMap";
import Game2Explain from "./Scenes/Game2Screen/Game2Explain";
import WellDone from "./Scenes/WellDone/WellDone";
import WellDone1 from "./Scenes/WellDone/WellDone1";
import Star from "./Scenes/Game2Screen/progressBar";

function App() {
  const { Loading } = useLoadAsset(IntroMap);
  const [Load, setLoad] = useState(true);
  const [mute, setmute] = useState(false);
  const [BG_sound, setBG_sound] = useState(null);
  const [icon1, seticon1] = useState(null);
  const [icon2, seticon2] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    loadAudio();
  }, []);

  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("internal/sounds/game-music.mp3"));
    seticon1(await LoadImage("internal/images/SoundOn.svg"));
    seticon2(await LoadImage("internal/images/SoundOff.svg"));
  };

  useEffect(() => {
    if (BG_sound !== null) {
      BG_sound?.play();
    }
  }, [BG_sound]);

  useEffect(() => {
    if (BG_sound) {
      if (mute) {
        BG_sound?.mute(true);
      } else {
        BG_sound?.mute(false);
      }
    }
  }, [mute]);

  const toggleMute = () => {
    setmute(!mute);
  };

  if (Load) return <div className="intro_Loading_screen">Loading....</div>;

  return (
    <GameContainer>
      <Star num={count} />
      {!mute && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon1)}`}
          alt=""
          className="mute_btn"
          onClick={toggleMute}
        />
      )}
      {mute && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon2)}`}
          alt=""
          className="mute_btn"
          onClick={toggleMute}
        />
      )}{" "}
      <Router sceneId="/">
        <Intro />
      </Router>
      <Router sceneId="/Scene2">
        <Scene2 sceneName={"Scene2"} />
      </Router>
      <Router sceneId="/Lion_Game2">
        <Game2
          sceneName={"lion"}
          position={1}
          NextSceneId={"/Lion_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Lion_Game2_Explain">
        <Game2Explain
          sceneName={"lion"}
          NextSceneId={"/Dog_Game2"}
          count={count}
          setCount={setCount}
          lottieID={0}
        />
      </Router>
      <Router sceneId="/Dog_Game2">
        <Game2
          sceneName={"dog"}
          position={1}
          NextSceneId={"/Dog_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Dog_Game2_Explain">
        <Game2Explain
          sceneName={"dog"}
          NextSceneId={"/Horse_Game2"}
          count={count}
          setCount={setCount}
          lottieID={1}
        />
      </Router>
      <Router sceneId="/Horse_Game2">
        <Game2
          sceneName={"horse"}
          position={2}
          NextSceneId={"/Horse_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Horse_Game2_Explain">
        <Game2Explain
          sceneName={"horse"}
          NextSceneId={"/Rabbit_Game2"}
          count={count}
          setCount={setCount}
          lottieID={2}
        />
      </Router>
      <Router sceneId="/Rabbit_Game2">
        <Game2
          sceneName={"rabbit"}
          position={2}
          NextSceneId={"/Rabbit_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Rabbit_Game2_Explain">
        <Game2Explain
          sceneName={"rabbit"}
          NextSceneId={"/Frog_Game2"}
          count={count}
          setCount={setCount}
          lottieID={3}
        />
      </Router>
      <Router sceneId="/Frog_Game2">
        <Game2
          sceneName={"frog"}
          position={1}
          NextSceneId={"/Frog_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Frog_Game2_Explain">
        <Game2Explain
          sceneName={"frog"}
          NextSceneId={"/WellDone1"}
          count={count}
          setCount={setCount}
          lottieID={4}
        />
      </Router>
      <Router sceneId="/Sparrow_Game2">
        <Game2
          sceneName={"sparrow"}
          position={1}
          NextSceneId={"/Sparrow_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Sparrow_Game2_Explain">
        <Game2Explain
          sceneName={"sparrow"}
          NextSceneId={"/Bear_Game2"}
          count={count}
          setCount={setCount}
          lottieID={5}
        />
      </Router>
      <Router sceneId="/Bear_Game2">
        <Game2
          sceneName={"bear"}
          position={1}
          NextSceneId={"/Bear_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Bear_Game2_Explain">
        <Game2Explain
          sceneName={"bear"}
          NextSceneId={"/Pig_Game2"}
          count={count}
          setCount={setCount}
          lottieID={6}
        />
      </Router>
      <Router sceneId="/Pig_Game2">
        <Game2
          sceneName={"pig"}
          position={2}
          NextSceneId={"/Pig_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Pig_Game2_Explain">
        <Game2Explain
          sceneName={"pig"}
          NextSceneId={"/Hen_Game2"}
          count={count}
          setCount={setCount}
          lottieID={7}
        />
      </Router>
      <Router sceneId="/Hen_Game2">
        <Game2
          sceneName={"hen"}
          position={2}
          NextSceneId={"/Hen_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Hen_Game2_Explain">
        <Game2Explain
          sceneName={"hen"}
          NextSceneId={"/Sheep_Game2"}
          count={count}
          setCount={setCount}
          lottieID={8}
        />
      </Router>
      <Router sceneId="/Sheep_Game2">
        <Game2
          sceneName={"sheep"}
          position={1}
          NextSceneId={"/Sheep_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Sheep_Game2_Explain">
        <Game2Explain
          sceneName={"sheep"}
          NextSceneId={"/WellDone2"}
          count={count}
          setCount={setCount}
          lottieID={9}
        />
      </Router>
      <Router sceneId="/Cow_Game2">
        <Game2
          sceneName={"cow"}
          position={2}
          NextSceneId={"/Cow_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Cow_Game2_Explain">
        <Game2Explain
          sceneName={"cow"}
          NextSceneId={"/Monkey_Game2"}
          count={count}
          setCount={setCount}
          lottieID={10}
        />
      </Router>
      <Router sceneId="/Monkey_Game2">
        <Game2
          sceneName={"monkey"}
          position={1}
          NextSceneId={"/Monkey_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Monkey_Game2_Explain">
        <Game2Explain
          sceneName={"monkey"}
          NextSceneId={"/Camel_Game2"}
          count={count}
          setCount={setCount}
          lottieID={11}
        />
      </Router>
      <Router sceneId="/Camel_Game2">
        <Game2
          sceneName={"camel"}
          position={2}
          NextSceneId={"/Camel_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Camel_Game2_Explain">
        <Game2Explain
          sceneName={"camel"}
          NextSceneId={"/Bat_Game2"}
          count={count}
          setCount={setCount}
          lottieID={12}
        />
      </Router>
      <Router sceneId="/Bat_Game2">
        <Game2
          sceneName={"bat"}
          position={1}
          NextSceneId={"/Bat_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Bat_Game2_Explain">
        <Game2Explain
          sceneName={"bat"}
          NextSceneId={"/Owl_Game2"}
          count={count}
          setCount={setCount}
          lottieID={13}
        />
      </Router>
      <Router sceneId="/Owl_Game2">
        <Game2
          sceneName={"owl"}
          position={2}
          NextSceneId={"/Owl_Game2_Explain"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Owl_Game2_Explain">
        <Game2Explain
          sceneName={"owl"}
          NextSceneId={"/WellDone"}
          count={count}
          setCount={setCount}
          lottieID={14}
        />
      </Router>
      <Router sceneId="/WellDone">
        <WellDone />
      </Router>
      <Router sceneId="/WellDone1">
        <WellDone1 NextSceneId={"/Sparrow_Game2"} />
      </Router>
      <Router sceneId="/WellDone2">
        <WellDone1 NextSceneId={"/Cow_Game2"} />
      </Router>
    </GameContainer>
  );
}

export default App;
