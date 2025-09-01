import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Bonjour ! Je suis Mathis</Heading>
      <Paragraph className="max-w-xl mt-4">
        Je suis un développeur avec des expériences dans{" "}
        <Highlight>différents domaines</Highlight>, mais c&apos;est le data engineering qui me passionne vraiment et vers lequel je me dirige aujourd&apos;hui pour construire des solutions robustes de traitement de données
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Je suis actuellement{" "}
        <Highlight>alternant en Big Data</Highlight> et je développe mes compétences dans la création d&apos;architectures de données performantes et d&apos;applications web modernes.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Ce sur quoi j'ai travaillé :
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
