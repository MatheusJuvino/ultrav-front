"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import OculosSVG from "@/components/OculosSVG";
import { useCarrinho } from "@/lib/CarrinhoContext";
import { produtos as produtosLocal } from "@/lib/produtos";

type Produto = {
  id: number;
  nome: string;
  marca?: string;
  categoria: string;
  descricao: string;
  badge?: string;
  preco: number;
  parcelas?: number;
  destaque?: boolean;
  imagemUrl?: string;
};

const tipoMap: Record<string, "sol" | "grau" | "armacao"> = {
  Sol: "sol", Grau: "grau", Armacao: "armacao", Armação: "armacao",
};

const corMap: Record<string, string> = {
  "Ray-Ban": "#2c1f0e",
  "Oakley": "#4a3520",
  "Versace": "#b8914a",
  "Giorgio Armani": "#b8914a",
};

export default function Products() {
  const [produtos, setProdutos] = useState<Produto[]>(produtosLocal);
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState<number | null>(null);
  const [adicionado, setAdicionado] = useState<number | null>(null);
  const { adicionar } = useCarrinho();

  // Tenta puxar do backend; se ele estiver fora ou retornar vazio, mantem o catalogo local
  useEffect(() => {
    fetch("http://localhost:8080/produtos")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setProdutos(data);
      })
      .catch(() => {
        /* mantem produtos locais */
      });
  }, []);

  const handleAdicionar = (e: React.MouseEvent, produto: Produto) => {
    e.preventDefault();
    const marca = produto.marca ?? "Ultra V";
    adicionar({
      ...produto,
      marca,
      parcelas: produto.parcelas ?? 6,
      badge: produto.badge ?? "Coleção",
      detalhes: [],
      cor: corMap[marca] ?? "#2c1f0e",
    });
    setAdicionado(produto.id);
    setTimeout(() => setAdicionado(null), 1500);
  };

  return (
    <section id="produtos" style={{ padding: "5rem 2rem 0", maxWidth: 1100, margin: "0 auto", scrollMarginTop: "80px" }}>
      <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#b8914a", marginBottom: "0.8rem" }}>Destaques</div>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 600, marginBottom: "0.8rem" }}>
        Mais procurados
      </h2>
      <p style={{ color: "#8c7b68", fontSize: 14, lineHeight: 1.8, maxWidth: 460, marginBottom: "3rem", fontWeight: 300 }}>
        Selecao especial dos modelos favoritos da temporada.
      </p>
      {loading && <div style={{ textAlign: "center", padding: "3rem", color: "#8c7b68" }}>Carregando produtos...</div>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
        {produtos.map((p) => (
          <Link key={p.id} href={`/produto/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div
              onMouseEnter={() => setHover(p.id)}
              onMouseLeave={() => setHover(null)}
              style={{ background: "#faf7f2", border: `0.5px solid ${hover === p.id ? "#b8914a" : "#e0d5c5"}`, borderRadius: 3, overflow: "hidden", cursor: "pointer", transform: hover === p.id ? "translateY(-4px)" : "translateY(0)", transition: "all 0.25s" }}
            >
              <div style={{ height: 220, background: "#f0ebe2", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                {p.imagemUrl ? (
                  <img src={p.imagemUrl} alt={p.nome} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <OculosSVG cor={corMap[p.marca ?? ""] ?? "#2c1f0e"} tamanho={180} tipo={tipoMap[p.categoria] ?? "grau"} />
                )}
                {(p.badge || p.destaque) && (
                  <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "#2c1f0e", color: "#faf7f2", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px" }}>{p.badge ?? "Destaque"}</div>
                )}
              </div>
              <div style={{ padding: "1.25rem" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b8914a", marginBottom: 6 }}>{p.marca ?? p.categoria}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 600, marginBottom: 6 }}>{p.nome}</div>
                <div style={{ color: "#8c7b68", fontSize: 12, lineHeight: 1.65, marginBottom: "1.25rem", fontWeight: 300 }}>{p.descricao}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "0.5px solid #e0d5c5" }}>
                  <div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 500, color: "#2c1f0e" }}>R$ {p.preco.toLocaleString("pt-BR")}</div>
                    <div style={{ fontSize: 11, color: "#8c7b68", fontWeight: 300 }}>{p.parcelas ?? 6}x de R$ {Math.ceil(p.preco / (p.parcelas ?? 6)).toLocaleString("pt-BR")}</div>
                  </div>
                  <button onClick={(e) => handleAdicionar(e, p)} style={{ background: adicionado === p.id ? "#4a7c59" : "#2c1f0e", color: "#faf7f2", border: "none", padding: "8px 18px", borderRadius: 2, fontSize: 11, fontWeight: 500, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase", transition: "background 0.3s" }}>
                    {adicionado === p.id ? "Adicionado" : "Comprar"}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
