const $app = document.getElementById("recetas-clasificadas");
const Receta = ({ nombre, tipo, nivelCocina, html, serieAnimacion, imagenSrc }) => {
    const enlace = `/recetario/${html}.html`;
    const src = imagenSrc || 'https://via.placeholder.com/150';

    return (
        <div className="receta">
            <a href={enlace}> <img
                className="fotocomida"  // Reemplaza "tuClaseCSS" con la clase que desees
                src={src}
                alt={nombre}
            /> </a>
            <a href={enlace}>
            <h3>
                {nombre}
            </h3>  </a>
            <p>Tipo: {tipo}</p>
            <p>Nivel de Cocina: {nivelCocina}</p>
            <p>Serie de Animación: {serieAnimacion}</p>
        </div>
    );
};

const RecetasFiltradas = ({ recetas }) => {
    const [tipo, setTipo] = React.useState('');
    const [anime, setAnime] = React.useState('');
    const [dificultad, setDificultad] = React.useState('');

    const handleTipoChange = (event) => {
        setTipo(event.target.value);
    };

    const handleAnimeChange = (event) => {
        setAnime(event.target.value);
    };

    const handleDificultadChange = (event) => {
        setDificultad(event.target.value);
    };

    const recetasFiltradas = recetas.filter((receta) => {
        return (
            (tipo === '' || receta.tipo === tipo) &&
            (anime === '' || receta.serieAnimacion === anime) &&
            (dificultad === '' || receta.nivelCocina === dificultad)
        );
    });


    return (
        <div className="clasificadas-container">
            <div className="form-group">

            <div className="form">
                <label>
                    Filtrar por Tipo:
                    <select value={tipo} onChange={handleTipoChange}>
                        <option value="">Todos</option>
                        <option value="postre">Postre</option>
                        <option value="comida">Comida</option>
                    </select>
                </label>
                </div>

                <div className="form">
                <label>
                    Filtrar por Anime:
                    <select value={anime} onChange={handleAnimeChange}>
                        <option value="">Todos</option>
                        <option value="Naruto">Naruto</option>
                        <option value="One Piece">One Piece</option>
                        <option value="Shin Chan">Shin Chan</option>
                        <option value="Doraemon">Doraemon</option>
                        <option value="Kingdom Hearts">Kingdom Hearts</option>
                        <option value="Sin Califica">Sin Calificar</option>
                        {/* Agrega más opciones de anime según sea necesario */}
                    </select>
                </label>
                </div>

                <div className="form">
                <label>
                    Filtrar por Dificultad:
                    <select value={dificultad} onChange={handleDificultadChange}>
                        <option value="">Todos</option>
                        <option value="fácil">Fácil</option>
                        <option value="intermedio">Intermedio</option>
                        <option value="avanzado">Avanzado</option>
                    </select>
                </label>
            </div>
            </div>
            <div className="recetas">
                {recetasFiltradas.length > 0 ? (
                    recetasFiltradas.map((receta, index) => (
                        <div key={index}>
                            <Receta {...receta} />
                        </div>
                ))
                ) : (
                    <div className="sin-resultados">
                        <p>Sanji está en proceso de nuevas recetas dejen trabajar.</p>
                        <img src="/images/sanjii.png" alt="Sin Resultados" />
                    </div>
                )}
            </div>
        </div>
    );
};

const recetas = [
    { nombre: "Dango", tipo: "postre", html: "Dango", imagenSrc: '/images/Dango.jpg', nivelCocina: "avanzado", serieAnimacion: "Naruto" },
    { nombre: "Ramen", tipo: "comida", html: "narutoramen", imagenSrc: '/images/ramen-con-naruto-486.jpg', nivelCocina: "avanzado", serieAnimacion: "Naruto" },
    { nombre: "Curry", tipo: "comida", html: "Curry", imagenSrc: "/images/curryOnepiece.jpg", nivelCocina: "avanzado", serieAnimacion: "One Piece" },
    { nombre: "Okonomiyaki", tipo: "comida", html: "Okonomiyaki", imagenSrc: "/images/Okonomiyaki.jpg", nivelCocina: "avanzado", serieAnimacion: "One Piece" },
    { nombre: "Onigiri", tipo: "comida", html: "Onigiri", imagenSrc: "/images/Onigiri.jpg", nivelCocina: "fácil", serieAnimacion: "Shin Chan" },
    { nombre: "Dorayaki", tipo: "postre", html: "Dorayaki", imagenSrc: "/images/Dorayakis.jpg", nivelCocina: "intermedio", serieAnimacion: "Doraemon" },
    { nombre: "Helado de sal marina", tipo: "postre", html: "Heladosalmarina", imagenSrc: "/images/heladokh.jpg ", nivelCocina: "intermedio", serieAnimacion: "Kingdom Hearts" },
];

ReactDOM.render(<RecetasFiltradas recetas={recetas} />, document.getElementById("recetas-clasificadas"));
