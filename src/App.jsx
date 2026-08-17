import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const nama = "Rafael";
  const umur = 17;
  const pendidikan = "SMK 1 BALIKPAPAN";
  const jurusan = "XII RPL";

  return (
    <>
      <h1>Belajar React with {nama}:D</h1>
      <br></br>
      <p>Aku baru mulai hari ini</p>
      <br></br>
      <h2>
        Biodata:
        <br></br>
        =============
      </h2>
      <p>Nama : {nama}</p>
      <p>Umurku : {umur} Tahun!</p>
      <p>Pendidikan : {pendidikan}</p>
      <p>Jurusan : {jurusan}</p>
    </>
  );
}

export default App;
