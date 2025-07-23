export default function Marquee({ text = "", speed = 15 }) {
  return (
    <div className="marquee">
      <div
        className="marquee__inner"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="marquee__text">{text}</span>
        <span className="marquee__text">{text}</span>
      </div>
    </div>
  );
}
