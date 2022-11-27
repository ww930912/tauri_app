import "react";
import { Card, Col, Row } from "antd";

export default () => {
  const open_url = (url) => {
    const el = document.createElement("a");
    el.style.display = "none";
    el.setAttribute("target", "_blank");
    el.href = url;
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
  }
  return <div>
    <Row gutter={16}>
      <Col span={8}>
        <Card hoverable title="React 18" bordered={false} onClick={()=>open_url('https://reactjs.org')}>
          <div>More Concise code</div>
          <div>New Technique</div>
          <div>More Api</div>
        </Card>
      </Col>
      <Col span={8}>
        <Card hoverable title="Antd 5" bordered={false} onClick={()=>open_url('https://ant.design')}>
          <div>Theme Customization</div>
          <div>Better Looking Components</div>
          <div>Better Optimization</div>
        </Card>
      </Col>
      <Col span={8}>
        <Card hoverable title="Mobx" bordered={false} onClick={()=>open_url('https://mobx.js.org')}>
          <div>Observable</div>
          <div>Easy to use</div>
          <div>Concise code</div>
        </Card>
      </Col>
    </Row>
    <Row style={{marginTop:18}} gutter={16}>
      <Col span={8}>
        <Card hoverable title="Tauri" bordered={false} onClick={()=>open_url('https://tauri.app')}>
          <div>Cross Platform</div>
          <div>Bundle Size Less</div>
          <div>Built on Rust</div>
        </Card>
      </Col>
      <Col span={8}>
        <Card hoverable title="WebAssembly" bordered={false} onClick={()=>open_url('https://developer.mozilla.org/en-US/docs/WebAssembly')}>
          <div>Binary file</div>
          <div>Support Rust</div>
          <div>Better performance</div>
        </Card>
      </Col>
      <Col span={8}>
        <Card hoverable title="Vite 3" bordered={false} onClick={()=>open_url('https://vitejs.dev')}>
          <div>Lightning Fast HMR</div>
          <div>Optimized Build</div>
          <div>Rich Features</div>
        </Card>
      </Col>
    </Row>

    <Row style={{marginTop:18}} gutter={16}>
      <Col span={8}>
        <Card hoverable title="Koa 2" bordered={false} onClick={()=>open_url('https://koajs.com')}>
          <div>Lightweight Web Server</div>
          <div>Featured Middleware</div>
          <div>Easy to use</div>
        </Card>
      </Col>
      <Col span={8}>
        <Card hoverable title="TypeScript" bordered={false} onClick={()=>open_url('https://www.typescriptlang.org')}>
          <div>JavaScript and More</div>
          <div>A Result You Can Trust</div>
          <div>Safety at Scale</div>
        </Card>
      </Col>
      <Col span={8}>
        <Card hoverable title="Rust" bordered={false} onClick={()=>open_url('https://www.rust-lang.org')}>
          <div>Performance</div>
          <div>Reliability</div>
          <div>Productivity</div>
        </Card>
      </Col>
    </Row>
  </div>
};
