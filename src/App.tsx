import Navbar from "./components/navbar";
import Title from "./components/title";
import MusicItem from "./components/music-item";
import Arrow from "./components/arrow";

import "./styles/index.scss"
import "./styles/itens.scss"
import "./styles/global.scss"

function App() {
  return (
    <div className="App">
      <Navbar img="https://i.imgur.com/5lA4C1E.png"/>
      <br />
      <div className="inner-body">
        <div className="divs">
        <Title desc="ALGUMAS MÚSICAS PARA VOCÊ COMEÇAR" title="Olá, " name="Abmex" img="https://i.imgur.com/5lA4C1E.png"/>
        <br />
        <div className="music-div">
          <Arrow/>
          <MusicItem type="s-item" music="Lost Chapter (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          <MusicItem type="s-item" music="Predator (part. Tre Watson e TELLE)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          <MusicItem type="s-item" music="Edge of Night (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          <MusicItem type="s-item" music="Conqueror (part. TELLE e Tre Watson)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          <MusicItem type="s-item" music="Stormrazor (part. Noora Louhimo)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          <MusicItem type="s-item" music="Aftershock (part. Tre Watson)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          <MusicItem type="s-item" music="Last Stand (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          <MusicItem type="s-item" music="Lost Chapter (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          <MusicItem type="s-item" music="Lost Chapter (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          <MusicItem type="s-item" music="Lost Chapter (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          <MusicItem type="s-item" music="Lost Chapter (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          <MusicItem type="s-item" music="Lost Chapter (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
        </div>
        </div>
        <div className="divs">
          <Title title="Hits de hoje"/>
          <br />
          <div className="music-div">
            <Arrow/>
            <MusicItem type="r-item" music="Lost Chapter (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/lPU3IA0.png"/>
            <MusicItem type="r-item" music="Predator (part. Tre Watson e TELLE)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/lPU3IA0.png"/>
            <MusicItem type="r-item" music="Edge of Night (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/lPU3IA0.png"/>
            <MusicItem type="r-item" music="Conqueror (part. TELLE e Tre Watson)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/lPU3IA0.png"/>
            <MusicItem type="r-item" music="Stormrazor (part. Noora Louhimo)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/lPU3IA0.png"/>
            <MusicItem type="r-item" music="Aftershock (part. Tre Watson)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/lPU3IA0.png"/>
            <MusicItem type="r-item" music="Last Stand (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/lPU3IA0.png"/>
          </div>
        </div>
        <div className="divs">
          <Title title="Biblioteca"/>
          <br />
          <div className="music-div">
            <Arrow/>
            <MusicItem type="sq-item" music="Lost Chapter (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
            <MusicItem type="sq-item" music="Predator (part. Tre Watson e TELLE)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
            <MusicItem type="sq-item" music="Edge of Night (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
            <MusicItem type="sq-item" music="Conqueror (part. TELLE e Tre Watson)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
            <MusicItem type="sq-item" music="Stormrazor (part. Noora Louhimo)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
            <MusicItem type="sq-item" music="Aftershock (part. Tre Watson)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
            <MusicItem type="sq-item" music="Last Stand (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          </div>
        </div>
        <div className="divs">
          <Title title="Seus favoritos"/>
          <br />
          <div className="music-div">
            <MusicItem type="c-item" music="Lost Chapter (part. Jorn Lande)" desc="Pentakill • III: Lost Chapter • 2021" img="https://i.imgur.com/sbdMMMo.png"/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;