# 🚀 Zen Editor - GitHub Pages Deployment Guide

## ✅ Hazırlık Tamamlandı!

Projeniz GitHub Pages'e deploy edilmeye hazır. Aşağıdaki adımları takip edin.

---

## 📋 Deployment Adımları

### 1. Git Repository'yi Hazırla

Eğer henüz bir GitHub repository'si yoksa:

```bash
cd /Users/ummugulsun/ummugulsun-portfolio-2/v2-next

# Git repository'si başlat (eğer yoksa)
git init

# Ana branch'i main olarak ayarla
git branch -M main

# GitHub'da yeni bir repo oluştur ve bağla
git remote add origin https://github.com/ummugulsunn/ummugulsun-portfolio-v2.git
```

### 2. Kaynak Kodlarını Push Et

```bash
# Tüm değişiklikleri kaydet
git add .
git commit -m "🎨 Zen Editor Portfolio ready for deployment"

# GitHub'a gönder
git push -u origin main
```

### 3. 🚀 Deploy Et (Büyülü Komut!)

```bash
npm run deploy
```

Bu komut:
- ✅ Production build alacak
- ✅ `out/` klasörünü `gh-pages` branch'ine yükleyecek
- ✅ CNAME dosyanızı otomatik kopyalayacak

**Beklenen çıktı:**
```
Published
```

---

## 🌐 GitHub Pages Ayarları

1. GitHub repository'nize gidin: `https://github.com/ummugulsunn/[REPO-ADI]`
2. **Settings** → **Pages** sekmesine tıklayın
3. Şu ayarları kontrol edin:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` / `root`
   - **Custom domain:** `ummugulsun.me`
   - **Enforce HTTPS:** ✅ İşaretli

---

## 🔧 DNS Ayarları (Domain Yönlendirme)

Domain sağlayıcınızın (GoDaddy, Namecheap, Google Domains) DNS paneline gidin:

### A Records (GitHub IP'leri):
```
Type: A    Name: @    Value: 185.199.108.153
Type: A    Name: @    Value: 185.199.109.153
Type: A    Name: @    Value: 185.199.110.153
Type: A    Name: @    Value: 185.199.111.153
```

### CNAME Record (www subdomain):
```
Type: CNAME    Name: www    Value: ummugulsunn.github.io
```

**Not:** DNS değişiklikleri 5 dakika - 2 saat arasında yayılır.

---

## 🔄 Güncelleme Yaparken

Projeyi her güncellemek istediğinizde:

```bash
# 1. Değişiklikleri kaynak kodda commit et
git add .
git commit -m "Update: [açıklama]"
git push

# 2. Siteyi yeniden deploy et
npm run deploy
```

---

## 🧪 Test Etme

Build'i local'de test etmek için:

```bash
# Build al
npm run build

# Python ile local server başlat
cd out
python3 -m http.server 8000

# Tarayıcıda aç: http://localhost:8000
```

---

## ✅ Deployment Checklist

- [x] `next.config.ts` → `output: 'export'` eklendi
- [x] `public/CNAME` → `ummugulsun.me` eklendi
- [x] `public/.nojekyll` → GitHub Pages için eklendi
- [x] `package.json` → `deploy` script'i eklendi
- [x] `gh-pages` paketi kuruldu
- [x] Static build test edildi (başarılı ✅)
- [ ] GitHub'a push edildi
- [ ] `npm run deploy` çalıştırıldı
- [ ] DNS ayarları yapıldı
- [ ] Site açıldı: https://ummugulsun.me

---

## 🐛 Sorun Giderme

### "Permission denied" hatası alıyorsanız:

```bash
# GitHub'a SSH ile bağlanın veya Personal Access Token kullanın
git remote set-url origin https://[TOKEN]@github.com/ummugulsunn/[REPO-ADI].git
```

### Build hatası alıyorsanız:

```bash
# Node modules'i temizle
rm -rf node_modules package-lock.json
npm install

# Yeniden dene
npm run build
```

### DNS yayılımı uzun sürüyorsa:

```bash
# DNS cache'i temizle (macOS)
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder

# DNS'leri kontrol et
nslookup ummugulsun.me
```

---

## 📊 Site Bilgileri

- **Production URL:** https://ummugulsun.me
- **GitHub Pages URL:** https://ummugulsunn.github.io/[REPO-ADI]
- **Build Output:** `/out` klasörü
- **Deploy Branch:** `gh-pages`

---

## 🎯 Sonraki Adımlar

Deploy sonrası:
1. ✅ Google Search Console'a site ekle
2. ✅ Analytics (Google Analytics / Plausible) entegre et
3. ✅ Sitemap.xml ekle
4. ✅ robots.txt oluştur
5. ✅ Open Graph görseli ekle

---

**Built with 💜 by Ümmügülsün Türkmen**

*The Zen Editor - Where code meets art.*
