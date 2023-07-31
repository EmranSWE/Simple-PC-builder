// import RootLayout from "@/components/Layouts/RootLayout";
// import ProductCard from "@/components/UI/ProductCard";
// import { Col, Row } from "antd";
// import React from "react";

// const PSU = ({ cpuData }) => {
//   const products = cpuData.data;

//   return (
//     <div>
//       <h1>CPU</h1>
//       <Row>
//         {products.map((product) => (
//           <Col xs={24} sm={12} md={8} lg={6} key={product._id} span={8}>
//             <ProductCard product={product} />
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default PSU;
// PSU.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "http://localhost:5000/api/v1/products/?category=CPU"
//   );
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       cpuData: data.data,
//     },
//   };
// };
