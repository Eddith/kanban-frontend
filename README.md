# Kanban Board Uygulaması

Uygulama ReactJS, NextJS ve Tailwind CSS kullanılarak oluşturacağım. Proje front-end ve back-end bileşenlerinden oluşacak ve aşağıdaki adımları takip ederek ilerleyeceğim.

## Anladıklarım

- **Kanban Board Uygulaması**: Bu uygulama bir board içerecek ve her boardda sabit 4 liste bulunacak: Backlog, To Do, In Progress, Done.
- **Kartlar**: Kartlar listelere eklenebilir, listeler arasında taşınabilir ve aynı liste içinde sıralanabilir.
- **Public Boardlar**: Her boarda özel bir ID atanacak ve bu ID'ye sahip olan herkes board'a erişebilecek.
- **Teknolojiler**: ReactJS, NextJS, Tailwind CSS, MongoDB (veya başka bir veritabanı).
- **Bonus Özellik**: Kullanıcının ziyaret ettiği sayfaları lokalinde saklamak ve son gezilenleri göstermek.

## Adım Adım Plan

### 1. Proje Kurulumu

- `npx create-next-app` komutu ile NextJS projesi oluşturulacak.
- Tailwind CSS kurulumu yapılacak ve yapılandırma dosyaları oluşturulacak.

### 2. Board Ekranını Oluşturma

- Figma tasarımı referans alınarak board ekranı oluşturulacak.
- Sabit 4 liste (Backlog, To Do, In Progress, Done) oluşturulacak.

### 3. Kartların Eklenmesi ve Taşınması

- Kart ekleme fonksiyonu geliştirilecek.
- React Beautiful DnD kullanarak drag-and-drop özelliği eklenecek.
- Kartların aynı liste içinde sıralanabilmesi sağlanacak.

### 4. Board ID Yönetimi

- Her yeni board oluşturulduğunda benzersiz bir ID atanacak.
- Bu ID'ye sahip URL üzerinden board'a erişim sağlanacak.

### 5. Veritabanı Entegrasyonu

- MongoDB kullanılacak ve veritabanı bağlantısı kurulacak.
- Board ve kart bilgileri MongoDB'de saklanacak.

### 6. API Geliştirme

- RESTful API endpoint'leri oluşturulacak.
- Postman collection dosyası hazırlanarak proje ile birlikte sunulacak.

### 7. Responsiveness

- Tailwind CSS ile responsive tasarım uygulanacak.
- Farklı cihaz boyutlarına uygun tasarım sağlanacak.

### 8. Dokümantasyon ve Kod Yorumları

- Proje sürecini ve detaylarını içeren bir doküman yazılacak.
- Readme dosyasında kurulum ve çalıştırma yönergeleri belirtilecek.
- Kod blokları açıklayıcı yorumlarla desteklenecek.

### 9. Bonus Özellik

- Kullanıcının ziyaret ettiği sayfalar localStorage'da saklanacak.
- Son gezilen sayfalar bir köşede listelenecek.
- Buna ek olarak liste eklemede projeye eklenecek.

### Postman Invite Link

- [Postman Invite](https://app.getpostman.com/join-team?invite_code=80766f877742e206f9f99da95d8e7725&target_code=8d82f1bb6668dccea6f7d145328aa3d0)

## Getting Started Frontend

First, run the development server:

```bash
git clone <repository-url>
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

# Kanban Board Backend

## Kurulum

```bash
git clone <repository-url>
cd kanban-board
cd backend
npm install
```

## Mongoose Ayarları

```js
//index.js
mongoose.connect(
  "mongodb+srv://<username>:<password>@cluster0.mongodb.net/kanban?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
```

```bash
node index.js
```
