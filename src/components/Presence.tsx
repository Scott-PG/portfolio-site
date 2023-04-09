import "./Presence.css";

const Presence = () => {
  return (
    <div className="presence">
      <h3 id="presence" className="cyan">
        Presence
      </h3>
      <div className="presence-links">
        <a href="mailto:contact@scottgriffith.dev">
          <h3>Email</h3>
        </a>
        <a href="https://www.linkedin.com/in/scott-p-griffith/">
          <h3>LinkedIn</h3>
        </a>
        <a href="https://github.com/Scott-PG">
          <h3>GitHub</h3>
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
};

export default Presence;
