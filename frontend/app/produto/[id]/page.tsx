"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { produtos } from "@/lib/produtos";
import OculosSVG from "@/components/OculosSVG";
import { useCarrinho } from "@/lib/CarrinhoContext";
import { useState } from "react";

const tipoMap: Record<string, "sol" | "grau" | "armacao"> = {
  Sol: "sol", Grau: "grau", Armação: "armacao",
};

export default function ProdutoPage() {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === Number(id));
  const { adicionar } = useCarrinho();
  const [adicionado, setAdicionado] = useState(false);

  if (!produto) return (
    <div style={{ padding: "5rem 2rem", textAlign: "center" }}>
      <h2>Produto não encontrado</h2>
      <Link href="/">Voltar</Link>
    </div>
  );

  const relacionados = produtos.filter((p) => p.id !== produto.id).slice(0, 3);

  const handleAdicionar = () => {
    adicionar(produto);
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 2000);
  };

  return (
    <main style={{ background: "#faf7f2", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "1.5rem 2rem", fontSize: 13, color: "#8c7b68" }}>
        <Link href="/" style={{ color: "#8c7b68", textDecoration: "none" }}>Início</Link>
        {" · "}
        <span style={{ color: "#2c1f0e" }}>{produto.nome}</span>
      </div>

      {/* Produto */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem 5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
        {/* Imagem */}
        <div style={{ background: "#f0ebe2", borderRadius: 4, padding: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "0.5px solid #e0d5c5", minHeight: 380 }}>
          <OculosSVG cor={produto.cor} tamanho={280} tipo={tipoMap[produto.categoria] ?? "grau"} />
        </div>

        {/* Info */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#b8914a", marginBottom: "0.8rem" }}>
            {produto.marca} · {produto.categoria}
          </div>

          <div style={{ display: "inline-block", background: "#2c1f0e", color: "#faf7f2", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 12px", marginBottom: "1.2rem" }}>
            {produto.badge}
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, marginBottom: "1rem", lineHeight: 1.1 }}>
            {produto.nome}
          </h1>

          <p style={{ color: "#8c7b68", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem", fontWeight: 300 }}>
            {produto.descricao}
          </p>

          {/* Preço */}
          <div style={{ borderTop: "0.5px solid #e0d5c5", borderBottom: "0.5px solid #e0d5c5", padding: "1.5rem 0", marginBottom: "2rem" }}>
            <div style={{ fontSize: "2rem", fontWeight: 600, color: "#2c1f0e", fontFamily: "'Cormorant Garamond', serif" }}>
              R$ {produto.preco.toLocaleString("pt-BR")}
            </div>
            <div style={{ fontSize: 13, color: "#8c7b68", marginTop: 4 }}>
              ou {produto.parcelas}x de R$ {Math.ceil(produto.preco / produto.parcelas).toLocaleString("pt-BR")} sem juros
            </div>
            <div style={{ fontSize: 13, color: "#4a7c59", marginTop: 4 }}>
              5% de desconto no Pix → R$ {Math.floor(produto.preco * 0.95).toLocaleString("pt-BR")}
            </div>
          </div>

          {/* Botão */}
          <button
            onClick={handleAdicionar}
            style={{
              background: adicionado ? "#4a7c59" : "#2c1f0e",
              color: "#faf7f2", border: "none", width: "100%",
              padding: "16px", borderRadius: 2, fontSize: 13, fontWeight: 500,
              cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase",
              marginBottom: "1rem", transition: "background 0.3s",
            }}
          >
            {adicionado ? "✓ Adicionado ao carrinho!" : "Adicionar ao carrinho"}
          </button>

          <Link href="/carrinho" style={{
            display: "block", textAlign: "center", border: "0.5px solid #e0d5c5",
            padding: "14px", borderRadius: 2, fontSize: 12, color: "#2c1f0e",
            textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase",
          }}>
            Ver carrinho
          </Link>

          {/* Detalhes */}
          <div style={{ marginTop: "2rem" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b8914a", marginBottom: "1rem" }}>
              Especificações
            </div>
            <ul style={{ listStyle: "none" }}>
              {produto.detalhes.map((d, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "0.5px solid #e0d5c5", fontSize: 13, color: "#4a3520" }}>
                  <span style={{ color: "#b8914a", fontSize: 10 }}>◆</span> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Relacionados */}
      <div style={{ background: "#f0ebe2", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#b8914a", marginBottom: "0.8rem" }}>Veja também</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, marginBottom: "2rem" }}>Você pode gostar</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {relacionados.map((p) => (
              <Link key={p.id} href={`/produto/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "#faf7f2", border: "0.5px solid #e0d5c5", borderRadius: 3, padding: "1.5rem", textAlign: "center" }}>
                  <OculosSVG cor={p.cor} tamanho={140} tipo={tipoMap[p.categoria] ?? "grau"} />
                  <div style={{ fontSize: 10, color: "#b8914a", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "1rem" }}>{p.marca}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 600, margin: "4px 0" }}>{p.nome}</div>
                  <div style={{ fontSize: 13, color: "#2c1f0e", fontWeight: 500 }}>R$ {p.preco.toLocaleString("pt-BR")}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
