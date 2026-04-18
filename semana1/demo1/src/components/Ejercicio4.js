import React from "react";
import "./Ejercicio4.css";

const imagenes = [
  "https://images.ctfassets.net/denf86kkcx7r/4IPlg4Qazd4sFRuCUHIJ1T/f6c71da7eec727babcd554d843a528b8/gatocomuneuropeo-97?fm=webp&w=612",
  "https://www.stangest.com/wp-content/uploads/2018/01/sabri-tuzcu-213760-scaled.jpg",
  "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg"
];

const Ejercicio4 = () => {
  const [indice, setIndice] = React.useState(0);

  React.useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h3>Slider automático con fade</h3>

      <div className="slider">
        {imagenes.map((img, i) => (
          <img
            key={i}
            src={img}
             alt={`Imagen ${i + 1}`}
            className={i === indice ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Ejercicio4;