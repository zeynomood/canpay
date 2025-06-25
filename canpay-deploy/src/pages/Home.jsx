import { Link } from "react-router-dom";

export default function CanPayHomePage() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <img src="/logo-lotus.svg" alt="CanPay Lotus Logo" width="100" />
      <h1>CanPay'e Hoş Geldiniz</h1>
      <p>Birlikte Güçlüyüz • Döner Fon ve Kadın Dayanışma Platformu</p>
      <Link to="/about">Biz Kimiz?</Link>
    </div>
  );
}
