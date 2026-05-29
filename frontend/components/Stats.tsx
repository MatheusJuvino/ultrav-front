const stats = [
  { num: "800+", label: "Modelos em estoque" },
  { num: "50+", label: "Marcas disponíveis" },
  { num: "12 anos", label: "De experiência" },
  { num: "4.9★", label: "Avaliação média" },
];

export default function Stats() {
  return (
    <div style={{ borderTop: "0.5px solid #e0d5c5", borderBottom: "0.5px solid #e0d5c5", padding: "2.5rem 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: "center", padding: "0 1.5rem", borderRight: i < stats.length - 1 ? "0.5px solid #e0d5c5" : "none" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", color: "#2c1f0e", fontWeight: 600 }}>{s.num}</div>
            <div style={{ color: "#8c7b68", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
