import Head from "next/head";
import Button from "../components/Button";
import Layout from "../components/Layout";
// import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-auto w-2/5  flex flex-row">
        <input
          className="w-full border-solid p-2 border-2 border-black"
          type={"text"}
          placeholder={"Enter hash Id"}
        />
        <Button width="w-78">Search</Button>
      </div>
    </Layout>
  );
}
