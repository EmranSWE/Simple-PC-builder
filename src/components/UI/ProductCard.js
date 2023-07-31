import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DollarOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Rate, Typography, Button } from "antd";
import Link from "next/link";
const { Meta } = Card;
const { Text } = Typography;
const ProductCard = ({ product }) => {
  const {
    category,
    averageRating,
    image,
    description,
    individualRating,
    keyFeature,
    name,
    price,
    review,
    status,
    _id,
  } = product;
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt={description} src={image} />}
      actions={[
        <Link href={`/product/${_id}`}>
          <Button type="primary">More Details</Button>
        </Link>,
      ]}
    >
      <Meta title={name} description={description} />
      <Text strong>Category: </Text>
      <Text>{category}</Text>
      <br />
      <Text strong>Price: </Text>
      <Text>
        <DollarOutlined /> {price}
      </Text>
      <br />
      <Text strong>Status: </Text>
      <Text style={{ color: status === "In Stock" ? "green" : "red" }}>
        {status}
      </Text>
      <br />
      <Text strong>Rating: </Text>
      <Rate allowHalf defaultValue={averageRating} disabled />
      <br />
    </Card>
  );
};

export default ProductCard;
