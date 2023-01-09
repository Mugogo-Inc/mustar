import Head from "next/head";

import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ExperienceGrid from "../components/ExperienceGrid";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { DataProvider } from "../components/tours/DataContext";
import Menu from "../components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Tours Zanzibar</title>
        <meta name="Tour Zanzibar" content="Tour Zanzibar" />
      </Head>

      <Navbar className="p-5 sm:p-10" />
      <Banner />
      <ExperienceGrid />
      <Menu />
      <Work />

      <Contact />
      <Footer />
    </div>
  );
}
