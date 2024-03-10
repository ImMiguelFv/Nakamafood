const $nuevas = document.getElementById("novedad");

const Receta = ({ nombre, html, imagenSrc }) => {
    const enlace = `/recetario/${html}.html`;
    const src = imagenSrc || 'https://via.placeholder.com/150';

    return (
        <div className="receta">
            
            <a href={enlace}>
            <img
                className="fotocomida"  // Reemplaza "tuClaseCSS" con la clase que desees
                src={src}
                alt={nombre}
            /></a>  
            
            <h3> <a href={enlace}>   
            {nombre} </a>
            </h3>    
        </div>
    );
};


ReactDOM.render(
    <div className="recetas">

    <Receta nombre="Dango"imagenSrc={"./images/Dango.jpg"} html="Dango"  />

    
    <Receta nombre="Okonomiyaki" imagenSrc={"./images/Okonomiyaki.jpg"} html="Okonomiyaki"  />
    
    <Receta nombre="Onigiri" imagenSrc={"./images/Onigiri.jpg"} html="Onigiri"  />
    </div>,
    $nuevas
);