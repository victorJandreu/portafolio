export default function Language({ children, icon, level }) {
  return (
    <div className="language">
      <div>
        <h3>{children}</h3>
        <img src={icon} alt="spain flag" />
      </div>
      <p>{level}</p>
    </div>
  );
}
