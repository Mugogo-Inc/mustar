import Head from "next/head";

import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ExperienceGrid from "../components/ExperienceGrid";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { DataProvider } from "../components/tours/DataContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Visit Zanzibar</title>
      </Head>

      <Navbar className="p-5 sm:p-10" />
      <Banner />
      <DataProvider>
        <ExperienceGrid />
      </DataProvider>
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
