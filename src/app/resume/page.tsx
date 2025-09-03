import { Container } from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <div className="w-full h-[800px]">
        <iframe
          src="/CV_Mathis_Courcoul.pdf"
          title="CV"
          className="w-full h-full border-0 rounded-md"
        />
      </div>
    </Container>
  );
}
