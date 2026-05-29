import Link from "next/link";
import OculosSVG from "@/components/OculosSVG";

export default function Hero() {
  return (
    <section style={{
      display: "grid", gridTemplateColumns: "1fr 1fr",
      minHeight: "86vh", maxWidth: 1100, margin: "0 auto",
      padding: "0 2rem", alignItems: "center", gap: "4rem",
    }}>
      <div>
        <div style={{
          display: "inline-block", border: "0.5px solid #b8914a",
          color: "#b8914a", fontSize: 10, letterSpacing: "0.16em",
          padding: "6px 14px", borderRadius: 1, marginBottom: "2rem", textTransform: "uppercase",
        }}>
          Coleção 2026
        </div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)",
          lineHeight: 1.1, fontWeight: 600, marginBottom: "1.4rem",
        }}>
          O olhar que define o seu{" "}
          <em style={{ color: "#b8914a", fontStyle: "italic" }}>estilo</em>
        </h1>
        <p style={{ color: "#8c7b68", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem", fontWeight: 300, maxWidth: 400 }}>
          Óculos de grau, sol e armações premium para quem enxerga o mundo com personalidade.
          Atendimento especializado e lentes das melhores marcas.
        </p>
        <Link href="#produtos" style={{
          background: "#2c1f0e", color: "#faf7f2", padding: "14px 32px",
          borderRadius: 2, fontSize: 12, fontWeight: 500,
          letterSpacing: "0.08em", textTransform: "uppercase", marginRight: "1rem", display: "inline-block",
        }}>
          Explorar coleção
        </Link>
        <Link href="/contato" style={{
          background: "transparent", color: "#2c1f0e",
          border: "0.5px solid #e0d5c5", padding: "14px 28px",
          borderRadius: 2, fontSize: 12, fontWeight: 400,
          letterSpacing: "0.06em", textTransform: "uppercase", display: "inline-block",
        }}>
          Agendar consulta
        </Link>
      </div>

      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "#f0ebe2", borderRadius: 4, height: 520,
        position: "relative", overflow: "hidden", border: "0.5px solid #e0d5c5",
      }}>
        <OculosSVG cor="#b8914a" tamanho={300} tipo="armacao" />
        <div style={{
          position: "absolute", bottom: "2rem", left: "2rem",
          background: "#2c1f0e", color: "#faf7f2",
          padding: "8px 16px", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          Armação Exclusiva
        </div>
      </div>
    </section>
  );
}
