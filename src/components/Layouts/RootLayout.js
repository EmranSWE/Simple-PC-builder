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
              href="/pc/PcBuilder"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PC_Builder
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
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
          <Link href="/contact">
            <items>
              <MobileOutlined />
              Contact Us
            </items>
          </Link>
          <items
            style={{
              margin: "0px 25px",
            }}
          >
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

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC_Builder
        </h2>
        <p className={styles.social_icons}>
          <Link href="">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        PC Builder ©2023 Created by Emran
      </Footer>
    </Layout>
  );
};
export default RootLayout;
