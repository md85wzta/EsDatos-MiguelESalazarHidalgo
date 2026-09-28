import useState from 'react'

function Ejemplo2() {
    const [alumnos, setAlumnos] = useState([
        {
            id: 1,
            nombre: "Miguel",
            asistencia: 85
        }
    ])
    const [nuevoNombre, setNuevoNombre] = useState("")

    //crear primera funcion
    const agregarAlumno = (e) => {
        e.preventDefault();
        if (nuevoNombre.trim() === "") return;
        const nuevoAlumno={
            id: Data.now(),
            nombre: nuevoNombre,
            asistencia: 0
        }
        //meter valores al arreglo
        setAlumnos([...alumnos, nuevoNombre]);
        nuevoNombre("");

        //eliminar
        const eliminarObjeto=(id)=>{
            const listaFilter=alumnos.filter((alumno)=>alumno.id===id);
            setAlumnos(listaFilter);
        }
    }

  return (
    <>
    <div
        style={{
            marginTop: "20px", maxWidth: "500'px", margin: "0 auto"
        }}>
        <h1>operaciones con arreglos</h1>
        {/*Formulario para agregar a los datos */}
        <form>
            <input
            style={{pading:"8px", width:"60px%"}}type="text" value={nuevoNombre} onChange={(e)=>setNuevoNombre(e.target.value)}placeholder='coloca un nombre'></input>
            <button type="submit" style={{padding:"8px 12px", background:"#4CAF50", color:"white", border:"none", cursor:"pointer"}}>
                agregar
            </button>
        </form>
    </div>
    </>
  )
}

export default Ejemplo2;
