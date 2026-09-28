export default function md85wzta() {
  return (
    <>
      {/* barra navegador */}
      <header className="header">
        <div className="logo">
          <img src="wazitalogoblanco.png" alt="logo wazita" />
        </div>
        <nav>
          <div className="navlinks">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="about.html">Sobre mí</a></li>
          </div>
        </nav>
        <a href="#" className="btn"><button>hola</button></a>
      </header>

      {/* titulo principal */}
      <h1 className="titulo1">BIENVENIDO A<br /> WAZITA'S</h1>
      <p className="subtitulos">Miguel Wazita en un solo lugar</p>
      
      <main>
        <div className="texto">
          <p>
            Soy miguel "wazita", todo lo que verás aquí
            <br />es una recopilación de mis proyectos y trabajos
            <br />a lo largo de mi vida en la uni, encontrarás de todo un poco,
            <br />desde fotografía semiprofesional, cortometrajes, 
            <br />
            <img className="aidem" src="aidem.jpg" width="750" height="auto" alt="Aidem" />
            <br />proyectos de interés personal y acádemicos, diseños,
            <br />dibujos (digitales y a mano), y mucho más...
            <br />Espero que disfrutes tu visita por mi página.
          </p>
        </div>
            
        {/* botones de redes sociales */}
        <div className="texto"><br /><br /><br /><br />
          <nav id="redes-sociales" className="contenedor"><br />
            <div style={{ textAlign: 'center' }}>
              <p className="enfasis">Checa mis redes<br /><br />
                {/* boton insta */}
                <button className="boton" onClick={() => instagram()}>
                  <img src="ig_logo.png" width="50" height="auto" alt="Instagram" />
                </button>
                
                {/* boton yt */}
                <button className="boton" onClick={() => youtube()}>
                  <img src="ytlogo.png" width="50" height="auto" alt="YouTube" />
                </button>
                
                {/* boton tiktok */}
                <button className="boton" onClick={() => tiktok()}>
                  <img src="tiktok_logo.png" width="50" height="auto" alt="TikTok" />
                </button>
              </p>
            </div>
          </nav>
        </div>
    
        <section className="contenedor">
          <div>
            <div style={{ textAlign: 'center' }}>
              <p className="enfasis">Lo más relevante hasta ahora</p>
            </div>
            
            {/* boton moto */}
            <button className="boton-imagen" onClick={() => motoscrambler()}>
              <img src="moto1.jpg" width="350" height="auto" alt="moto" />
            </button>
                 
            {/* boton fotos pros */}
            <button className="boton-imagen" onClick={() => galeria()}>
              <img src="foto1.jpg" width="350" height="auto" alt="fotos pro" />
            </button>

            {/* boton fotos pros */}
            <button className="boton-imagen" onClick={() => galeria()}>
              <img src="foto1.jpg" width="350" height="auto" alt="fotos pro" />
            </button>

            {/* boton fotos pros */}
            <button className="boton-imagen" onClick={() => galeria()}>
              <img src="foto1.jpg" width="350" height="auto" alt="fotos pro" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}