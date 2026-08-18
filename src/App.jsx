import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  const nama = "Rafael";
  const umur = 18;
  const pendidikan = "SMK 1 BALIKPAPAN";
  const jurusan = "XII RPL";
  const angka1 = 12
  const angka2 = 4

  const kali = (angka1, angka2) => {
    return angka1 * angka2;
  };

  const hasilkali = kali(angka1, angka2);

  const tambah = (angka1, angka2) => {
    return angka1 + angka2;
  };

  const hasiltambah = tambah(angka1,angka2);

  const kurang = (angka1, angka2) => {
    return angka1 - angka2;
  };

  const hasilkurang = kurang(angka1, angka2);

  let legal ="";
    if ( umur >= 17)  {
    legal = "Udah legal";
  }
  else {
    legal = "belum legal";
  }
  

  return (
    <>
      <h1>Belajar React with {nama}:D</h1>
      <br></br>
      <p1> status : {legal} </p1>
      <p1>Angka 1 : {angka1} </p1>
      <p1>Angka 2 : {angka2} </p1>
      <p>Hasil kali = {hasilkali}</p>
      <p>Hasil tambah = {hasiltambah}</p>
      <p>Hasil kurang = {hasilkurang}</p>
    </>
  );
}

export default App;
