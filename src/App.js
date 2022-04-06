import { useState, useEffect, useContext } from "react";
import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer";
import Router from "./utils/Router";
import "./styles/app.css";
import Scene2 from "./Scenes/Scene2-Body/Scene2";
import Game2 from "./Scenes/Game2Screen/Game2";
import { AudioPlayer2 } from "./utils/loadAudio";
import { LoadImage } from "./utils/loadImage";
import useLoadAsset from "./utils/useLoadAsset";
import Game2Explain from "./Scenes/Game2Screen/Game2Explain";
import WellDone from "./Scenes/WellDone/WellDone";
import WellDone1 from "./Scenes/WellDone/WellDone1";
import Star from "./Scenes/Game2Screen/progressBar";
import { SceneContext } from "./contexts/SceneContext";
import IntroMap from "./Scenes/intro/AssetMap";
import WellDoneMap from "./Scenes/WellDone/WellDoneAssetMap";
import LionLottieMap from "./Scenes/Game2Screen/LionLottieMap";
import DogMap from "./Scenes/Game2Screen/DogMap";
import RabbitMap from "./Scenes/Game2Screen/RabbitMap";
import FrogMap from "./Scenes/Game2Screen/FrogMap";
import SparrowMap from "./Scenes/Game2Screen/SparrowMap";
import BearMap from "./Scenes/Game2Screen/BearMap";
import PigMap from "./Scenes/Game2Screen/PigMap";
import HenMap from "./Scenes/Game2Screen/HenMap";
import SheepMap from "./Scenes/Game2Screen/SheepMap";
import CowMap from "./Scenes/Game2Screen/CowMap";
import MonkeyMap from "./Scenes/Game2Screen/MonkeyMap";
import HorseLottieMap from "./Scenes/Game2Screen/HorseLottieMap";
import DogLottieMap from "./Scenes/Game2Screen/DogLottieMap";
import RabbitLottieMap from "./Scenes/Game2Screen/RabbitLottieMap";
import FrogLottieMap from "./Scenes/Game2Screen/FrogLottieMap";
import SparrowLottieMap from "./Scenes/Game2Screen/SparrowLottieMap";
import BearLottieMap from "./Scenes/Game2Screen/BearLottieMap";
import PigLottieMap from "./Scenes/Game2Screen/PigLottieMap";
import HenLottieMap from "./Scenes/Game2Screen/HenLottieMap";
import SheepLottieMap from "./Scenes/Game2Screen/SheepLottieMap";
import CowLottieMap from "./Scenes/Game2Screen/CowLottieMap";
import MonkeyLottieMap from "./Scenes/Game2Screen/MonkeyLottieMap";
import CamelMap from "./Scenes/Game2Screen/CamelMap";
import CamelLottieMap from "./Scenes/Game2Screen/CamelLottieMap";
import BatMap from "./Scenes/Game2Screen/BatMap";
import BatLottieMap from "./Scenes/Game2Screen/BatLottieMap";
import OwlMap from "./Scenes/Game2Screen/OwlMap";
import OwlLottieMap from "./Scenes/Game2Screen/OwlLottieMap";
import HorseMap from "./Scenes/Game2Screen/HorseMap";

