import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-primary text-white text-center py-4 shadow">
      <h1 className="display-5 fw-bold">Menú Interactivo</h1>
      <nav className="mt-3">
        <ul className="nav justify-content-center gap-3">
          <li className="nav-item">
            <Link className="nav-link text-white fw-semibold" to="/">📄 Actividades</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-semibold" to="/galeria">🖼️ Galería</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-semibold" to="/codigo">💻 Código Fuente</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-semibold" to="/reporte">📊 Reporte SCRUM</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

