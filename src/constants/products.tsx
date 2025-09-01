import opensource from "../../public/images/opensource.png";
import CMSprojet from "../../public/images/CMSProjet.png";
import CodeCMS from "../../public/images/CodeCMS.png";
import CodeCMS2 from "../../public/images/CodeCMS2.png";
import entreeMACRO from "../../public/images/entreeMACRO.png";
import CodeMACRO1 from "../../public/images/CodeMACRO1.png";
import ExportMACRO from "../../public/images/ExportMACRO.png";

export const products = [
  {
    title: "Macros Excel Industrielles",
    description:
      "Développement de macros Excel en python pour l'industrie de l'hydrogène.",
    thumbnail: entreeMACRO,
    images: [CodeMACRO1, ExportMACRO],
    stack: ["XLWings","Panda", "Python", "Excel/VBA"],
    slug: "aceternity",
    content: (
      <div>
        <p>
        Réalisé lors de mon alternance chez ATP System, ce projet consistait à développer des macros Excel-Python avancées pour automatiser la génération de code Ladder destiné aux automates Rockwell ControlLogix dans l'industrie PSA (Pressure Swing Adsorption).
        </p>
        <p>
        J'ai maîtrisé l'écosystème Python avec les librairies XLwings et Pandas pour créer une interface intelligente capable de convertir automatiquement les spécifications clients en code d'automatisme industriel. Le projet incluait la manipulation avancée de données Excel, le parsing de documentation technique, et la génération automatique de routines Ladder au format ASCII. Cette réalisation a permis de réduire significativement les temps de développement tout en minimisant les erreurs humaines dans un contexte industriel critique.
        </p>
      </div>
    ),
  },
  {
    title: "Base de données CMS avec reconnaissance caméra",
    description:
      "Système de gestion de contenu avec intelligence artificielle pour la reconnaissance d'objets via caméra, développé avec PyTorch.",
    thumbnail: CMSprojet,
    images: [CodeCMS , CodeCMS2],
    stack: ["PyTorch", "Python"],
    slug: "algochurn",
    content: (
      <div>
        <p>
          Réalisé lors de mon alternance chez ATP System, ce projet consistait à développer des macros Excel-Python avancées pour automatiser la génération de code Ladder destiné aux automates Rockwell ControlLogix dans l'industrie PSA (Pressure Swing Adsorption). . {" "}
        </p>
        <p>
          J'ai conçu et entraîné un réseau de neurones convolutionnel (CNN) personnalisé avec PyTorch, capable de classifier différents types de composants à partir d'images. Le projet incluait la création d'un dataset annoté collaboratif, l'optimisation de l'architecture réseau (LeNet modifié), et le développement d'une application de détection en temps réel. Cette première expérience m'a permis de maîtriser le cycle complet de développement en IA : preprocessing de données, deep learning, computer vision et déploiement d'applications intelligentes dans un contexte industriel.
        </p>{" "}
      </div>
    ),
  },
  {
    title: "Code Open Source",
    description:
      "Participation au code open source de particulier sur Github.",
    thumbnail: opensource,
    images: [],
    stack: ["Git"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
        Je participe régulièrement à des projets open source sur GitHub, contribuant principalement par des corrections de bugs et l'amélioration de documentation existante. Cette activité me permet de travailler sur des projets variés tout en appliquant les bonnes pratiques de développement collaboratif. L'expérience de la revue de code et du travail en équipe distribuée complète ma formation technique. {" "}
        </p>
      </div>
    ),
  },
];
