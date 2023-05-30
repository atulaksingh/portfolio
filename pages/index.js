import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import About from "@/components/main/About";
import Header from "@/components/main/Header";
import Skills from "@/components/main/Skills";
import Designation from "@/components/main/Designation";
import Education from "@/components/main/Education";
import PersonalSkills from "@/components/main/PersonalSkills";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      {/* <PersonalSkills /> */}

      <PersonalSkills />
      <Designation />
      <Education />
      <Project />
      {/* <Header /> */}
      {/* <div>hdfh</div> */}
    </>
  );
}
