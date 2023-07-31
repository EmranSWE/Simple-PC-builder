import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
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
  } = product;
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt="example" src={image} />}
      //   actions={[
      //     <SettingOutlined key="setting" />,
      //     <EditOutlined key="edit" />,
      //     <EllipsisOutlined key="ellipsis" />,
      //   ]}
    >
      <Meta title={name} description={description} />
    </Card>
  );
};

export default ProductCard;
