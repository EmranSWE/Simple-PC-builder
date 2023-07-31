import { useEffect, useState } from "react";
import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const items = [
  {
    key: "1",
    label: (
      <Link
        href="/categories/CPU"
        style={{
          color: "white",
          backgroundColor: "#404040",
          padding: "5px 10px",
          borderRadius: "3px",
        }}
      >
        CPU/Processor
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        href="/categories/Motherboard"
        style={{
          color: "white",
          backgroundColor: "#404040",
          padding: "5px 10px",
          borderRadius: "3px",
        }}
      >
        Motherboard
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link
        href="/categories/RAM"
        style={{
          color: "white",
          backgroundColor: "#404040",
          padding: "5px 10px",
          borderRadius: "3px",
        }}
      >
        RAM
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link
        href="/categories/PSU"
        style={{
          color: "white",
          backgroundColor: "#404040",
          padding: "5px 10px",
          borderRadius: "3px",
        }}
      >
        Power Supply Unit
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link
        href="/categories/SD"
        style={{
          color: "white",
          backgroundColor: "#404040",
          padding: "5px 10px",
          borderRadius: "3px",
        }}
      >
        Storage Device
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link
        href="/categories/Monitor"
        style={{
          color: "white",
          backgroundColor: "#404040",
          padding: "5px 10px",
          borderRadius: "3px",
        }}
      >
        Monitor
      </Link>
    ),
  },
  {
    key: "8",
    label: (
      <Link
        href="/categories/Others"
        style={{
          color: "white",
          backgroundColor: "#404040",
          padding: "5px 10px",
          borderRadius: "3px",
        }}
      >
        Others
      </Link>
    ),
  },
];
const RootLayout = ({ children }) => {
  const [menuMode, setMenuMode] = useState("horizontal");

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 576
        ? setMenuMode("vertical")
        : setMenuMode("horizontal");
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              Simple PC Builder
            </Link>
          </h1>
        </div>
        <div className="brand-logo">
          <h1>
            <Link
              href="/pc/PcBuilder"
              style={{
                color: "white",
                backgroundColor: "Green",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              Build_PC
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          {menuMode === "horizontal" ? (
            <Link href="/about">
              <items
                style={{
                  margin: "0px 25px",
                }}
              >
                <UserOutlined />
                About Us
              </items>
            </Link>
          ) : null}

          <items>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <Button>Categories</Button>
            </Dropdown>
          </items>
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};
export default RootLayout;
