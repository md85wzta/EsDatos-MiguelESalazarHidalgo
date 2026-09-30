import {useState} from 'react'

export default function Ejemplo2() {
    const [alumnos, setAlumnos] = useState([{id:85674585,nombre:"Miguel Wazita",asistencia:85}])
  const [nuevoNombre, setNuevoNombre] = useState("");

  //Crear primera funciòn

  const agregarAlumno=(e)=>{
    e.preventDefault();
    if(nuevoNombre.trim()==="") return;
    const nuevoAlumno={
                id:Date.now(),
                nombre:nuevoNombre.trim(),
        asistencia:parseInt(Math.random() * 15)
    }
    //Introducir valores al arreglo
        setAlumnos((alumnosActuales)=>[...alumnosActuales,nuevoAlumno]);
    setNuevoNombre("");
  }

  //Eliminar objeto
  const eliminarObjeto=(id)=>{
        setAlumnos((alumnosActuales)=>alumnosActuales.filter((alumno)=>alumno.id!==id));
  }
    return (
   <div style={{padding:"20px", maxWidth:"500px", margin:"0 auto"}}>
    <h1>Operaciones con arreglos</h1>
    
    
    {/* Formuluario para agregar los datos */}
    <form onSubmit={agregarAlumno} style={{marginBottom:"20px"}}>
        <input type='text' value={nuevoNombre} onChange={(e)=>setNuevoNombre(e.target.value)} placeholder='Ingresa un nombre' style={{padding:"8px 12px", marginRight:"10px", width:"60%"}}/>
        <button type='submit' style={{padding:"8px 12px", background:"#4CAF50", color:"white", border:"none", cursor:"pointer"}}>
            Agregar
        </button>
    </form>

    {/* Renderizar la vista */}
    <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        {alumnos.length===0?(
            <p style={{color:"#000000", textAlign:"center", background:"FFFFFF"}}>
            No hay datos que mostrar
            </p>
        ):(
            alumnos.map((alumno)=>(
                <div key={alumno.id} style={{background:"#f9f9f9", padding:"10px", borderRadius:"40px",padding:"10px", border:"1px solid #ccc", display:"flex", justifyContent:"space-between", alignItems:"left"}}>
                    <div style={{marginLeft:"20px"}}>
                        <strong>{alumno.nombre}</strong>
                        <br/>
                        <span style={{fontSize:"12px", color:"#000000"}}>ID: {alumno.id}</span>
                        <br/>
                        <span style={{fontSize:"12px", color:"#000000"}}>Asistencias: {alumno.asistencia}</span>
                    </div>
                    <button type="button" onClick={()=>eliminarObjeto(alumno.id)} aria-label={`Eliminar a ${alumno.nombre}`} style={{borderRadius:"25px", color:'red', backgroundColor:'#ffabab', border:"none", cursor:"pointer"}}>
                        Eliminar
                    </button>
                </div>
            ))
        )}
    </div>
   </div>
  )
}