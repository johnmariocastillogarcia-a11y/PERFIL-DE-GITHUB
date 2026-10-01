import { perfil, ficha, sobreMi, habilidades, formacion, proyectos, redes } from './data'

const menu = [['sobre-mi', 'Sobre mí'], ['habilidades', 'Habilidades'], ['formacion', 'Formación'], ['proyectos', 'Proyectos'], ['contacto', 'Contacto']]

export default function App() {
  return (
    <>
      <header className="nav">
        <a href="#inicio" className="logo">JC</a>
        <nav>{menu.map(([id, t]) => <a key={id} href={`#${id}`}>{t}</a>)}</nav>
      </header>
      <main>
        <section id="inicio" className="hero wrap">
          <div>
            <p className="muted">Hola, soy</p>
            <h1>{perfil.nombre}</h1>
            <p className="lead">{perfil.rol}. {perfil.intro}</p>
            <div className="row">
              <a className="btn" href="#contacto">Contáctame</a>
              <a className="btn ghost" href="#proyectos">Ver proyectos</a>
            </div>
          </div>
          <div className="lado">
            <img className="foto" src="foto.jpg" alt="Foto de John Mario Castillo García" />
          <dl className="ficha" aria-label="Ficha técnica">
            <dt className="ficha-t">ficha_tecnica</dt>
            {ficha.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          </div>
        </section>

        <section id="sobre-mi" className="wrap">
          <h2>Sobre mí</h2>
          <div className="prose">{sobreMi.map(p => <p key={p}>{p}</p>)}</div>
        </section>

        <section id="habilidades" className="wrap">
          <h2>Habilidades</h2>
          {Object.entries(habilidades).map(([g, items]) => (
            <div key={g} className="group">
              <h3>{g}</h3>
              <ul className="chips">{items.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </section>

        <section id="formacion" className="wrap">
          <h2>Formación</h2>
          <ol className="line">
            {formacion.map(([e, t, l]) => <li key={t}><span className="tag">{e}</span><strong>{t}</strong><span className="muted">{l}</span></li>)}
          </ol>
        </section>

        <section id="proyectos" className="wrap">
          <h2>Proyectos</h2>
          <div className="grid">
            {proyectos.map(p => (
              <a key={p.t} className="card" href={p.url} target="_blank" rel="noreferrer">
                <h3>{p.t}</h3><p>{p.d}</p><small>{p.tec}</small>
              </a>
            ))}
          </div>
        </section>

        <section id="contacto" className="wrap">
          <h2>Contacto</h2>
          <p className="lead">¿Quieres hablar de tecnología, trabajo o música? Escríbeme.</p>
          <div className="row">
            <a className="btn" href={`tel:${perfil.tel}`}>Llamar {perfil.telefono}</a>
            <a className="btn ghost" href={`https://wa.me/${perfil.tel.slice(1)}`} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <ul className="chips links">{redes.map(([n, u]) => <li key={n}><a href={u} target="_blank" rel="noreferrer">{n}</a></li>)}</ul>
        </section>
      </main>
      <footer className="wrap muted">© {new Date().getFullYear()} {perfil.nombre}. Hecho con React y TypeScript.</footer>
    </>
  )
}
