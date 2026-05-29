"use client";
import Link from "next/link";
import { useCarrinho } from "@/lib/CarrinhoContext";

export default function Navbar() {
  const { quantidade } = useCarrinho();

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 99,
      background: "rgba(250,247,242,0.97)",
      borderBottom: "0.5px solid #e0d5c5",
      backdropFilter: "blur(8px)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.1rem 2rem", maxWidth: 1100, margin: "0 auto",
      }}>
        <Link href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", letterSpacing: "0.06em", color: "#2c1f0e", textDecoration: "none" }}>
          Ultra<span style={{ color: "#b8914a" }}>V</span>
        </Link>

        <ul style={{ display: "flex", gap: "2.2rem", listStyle: "none" }}>
          {[
            { label: "Óculos de Sol", href: "/?cat=Sol" },
            { label: "Grau", href: "/?cat=Grau" },
            { label: "Armações", href: "/?cat=Armacao" },
            { label: "Contato", href: "/contato" },
          ].map((item) => (
            <li key={item.label}>
              <Link href={item.href} style={{ color: "#8c7b68", textDecoration: "none", fontSize: 13, fontWeight: 400, letterSpacing: "0.07em", textTransform: "uppercase" }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Link href="/carrinho" style={{
            position: "relative", background: "transparent", border: "0.5px solid #e0d5c5",
            padding: "10px 18px", borderRadius: 2, fontSize: 13, cursor: "pointer",
            color: "#2c1f0e", textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
          }}>
            🛍️ Carrinho
            {quantidade > 0 && (
              <span style={{
                position: "absolute", top: -8, right: -8,
                background: "#b8914a", color: "#fff", borderRadius: "50%",
                width: 20, height: 20, fontSize: 11, display: "flex",
                alignItems: "center", justifyContent: "center", fontWeight: 600,
              }}>
                {quantidade}
              </span>
            )}
          </Link>
          <Link href="/" style={{
            background: "#2c1f0e", color: "#faf7f2", border: "none",
            padding: "10px 24px", borderRadius: 2, fontSize: 12, fontWeight: 500,
            cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
          }}>
            Ver coleção
          </Link>
        </div>
      </div>
    </nav>
  );
}
