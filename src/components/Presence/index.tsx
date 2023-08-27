import "./Presence.css";

const Presence = () => (
  <div className="presence">
    <h3 id="presence" className="indigo">
      Presence
    </h3>
    <div className="presence-links">
      <a href="mailto:contact@scottgriffith.dev">
        <h4>Email</h4>
      </a>
      <a href="https://www.linkedin.com/in/scott-p-griffith/">
        <h4>LinkedIn</h4>
      </a>
      <a href="https://github.com/Scott-PG">
        <h4>GitHub</h4>
      </a>
    </div>
    <br />
    <br />
    <h4>Assets</h4>
    <p>
      Sun and Moon Icons made by{" "}
      <a
        href="https://www.flaticon.com/authors/alfredo-hernandez"
        title="Alfredo Hernandez"
      >
        Alfredo Hernandez
      </a>
    </p>
  </div>
);

export default Presence;
