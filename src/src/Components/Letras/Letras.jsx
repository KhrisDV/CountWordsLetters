function Letras ({text}) {
    const nLetras = text.split("").filter(string => string !=="" && string !== " " && string !== "\n");
    return (
        <p>
            Nº letras: {nLetras.length}
        </p>
    )
}

export default Letras