function App() {
  const { Loading } = useLoadAsset(IntroMap);

  const { SceneId, Assets } = useContext(SceneContext);

  const [Load, setLoad] = useState(true);
  const [mute, setmute] = useState(false);
  const [BG_sound, setBG_sound] = useState(null);
  const [icon1, seticon1] = useState(null);
  const [icon2, seticon2] = useState(null);
  const [count, setCount] = useState(0);
  // const [playBtn, setplayBtn] = useState(0);
  const [playing, setplaying] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    loadAudio();
  }, []);

  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("internal/sounds/game_music.mp3"));
    seticon1(await LoadImage("internal/images/soundon.svg"));
    seticon2(await LoadImage("internal/images/soundoff.svg"));
  };

  useEffect(() => {
    if (BG_sound !== null && SceneId !== "/" && playing === false) {
      setplaying(true);
      BG_sound?.play();
    }
  }, [BG_sound, SceneId]);

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
      {!mute && SceneId !== "/" && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon1)}`}
          alt=""
          className="mute_btn"
          onClick={toggleMute}
          // style={{ display: playBtn === 1 ? "block" : "none" }}
        />
      )}
      {mute && SceneId !== "/" && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon2)}`}
          alt=""
          className="mute_btn"
          onClick={toggleMute}
          // style={{ display: playBtn === 1 ? "block" : "none" }}
        />
      )}{" "}
      <Router sceneId="/Star">
        <Intro count={count} />
      </Router>
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
          preLoad={LionLottieMap}
        />
      </Router>
      <Router sceneId="/Lion_Game2_Explain">
        <Game2Explain
          sceneName={"lionLottie"}
          NextSceneId={"/Dog_Game2"}
          count={count}
          setCount={setCount}
          lottieID={0}
          preLoad={DogMap}
        />
      </Router>
      <Router sceneId="/Dog_Game2">
        <Game2
          sceneName={"dog"}
          position={1}
          NextSceneId={"/Dog_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={DogLottieMap}
        />
      </Router>
      <Router sceneId="/Dog_Game2_Explain">
        <Game2Explain
          sceneName={"dogLottie"}
          NextSceneId={"/Horse_Game2"}
          count={count}
          setCount={setCount}
          lottieID={1}
          preLoad={HorseMap}
        />
      </Router>
      <Router sceneId="/Horse_Game2">
        <Game2
          sceneName={"horse"}
          position={2}
          NextSceneId={"/Horse_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={HorseLottieMap}
        />
      </Router>
      <Router sceneId="/Horse_Game2_Explain">
        <Game2Explain
          sceneName={"horseLottie"}
          NextSceneId={"/Rabbit_Game2"}
          count={count}
          setCount={setCount}
          lottieID={2}
          preLoad={RabbitMap}
        />
      </Router>
      <Router sceneId="/Rabbit_Game2">
        <Game2
          sceneName={"rabbit"}
          position={2}
          NextSceneId={"/Rabbit_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={RabbitLottieMap}
        />
      </Router>
      <Router sceneId="/Rabbit_Game2_Explain">
        <Game2Explain
          sceneName={"rabbitLottie"}
          NextSceneId={"/Frog_Game2"}
          count={count}
          setCount={setCount}
          lottieID={3}
          preLoad={FrogMap}
        />
      </Router>
      <Router sceneId="/Frog_Game2">
        <Game2
          sceneName={"frog"}
          position={1}
          NextSceneId={"/Frog_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={FrogLottieMap}
        />
      </Router>
      <Router sceneId="/Frog_Game2_Explain">
        <Game2Explain
          sceneName={"frogLottie"}
          NextSceneId={"/WellDone1"}
          count={count}
          setCount={setCount}
          lottieID={4}
          preLoad={WellDoneMap}
        />
      </Router>
      <Router sceneId="/Sparrow_Game2">
        <Game2
          sceneName={"sparrow"}
          position={1}
          NextSceneId={"/Sparrow_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={SparrowLottieMap}
        />
      </Router>
      <Router sceneId="/Sparrow_Game2_Explain">
        <Game2Explain
          sceneName={"sparrowLottie"}
          NextSceneId={"/Bear_Game2"}
          count={count}
          setCount={setCount}
          lottieID={5}
          preLoad={BearMap}
        />
      </Router>
      <Router sceneId="/Bear_Game2">
        <Game2
          sceneName={"bear"}
          position={1}
          NextSceneId={"/Bear_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={BearLottieMap}
        />
      </Router>
      <Router sceneId="/Bear_Game2_Explain">
        <Game2Explain
          sceneName={"bearLottie"}
          NextSceneId={"/Pig_Game2"}
          count={count}
          setCount={setCount}
          lottieID={6}
          preLoad={PigMap}
        />
      </Router>
      <Router sceneId="/Pig_Game2">
        <Game2
          sceneName={"pig"}
          position={2}
          NextSceneId={"/Pig_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={PigLottieMap}
        />
      </Router>
      <Router sceneId="/Pig_Game2_Explain">
        <Game2Explain
          sceneName={"pigLottie"}
          NextSceneId={"/Hen_Game2"}
          count={count}
          setCount={setCount}
          lottieID={7}
          preLoad={HenMap}
        />
      </Router>
      <Router sceneId="/Hen_Game2">
        <Game2
          sceneName={"hen"}
          position={2}
          NextSceneId={"/Hen_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={HenLottieMap}
        />
      </Router>
      <Router sceneId="/Hen_Game2_Explain">
        <Game2Explain
          sceneName={"henLottie"}
          NextSceneId={"/Sheep_Game2"}
          count={count}
          setCount={setCount}
          lottieID={8}
          preLoad={SheepMap}
        />
      </Router>
      <Router sceneId="/Sheep_Game2">
        <Game2
          sceneName={"sheep"}
          position={1}
          NextSceneId={"/Sheep_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={SheepLottieMap}
        />
      </Router>
      <Router sceneId="/Sheep_Game2_Explain">
        <Game2Explain
          sceneName={"sheepLottie"}
          NextSceneId={"/WellDone3"}
          count={count}
          setCount={setCount}
          lottieID={9}
          preLoad={CowMap}
        />
      </Router>
      <Router sceneId="/Cow_Game2">
        <Game2
          sceneName={"cow"}
          position={2}
          NextSceneId={"/Cow_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={CowLottieMap}
        />
      </Router>
      <Router sceneId="/Cow_Game2_Explain">
        <Game2Explain
          sceneName={"cowLottie"}
          NextSceneId={"/Monkey_Game2"}
          count={count}
          setCount={setCount}
          lottieID={10}
          preLoad={MonkeyMap}
        />
      </Router>
      <Router sceneId="/Monkey_Game2">
        <Game2
          sceneName={"monkey"}
          position={1}
          NextSceneId={"/Monkey_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={MonkeyLottieMap}
        />
      </Router>
      <Router sceneId="/Monkey_Game2_Explain">
        <Game2Explain
          sceneName={"monkeyLottie"}
          NextSceneId={"/Camel_Game2"}
          count={count}
          setCount={setCount}
          lottieID={11}
          preLoad={CamelMap}
        />
      </Router>
      <Router sceneId="/Camel_Game2">
        <Game2
          sceneName={"camel"}
          position={2}
          NextSceneId={"/Camel_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={CamelLottieMap}
        />
      </Router>
      <Router sceneId="/Camel_Game2_Explain">
        <Game2Explain
          sceneName={"camelLottie"}
          NextSceneId={"/Bat_Game2"}
          count={count}
          setCount={setCount}
          lottieID={12}
          preLoad={BatMap}
        />
      </Router>
      <Router sceneId="/Bat_Game2">
        <Game2
          sceneName={"bat"}
          position={1}
          NextSceneId={"/Bat_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={BatLottieMap}
        />
      </Router>
      <Router sceneId="/Bat_Game2_Explain">
        <Game2Explain
          sceneName={"batLottie"}
          NextSceneId={"/Owl_Game2"}
          count={count}
          setCount={setCount}
          lottieID={13}
          preLoad={OwlMap}
        />
      </Router>
      <Router sceneId="/Owl_Game2">
        <Game2
          sceneName={"owl"}
          position={2}
          NextSceneId={"/Owl_Game2_Explain"}
          count={count}
          setCount={setCount}
          preLoad={OwlLottieMap}
        />
      </Router>
      <Router sceneId="/Owl_Game2_Explain">
        <Game2Explain
          sceneName={"owlLottie"}
          NextSceneId={"/WellDone"}
          count={count}
          setCount={setCount}
          lottieID={14}
          preLoad={WellDoneMap}
        />
      </Router>
      <Router sceneId="/WellDone">
        <WellDone />
      </Router>
      <Router sceneId="/WellDone1">
        <WellDone1
          NextSceneId={"/Sparrow_Game2"}
          scenename={"wellDone"}
          preLoad={SparrowMap}
        />
      </Router>
      <Router sceneId="/WellDone3">
        <WellDone1
          NextSceneId={"/Cow_Game2"}
          scenename={"wellDone"}
          preLoad={CowMap}
        />
      </Router>
    </GameContainer>
  );
}

export default App;
