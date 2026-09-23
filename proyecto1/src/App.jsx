import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [elementos, setElementos] = useState([]);

  //funcion para agregar datos
  const agregarDato = () => {
    const nuevoNumero = Math.floor(Math.random() * 85);
    setElementos([...elementos, nuevoNumero]);
    if (nuevoNumero === 85) {
      alert("omggg te toc{o el numero 85, el fav de wazita, felicidades :vvvvv");
    } if (nuevoNumero === 67) {
      alert("SIX SEVEEEN");
      open("https://youtu.be/L7ejl_Hj3A8?si=9Rb_NwJzHssUuAV-")
    }
  };
  //hook de efecto
  useEffect(() => {
    console.log("El arreglo de los datos actuales es:", elementos);
  },[elementos]);

  function ig(){
    if(confirm("¿quieres ir al ig de wazita?")){
      alert("Ahora si viene lo shido :vvvvvv")
      open("https://www.instagram.com/md85wzta/")
    } else {
      alert("ok sale bai, te lo pierdes ://///")
    }
  }
  //funcion para recorrer el arreglo y mostrar los elementos
  const recorrerElemetos = () => {
    return elementos.map((elem) => {
      return <li>Elemento: {elem}</li>;
    });
  };
  return (
    <>
    <h1 className={"counter"}>HOLA JEJE</h1>
    <h2>md85wzta</h2>
    <p>hola chikos jeje como estan, puse a chiikawa aquí</p>
    <img className={"fotochiikawa"} src={"https://i.pinimg.com/originals/c7/5b/fc/c75bfc2251c03672f9b5187db00573ec.jpg"} alt="Hero" />
    
    <p>Arreglo jeje: {elementos.join(", ")}</p>
    <button onClick={agregarDato}>Agregar Dato</button>
    
    {/*si el arreglo est{á vacío, no se mostrará la lista*/}
    <ul>{recorrerElemetos()}</ul>
    {elementos.length === 0 ? (<p>El arreglo aún está vacío, métele algo w</p>) : null}

    <p><button onClick={ig}>Ir al IG de wazita</button></p>
    <br/> ver episodios de chiikawa aquí: <a href="https://www.youtube.com/playlist?list=PLLicncuOfKyg">Chiikawa</a>
    </>
  )
}
export default App
