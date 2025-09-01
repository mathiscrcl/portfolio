import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Contact | Mathis Courcoul",
  description:
    ""
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Me Contacter</Heading>
      <Paragraph className="mb-10 max-w-xl">
       Vous pouvez me joindre par email ou en utilisant ce formulaire de contact. Je m'engage à vous répondre dans les plus brefs délais.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
