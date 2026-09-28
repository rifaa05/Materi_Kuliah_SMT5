# PRAKTIKUM 4: Navigasi di React Native

## Tujuan Pembelajaran

1. Memahami konsep perpindahan layar (*routing*) pada aplikasi mobile.
2. Melakukan instalasi dan konfigurasi React Navigation.
3. Mengimplementasikan **Stack Navigation**.
4. Mengimplementasikan **Bottom Tab Navigation**.
5. Mengimplementasikan **Drawer Navigation**.

## Persiapan
### Langkah 1: Install Core Navigation Library
Menginstal library utama **React Navigation** yang digunakan untuk mengatur navigasi antar halaman.
[npm install @react-navigation/native]
![alt text](image.png)

### Langkah 2: Install Dependensi Pendukung
Menginstal dependensi tambahan yang dibutuhkan agar React Navigation dapat berjalan dengan baik.
[npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated]

![alt text](image-1.png)

---

# PRAKTIKUM 1: Stack Navigation
### Langkah 1: Instalasi Pustaka Stack
Menginstal pustaka **Native Stack Navigator** untuk membuat navigasi antar halaman secara berurutan.
[npm install @react-navigation/native-stack]

![alt text](image-2.png)

### Langkah 2: Membuat File Screen
Membuat halaman **Login** sebagai halaman awal aplikasi.
**File `Login.js`**
![alt text](image-3.png)

Membuat halaman **Signup** sebagai halaman pendaftaran pengguna.
**File `Signup.js`**
![alt text](image-4.png)

### Langkah 3: Uji Coba Stack Navigation
Menjalankan aplikasi dan menguji perpindahan dari halaman Login ke Signup serta kembali ke halaman sebelumnya menggunakan tombol navigasi.
!![alt text](ptmn-4-1.gif)

---

# PRAKTIKUM 2: Bottom Tab Navigation
### Langkah 1: Instalasi Pustaka Bottom Tabs
Menginstal pustaka **Bottom Tab Navigator** untuk membuat menu navigasi pada bagian bawah aplikasi.
![alt text](image-5.png)

### Langkah 2: Membuat Layar Baru
Membuat halaman **Home** yang akan ditampilkan pada menu Home.
**File `HomeScreen.js`**
![alt text](image-6.png)

Membuat halaman **Profile** yang akan ditampilkan pada menu Profile.
**File `ProfileScreen.js`**
![alt text](<image-7.png>)

### Langkah 3: Konfigurasi Tab di App.js
Mengatur halaman Home dan Profile ke dalam navigasi tab sehingga pengguna dapat berpindah halaman melalui menu bagian bawah.
![alt text](ptmn-4-2.gif)

---

# PRAKTIKUM 3: Drawer Navigation
### Langkah 1: Instalasi Pustaka Drawer
Menginstal pustaka **Drawer Navigator** untuk membuat menu navigasi berbentuk panel samping.
![alt text](<image-8.png>)

### Langkah 2: Konfigurasi Drawer di App.js
Mengatur halaman yang akan ditampilkan pada Drawer Navigation dan menjalankan aplikasi untuk menguji menu samping.
![alt text](ptmn-4-3.gif)

---