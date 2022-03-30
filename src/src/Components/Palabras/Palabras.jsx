function Palabras ({text}) {

    const nPalabras = text.split(" ").filter(string => string !=="");

    return (

        <p>Nº palabras: {nPalabras.length}</p>
    );
}

export default Palabras