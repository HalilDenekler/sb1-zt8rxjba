# ☕ Kahve Mağazası Sadakat Programı

Bu proje, kahve mağazaları için modern bir sadakat programı uygulamasıdır. Müşteriler puan kazanabilir, damga toplayabilir ve ödüller kazanabilirler.

## 🚀 Özellikler

- 👤 Kullanıcı Hesapları
  - Kayıt ve giriş sistemi
  - Kişisel profil yönetimi
  - Doğum günü takibi

- 💫 Sadakat Programı
  - QR kod ile damga toplama
  - Puan sistemi
  - Doğum günü özel ikili damga
  - Ödül kataloğu

- 👨‍💼 Yönetici Paneli
  - Müşteri yönetimi
  - Puan ve damga takibi
  - Ödül yönetimi
  - Menü yönetimi
  - Doğum günü müşteri listesi

## 🛠️ Teknolojiler

- Frontend:
  - React
  - TypeScript
  - Tailwind CSS
  - Vite

- Backend:
  - Supabase (Veritabanı ve Kimlik Doğrulama)

## 📋 Kurulum

1. Projeyi klonlayın:
```bash
git clone [proje-url]
cd coffee-loyalty-app
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. `.env` dosyasını oluşturun:
```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_QR_SECRET=your-qr-secret-key
```

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## 📱 Kullanım

### 🧑‍🤝‍🧑 Müşteriler İçin

1. Hesap oluşturun veya giriş yapın
2. Profilinizi görüntüleyin
3. QR kodunuzu mağazada okutun
4. Damga ve puan kazanın
5. Ödülleri görüntüleyin

### 👨‍💼 Yöneticiler İçin

1. Admin hesabıyla giriş yapın
2. Müşteri QR kodlarını tarayın
3. Puan ekleyin veya çıkarın
4. Ödülleri yönetin
5. Menü öğelerini yönetin

## 🔒 Güvenlik

- Row Level Security (RLS) ile veri güvenliği
- QR kod şifreleme
- Rol tabanlı yetkilendirme
- Güvenli oturum yönetimi

## 📊 Veritabanı Şeması

- `profiles`: Kullanıcı profilleri
- `stamps`: Damga kayıtları
- `points`: Puan işlemleri
- `daily_scans`: Günlük tarama kayıtları
- `rewards`: Ödül kataloğu
- `menu_items`: Menü öğeleri

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.