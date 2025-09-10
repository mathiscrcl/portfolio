import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";

export const metadata = {
  title: "Projets | Mathis Courcoul",
  description: "Tous les projets",
};

export default function ProjectsPage() {
  return (
    <Container>
      <Heading className="font-black mb-6">Projets</Heading>
      <Products />
    </Container>
  );
}
