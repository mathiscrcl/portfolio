import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/constants/products";

type Props = { params: { slug: string } };

// 1) Indique à Next quelles pages statiques générer à l'export
export function generateStaticParams() {
  return products
    .filter((p) => !!p.slug)
    .map((p) => ({ slug: p.slug }));
}

// 2) Métadonnées spécifiques à chaque projet
export function generateMetadata({ params }: Props): Metadata {
  const p = products.find((pr) => pr.slug === params.slug);
  if (!p) {
    return {
      title: "Projet introuvable | Mathis Courcoul",
      description: "",
    };
  }
  return {
    title: `${p.title} | Mathis Courcoul`,
    description: p.description,
  };
}

// (Optionnel mais conseillé pour un site exporté statiquement)
// Tous les slugs non listés dans generateStaticParams feront 404 au build
export const dynamicParams = false;

export default function ProjectPage({ params }: Props) {
  const project = products.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <Container>
      <Link href="/projects" className="inline-block mb-6 text-sm underline">
        ← Tous les projets
      </Link>

      <Heading className="font-black mb-4">{project.title}</Heading>
      <Paragraph className="mb-8">{project.description}</Paragraph>

      {/* Galerie d’images si présente */}
      {Array.isArray(project.images) && project.images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {project.images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              className="rounded-md"
              // Ajoute width/height si tu veux des tailles fixes
            />
          ))}
        </div>
      )}

      {/* Contenu riche défini dans constants/products.tsx */}
      <div className="prose dark:prose-invert max-w-none">
        {project.content}
      </div>
    </Container>
  );
}
