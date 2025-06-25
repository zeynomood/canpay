
import './index.css';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: '#8E44AD' }}>CanPay'e Hoş Geldin!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
        Bu platform, yalnız kadınlar ve bekar anneler için bir dayanışma alanı.
        Burada kendi yeteneklerini paylaşabilir, destek alabilir, bir cana dokunabilir, birlikte büyüyebiliriz.
        CanPay, döner fon sistemiyle hepimize nefes olan bir can hareketidir.
        <br />
        <strong>Sen de bir canpa ol, bir canı parlat! 🌸</strong>
      </p>

      <h2 style={{ color: '#2C3E50' }}>Başvuru Formu</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <input type="text" placeholder="Ad Soyad" required />
        <input type="email" placeholder="E-posta" required />
        <input type="tel" placeholder="Telefon" required />
        <textarea placeholder="Mesaj / Niyetin" rows="4" required></textarea>
        <button type="submit" style={{ backgroundColor: '#8E44AD', color: 'white', padding: '0.5rem', border: 'none', cursor: 'pointer' }}>
          Gönder
        </button>
      </form>

      <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #ccc' }}>
        <h3 style={{ color: '#8E44AD' }}>Canımdan cana birkaç söz...</h3>
        <p>
          Bu yolculuk tek başıma değildi.<br />
          Hep birlikte ayağa kalkıyoruz.<br />
          Kadın dayanışması bir hayal değil, bizimle gerçek oluyor.<br />
          Adım adım, el ele. 💖<br />
          <em>– Canpam, Özge’nin kalbinden</em>
        </p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Pink_Lotus_flower.png" alt="Lotus Çiçeği" width="120" />
      </div>
    </div>
  );
}

export default App;
