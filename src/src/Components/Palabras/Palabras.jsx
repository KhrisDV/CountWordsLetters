function Palabras ({text}) {

    const nPalabras = text.split(" ").filter(string => string !=="" && string !== "\n" );

    return (

        <p>Nº palabras: {nPalabras.length}</p>
    );
}

export default Palabras