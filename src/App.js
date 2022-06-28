import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };

  const onCliclExportar = function (evento) {
    html2canvas(document.querySelector("#stiker")).then((evento) => {
      document.body.appendChild(evento);
      var img = evento.toDataURL("image/jpg");
      var link = document.createElement("a");
      link.download = "meme.jpg";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <section><h1>Meme generator xd</h1></section>
      
      <select onChange={onChangeImagen}>
        <option value="chicatimida">Chica timida</option>
        <option value="csonroja">C sonroja</option>
        <option value="ccubre">C cubre</option>
        <option value="chicatimida_gif">Chica timida gif</option>
        <option value="csonroja_gif">C sonroja gif</option>
        <option value="ccubre_gif">C cubre gif</option>
      </select>
      <br />
      <input onChange={onChangeLinea1} type="text" placeholder="parte de arriba"/>
      <br />
      <input onChange={onChangeLinea2} type="text" placeholder="parte de abajo"/>
      
      

      <div className="txtimagen" id="stiker">
        <span>{linea1}</span>
        <span>{linea2}</span>
        <br />
        <img src={"/images/" + imagen + ".jpg"} width="512px" height="512px" />

      </div>
      <button onClick={onCliclExportar}>Exportar</button>

      <div className="txtintro">
        <p>Como vieron anteriormente se trata de una pagina ultra útil con la que podrás hacer un meme feo partiendo de un gif
        que selecciones. La idea era se pudiera descargar el gif xd pero por ahora no se pude, quizá en la actualizacion 1.2 que
        le tengo preparada a esta maravilla de invensión moderna. gracias al profesor lucas por la idea xd
        también queria actualizarlo para que se pudiera exportar cmo stiker de whatsapp pero wao no es tan easy.

        
        </p>
        <h2>No es tan bonito pero como dicen por ahi xd si lo subes perfecto es pq te tardaste en subirlo</h2>
      </div>
    </div>
    
    
  );
}

export default App;
