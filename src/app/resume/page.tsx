// src/app/resume/page.tsx
import { Container } from "@/components/Container";

export default function ResumePage() {
  const pdfPath = "/portfolio/CV_Mathis_Courcoul.pdf";

  return (
    <Container>
      {/* Téléchargement + affichage */}
      <div style={{ position: "fixed", inset: 0, zIndex: 50 }}>
        <iframe
          src={pdfPath}
          title="CV Mathis Courcoul"
          style={{ width: "100%", height: "100%", border: 0 }}
        />
      </div>

      {/* Bouton flottant pour télécharger */}
      <div style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 60
      }}>
        <a
          href={pdfPath}
          download="CV_Mathis_Courcoul.pdf"
          aria-label="Télécharger le CV"
          style={{
            display: "inline-block",
            background: "#111827",
            color: "#fff",
            padding: "10px 14px",
            borderRadius: 8,
            textDecoration: "none",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)"
          }}
          target="_blank" // permet aussi d'ouvrir dans un nouvel onglet
          rel="noopener noreferrer"
        >
          Télécharger le CV
        </a>
      </div>
    </Container>
  );
}
