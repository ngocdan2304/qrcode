import { useRef, useState } from 'react'
import iconLogo from './assets/icon.svg';
import coffee from './assets/Y2SSffXW.jpg';
import leaf from '/leaf.webp';
import { QRCodeCanvas } from 'qrcode.react';
import './css/index.css';
import { ThemeToggle } from './ThemeToggle';
import ImageZoom from './ImageZoom';
import AnimatedButton from './AnimationButton';
import Marquee from './Marquee';
import ColorfulPlaceholderInput from './ColorInput';

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrCode] = useState('');
  const qrRef = useRef();

  const isMobile = document.body.clientWidth < 768;

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  function handleSubmit() {
    setQrCode(url);
  }
  function onDownload() {
    const canvas = qrRef.current.querySelector('canvas');
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.png';
    a.click();
  }


  return (
    <main>
      <div style={{
        position: "absolute",
        right: isMobile ? 16 : 32,
        top: isMobile ? 16 : 32,
      }}>
        <ThemeToggle />
      </div>
      <div className="logo-box">
        <a href="/">
          <img src={iconLogo} className="logo" alt="logo" />
        </a>
      </div>
      <h1>Free QRCode</h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <ColorfulPlaceholderInput
          style={{ minWidth: 300 }}
          type="text"
          placeholder="The URL needs to generate a QR Code"
          value={url}
          onChangeInput={handleChange}
        />
        <AnimatedButton
          onClick={handleSubmit}
        >
          Generate
        </AnimatedButton>
      </div>
      <div className="qr-code" style={{ marginTop: "32px" }}>
        <div style={{ display: "inline-flex", padding: "12px", border: "1px solid white" }} ref={qrRef}>
          <ImageZoom ratio={isMobile ? 2 : 4} >
            <QRCodeCanvas value={qrcode} />
          </ImageZoom>
        </div>
      </div>

      <AnimatedButton disabled={!qrcode} style={{ margin: 32, minWidth: 200 }} onClick={onDownload}>Download</AnimatedButton>

      <div className="buy-a-coffee">
        <div className="text" style={{ maxWidth: 250 }}><Marquee text='Buy me a coffee. Everything is free.' /></div>
        <ImageZoom ratio={isMobile ? 5 : 10} className="animated-text" >
          <img width={60} src={coffee} className="coffee" alt="coffee" />
        </ImageZoom>
      </div>

      <snowfall>
        <snowflake> <img src={leaf} />️ </snowflake>
        <snowflake> <img src={leaf} />️ </snowflake>
        <snowflake> <img src={leaf} />️ </snowflake>
        <snowflake> <img src={leaf} />️ </snowflake>
        <snowflake> <img src={leaf} />️ </snowflake>
        <snowflake> <img src={leaf} />️ </snowflake>
        <snowflake> <img src={leaf} />️ </snowflake>
        <snowflake> <img src={leaf} />️ </snowflake>
      </snowfall>
    </main>
  )
}

export default App
