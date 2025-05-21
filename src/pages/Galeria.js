function Galeria() {
  return (
    <div className="container">
      <h2 className="my-4">🖼️ Galería del Sistema</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src="/imagenes/captura1.png"
            alt="Vista del sistema 1"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <img
            src="/imagenes/captura2.png"
            alt="Vista del sistema 2"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default Galeria;
