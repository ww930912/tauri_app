import { Card } from "antd";
import type { ReactNode } from "react";
import andt5 from "@/assets/imgs/antd5.jpeg";

interface LoginCardProps {
  children: ReactNode
}

const App: React.FC<LoginCardProps> = (props: { children: ReactNode }) => (
  <Card
    hoverable
    style={{ width: 400, cursor: 'default' }}
    cover={
      <img
        alt="example"
        src={andt5}
      />
    }
  >
    {props.children}
  </Card>
);

export default App;
