import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { open } from "@tauri-apps/api/shell";
import init, { greet } from '@wasm/foo'
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }
  
  // async function openFile() {
  //   open('/Users/wuwei/Downloads/footerball.mp4').catch(() => {})
  // }

  function open_url(url: string) {
    const el = document.createElement("a");
    el.style.display = "none";
    el.setAttribute("target", "_blank");
    el.href = url;
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
  }

  useEffect(() => {
    // load wasm file
    init();
  }, [])

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="button" onClick={() => greet(name)}>
            Greet
          </button>
          {/* <button type="button" onClick={() => openFile()}>
            File
          </button> */}
          {/* <button type="button" onClick={() => open_url('https://wuwei.fun')}>
            Url
          </button> */}
          
        </div>
      </div>
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
