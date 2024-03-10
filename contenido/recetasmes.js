const $app = document.getElementById("recetas-mes");

const Receta = ({ nombre, html, imagenSrc, puesto }) => {
    const enlace = `/recetario/${html}.html`;
    const src = imagenSrc || 'https://via.placeholder.com/150';

    return (
        <div className="receta">
            <h2 className="titulosection">  #{puesto} </h2>  
            <a href={enlace}>
            <img
                className="fotocomida"  // Reemplaza "tuClaseCSS" con la clase que desees
                src={src}
                alt={nombre}
            />
            <h3>
            {nombre}
            </h3> </a>  
        </div>
    );
};


ReactDOM.render(
    <div className="recetas">
    <Receta nombre="Onigiri de Shin Chan"imagenSrc={"/images/Onigiri.jpg"} puesto = "2" html="Onigiri"/>
    
    
    <Receta nombre="Okonomiyaki" imagenSrc={"/images/Okonomiyaki.jpg"} html="Okonomiyaki" puesto = "3"/>
    
    <Receta nombre="Curry de One Piece" imagenSrc={"/images/curryOnepiece.jpg"} puesto = "4" html="Curry" />
    </div> ,
    $app
);