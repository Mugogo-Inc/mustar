import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ExperienceGrid from "../components/ExperienceGrid";
import Work from "../components/Work";

const inter = Inter({ subsets: ["latin"] });
export const getStaticProps = async () => {
  const API_URL = "http://localhost:5000/experiences";
  const request = await fetch(API_URL);
  const experiences = await request.json();
  return { props: { experiences } };
};

export default function Home({ experiences }) {
  return (
    <div>
      <Head>
        <title>Hello Star</title>
      </Head>
      <Navbar className="p-5 sm:p-10" />
      <Banner />
      <ExperienceGrid experiences={experiences} />
      <Work />
    </div>
  );
}
