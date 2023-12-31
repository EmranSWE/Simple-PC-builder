import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/UI/ProductCard";
import { Col, Row } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

const CPU = ({ Data }) => {
  const products = Data.data;

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Title>CPU / Processor</Title>
      </div>

      <Row>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product._id} span={8}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CPU;
CPU.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.URL}/products/?category=CPU`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return {
      props: {
        Data: data.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        cpuData: [],
      },
    };
  }
};
