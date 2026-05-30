"use client";
import Link from "next/link";
import { useCarrinho } from "@/lib/CarrinhoContext";
import { useAuth } from "@/lib/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { quantidade } = useCarrinho();
  const { usuario, admin, logoutUsuario, logoutAdmin } = useAuth();
  const [menu, setMenu] = useState(false);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 99,
      background: "rgba(250,247,242,0.97)",
      borderBottom: "0.5px solid #e0d5c5",
      backdropFilter: "blur(8px)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.1rem 2rem", maxWidth: 1100, margin: "0 auto", gap: "1rem",
      }}>
        <Link href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", letterSpacing: "0.06em", color: "#2c1f0e", textDecoration: "none" }}>
          Ultra<span style={{ color: "#b8914a" }}>V</span>
        </Link>

        <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
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

        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", position: "relative" }}>
          <Link href="/carrinho" style={{
            position: "relative", background: "transparent", border: "0.5px solid #e0d5c5",
            padding: "10px 16px", borderRadius: 2, fontSize: 13, cursor: "pointer",
            color: "#2c1f0e", textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
          }}>
            🛍️
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

          {!usuario && !admin && (
            <>
              <Link href="/login" style={btnGhost}>Entrar</Link>
              <Link href="/cadastro" style={btnPrimary}>Criar conta</Link>
            </>
          )}

          {(usuario || admin) && (
            <div style={{ position: "relative" }}>
              <button onClick={() => setMenu(!menu)} style={{ ...btnGhost, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                {admin ? `🛡️ ${admin.nome.split(" ")[0]}` : `👤 ${usuario?.nome.split(" ")[0]}`} ▾
              </button>
              {menu && (
                <div onMouseLeave={() => setMenu(false)} style={{
                  position: "absolute", right: 0, top: "calc(100% + 6px)",
                  background: "#faf7f2", border: "0.5px solid #e0d5c5", borderRadius: 3,
                  minWidth: 200, boxShadow: "0 4px 16px rgba(0,0,0,0.06)", padding: "0.4rem 0",
                }}>
                  {admin && (
                    <Link href="/admin/produtos" onClick={() => setMenu(false)} style={menuItem}>
                      Gerenciar produtos
                    </Link>
                  )}
                  <button onClick={() => { admin ? logoutAdmin() : logoutUsuario(); setMenu(false); }} style={{ ...menuItem, width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer" }}>
                    Sair
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

const btnGhost: React.CSSProperties = {
  background: "transparent", border: "0.5px solid #e0d5c5",
  padding: "10px 16px", borderRadius: 2, fontSize: 12, color: "#2c1f0e",
  textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase",
};

const btnPrimary: React.CSSProperties = {
  background: "#2c1f0e", color: "#faf7f2", border: "none",
  padding: "10px 18px", borderRadius: 2, fontSize: 12, fontWeight: 500,
  letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none",
};

const menuItem: React.CSSProperties = {
  display: "block", padding: "10px 16px", fontSize: 13, color: "#2c1f0e",
  textDecoration: "none", letterSpacing: "0.04em",
};
