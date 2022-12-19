import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-5 sm:p-10">
      <Head>
        <title>Hello Star</title>
      </Head>
      <Navbar />
    </div>
  );
}
