import RootLayout from "@/components/Layouts/RootLayout";
import { Col, List, Row } from "antd";
import { Avatar, Card, Rate, Typography, Button } from "antd";
const { Title } = Typography;
const { Meta } = Card;
const { Text } = Typography;
const ProductDetails = ({ product }) => {
  const {
    name,
    category,
    image,
    description,
    price,
    status,
    keyFeatures,
    averageRating,
    individualRating,
    reviews,
  } = product.data;

  const featureData = Object.entries(keyFeatures).map(([key, value]) => ({
    title: key,
    description: value,
  }));
  console.log(reviews, "review");
  console.log(product.data);
  return (
    <>
      <Row>
        <Col xs={24} sm={12} md={8} lg={6}>
          <img src={image} width="50%" alt="" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} style={{ padding: "20px" }}>
          <title>Product Details</title>
          <Title level={2}>{name}</Title>
          <Text strong>Category: </Text>
          <Text>{category}</Text>
          <br />
          <Text strong>Status: </Text>
          <Text style={{ color: status === "In Stock" ? "green" : "red" }}>
            {status}
          </Text>
          <br />
          <Text strong>Price: $</Text>
          <Text>{price}</Text>
          <br />
          <Text strong>Description: </Text>
          <Text>{description}</Text>
          <br />
          <Title level={3}>Key Feature</Title>
          <ul>
            {featureData.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>

          <Text strong>Individual Rating: </Text>
          <Rate allowHalf defaultValue={individualRating} disabled />
          <br />
          <Text strong>Average Rating: </Text>
          <Rate allowHalf defaultValue={averageRating} disabled />
          <br />
        </Col>
      </Row>
      <Title level={2}>Reviews</Title>
      {reviews.map((review) => (
        <div
          style={{
            margin: "10px",
            border: "5px solid white",
            borderRadius: "10px",
          }}
        >
          <Avatar>{review.user}</Avatar>
          <h6>{review.user}</h6>
          <Text strong>Comment: </Text> <br />
          <p>{review.comment}</p>
          <Text strong>Individual Rating: </Text>
          <Rate allowHalf defaultValue={review.rating} disabled />
        </div>
      ))}
    </>
  );
};

export default ProductDetails;
ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  console.log(params);
  const res = await fetch(`${process.env.URL}/products/${params.productId}`);

  const data = await res.json();
  console.log(data);
  return {
    props: {
      product: data,
    },
  };
};
