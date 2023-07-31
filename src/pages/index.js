import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import { Row, Col } from "antd";
import ProductCard from "@/components/UI/ProductCard";
import { Typography } from "antd";
import Link from "next/link";
const { Title } = Typography;

const HomePage = ({ Data }) => {
  const products = Data;
  return (
    <>
      <Head>
        <title>PC Builder</title>
        <meta name="description" content="The project developed by MD Emran" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ textAlign: "center" }}>
        <Title>Feature Product</Title>
      </div>
      <Row>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product._id} span={8}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: "center" }}>
        <Title>Feature Categories</Title>
      </div>
      <Row>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product._id} span={8}>
            <Link href={`/categories/${product.category}`}>
              <div style={{ position: "relative", margin: "20px" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%", height: "auto" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    background: "rgba(0, 0, 0, 0.5)", // you can adjust the color and opacity
                    color: "white",
                    width: "100%",
                    fontSize: "20px",
                    fontWeight: "bold",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {product.category}
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.URL}/products/?limit=100`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();

    const AllData = data.data.data;
    const getRandomItems = (prod, count) => {
      const shuffled = [...prod].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    const randomItems = getRandomItems(AllData, 6);
    console.log(randomItems);
    return {
      props: {
        Data: randomItems,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        Data: [],
      },
    };
  }
};
