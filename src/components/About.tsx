"use client";
import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "@/components/Highlight";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Salut ! Je suis Mathis Courcoul, diplômé d'un BUT Génie Électrique et Informatique Industrielle,
          passionné par l'automatisme industriel et en reconversion vers le Big Data.
          Bienvenue dans mon univers où l'industrie rencontre l'intelligence artificielle !
        </Paragraph>

        {/* Section Formation GEII */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center my-12">
          <div className="lg:col-span-2">
            <Paragraph>
              Mon parcours a débuté en <Highlight>GEII à l'IUT de Nantes</Highlight>, où j'ai acquis des compétences
              solides en automatisme et informatique industrielle. Les cours de traitement de données et d'analyse
              numérique ont éveillé ma curiosité pour le domaine du Big Data, me poussant à réorienter ma carrière
              vers l'ingénierie des données.
            </Paragraph>
          </div>
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/diplome-2.jpeg"
              width={300}
              height={200}
              alt="Formation GEII"
              className="rounded-md object-cover shadow-lg hover:shadow-xl transition duration-300 w-full"
            />
          </motion.div>
        </div>

        {/* Section DataCamp */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center my-12">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="/images/datacamp.png"
              width={300}
              height={200}
              alt="Certification DataCamp"
              className="rounded-md object-cover shadow-lg hover:shadow-xl transition duration-300 w-full"
            />
          </motion.div>
          <div className="lg:col-span-2">
            <Paragraph>
              Cette passion pour les données s'est concrétisée par l'obtention de la 
              <Highlight>certification "Associate Data Engineer" sur DataCamp</Highlight>. J'ai consacré cette dernière
              année à approfondir mes compétences en Python, SQL et traitement de données, me préparant ainsi à intégrer
              le <Highlight>Mastère Data Engineering chez Ynov Nantes</Highlight> en Octobre 2025.
            </Paragraph>
          </div>
        </div>

        <Paragraph className="mt-8">
          Mon expérience chez <Highlight>ATP System</Highlight> m'a permis de développer des interfaces homme-machine
          et de programmer des automates pour des installations de production. Le développement de scripts Python
          pour automatiser les processus internes a renforcé mon intérêt pour la donnée au service de la production,
          confirmant ma volonté d'orienter ma carrière vers l'industrie 4.0.
        </Paragraph>
        
        <Paragraph className="mt-4">
          Mon expérience académique et professionnelle forment ma polyvalence et me permettent d'aborder des projets complexes nécessitant l'intégration de systèmes
          intelligents dans des environnements industriels.
        </Paragraph>
        
        <Paragraph className="mt-4">
          Merci de votre visite, et j'ai hâte de partager cette aventure technologique avec vous !
        </Paragraph>
      </div>
    </div>
  );
}
