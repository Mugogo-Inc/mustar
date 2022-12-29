import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ExperienceGrid from "../components/ExperienceGrid";
import Work from "../components/Work";

const inter = Inter({ subsets: ["latin"] });

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Hello Star</title>
      </Head>
      <Navbar className="p-5 sm:p-10" />
      <Banner />
      <ExperienceGrid />
      <Work />
    </div>
  );
}
