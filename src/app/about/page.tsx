import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

import { motion } from "framer-motion";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "À propos de moi | Mathis Courcoul",
  description:
    "",
};

export default function AboutPage() {
  const images = [
    "/images/diplome-2.jpeg",
    "/images/datacamp.png",
    
  ];
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">À propos de moi </Heading>
      <About />
    </Container>
  );
}
