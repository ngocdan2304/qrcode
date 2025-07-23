import { useState, useEffect } from "react";

export default function ColorfulPlaceholderInput({
  placeholder = "Nhập nội dung...",
  interval = 300,
  defaultColor = "#999",
  onChangeInput = () => { },
  ...props
}) {
  const [value, setValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeColor, setActiveColor] = useState(defaultColor);

  useEffect(() => {
    if (value) return;
    const len = placeholder.length;
    const handle = setInterval(() => {
      setActiveIndex(idx => (idx + 1) % len);
      setActiveColor(
        "#" +
        Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .padStart(6, "0")
      );
    }, interval);
    return () => clearInterval(handle);
  }, [placeholder, interval, value]);

  function onChange(e) {
    setValue(e.target.value);
    typeof onChangeInput == "function" && onChangeInput(e)
  }

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input
        value={value}
        onChange={onChange}
        style={{
          position: "relative",
          zIndex: 1,
          background: "transparent",
        }}
        {...props}
      />
      {!value && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            height: "100%",
            display: "flex",
            alignItems: "center",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            fontSize: "1rem",
            padding: "0 1rem",
          }}
        >
          {placeholder.split("").map((ch, i) => (
            <span
              key={i}
              style={{
                color: i === activeIndex ? activeColor : defaultColor,
                transition: "color 0.2s",
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
