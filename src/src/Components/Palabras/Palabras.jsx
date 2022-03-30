function Palabras ({text}) {

    const nPalabras = text.split(" ");

    return (

        <p>Total de palabras: {nPalabras.length}</p>
    );
}

export default Palabras