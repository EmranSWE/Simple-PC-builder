import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";

const HomePage = ({}) => {
  return (
    <>
      <Head>
        <title>PC Builder</title>
        <meta name="description" content="The project developed by MD Emran" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Feature Product</h1>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
