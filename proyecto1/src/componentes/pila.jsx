import { useState } from "react";

function Pila() {
    const [stack, setStack] = useState([]);
    const [inputValue, setInputValue] = useState("");

    //agregar a la pila valores
    const handlePush = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        setStack([inputValue, ...stack]);
        setInputValue("");
    }

    //eliminar valore del arreglo
    const handlePop = () => {
        if (stack.lenght === 0) return;
    }

    //filtrar y eliminar  el utimo elemento del arreglo
    const newStack = stack.slice(1);
    setStack(newStack);

    const topElement = stack.length > 0 ? stack[0] : "La pila (arreglo) está vacía";

    return (
        <div>
            <h1 style={{ color: "#ffffff", fontFamily: "Comic Sans MS", maxWidth: "100px" }}>Pila</h1>
            <h2> ver dato de la pila</h2>
            <form>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} placeholder="Ingresa un valor" style={{padding: "8px"}}
                />
                <button onClick={handlePush} style={{padding: "8px", marginLeft: "5px"}}>Agregar a la pila</button>
            </form>

        </div>
    )
}
