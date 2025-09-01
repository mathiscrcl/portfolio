import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Expériences professionnelles</Heading>
      <Paragraph className="max-w-xl mt-4">
        Je suis un développeur avec des expériences dans différents domaines, mais c&apos;est le 
        <Highlight>data engineering</Highlight> qui me passionne vraiment et vers lequel je me dirige aujourd&apos;hui pour construire des solutions robustes de traitement de données
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}