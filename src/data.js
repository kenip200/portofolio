const HeroImage = import.meta.env.BASE_URL + "/assets/hero-img2.png".slice(1);

const Image = {
  HeroImage,
};

export default Image;

const Tools1 = import.meta.env.BASE_URL + "/assets/tools/vscode.png".slice(1);
const Tools2 = import.meta.env.BASE_URL + "/assets/tools/reactjs.png".slice(1);
const Tools3 = import.meta.env.BASE_URL + "/assets/tools/Laravel.png".slice(1);
const Tools4 = import.meta.env.BASE_URL + "/assets/tools/tailwind.png".slice(1);
const Tools5 =
  import.meta.env.BASE_URL + "/assets/tools/bootstrap.png".slice(1);
const Tools6 = import.meta.env.BASE_URL + "/assets/tools/js.png".slice(1);
const Tools7 = import.meta.env.BASE_URL + "/assets/tools/PHP.png".slice(1);
const Tools8 = import.meta.env.BASE_URL + "/assets/tools/MySQL.png".slice(1);
const Tools9 = import.meta.env.BASE_URL + "/assets/tools/Laragon.png".slice(1);
const Tools10 = import.meta.env.BASE_URL + "/assets/tools/github.png".slice(1);
const Tools11 = import.meta.env.BASE_URL + "/assets/tools/yii.png".slice(1);

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "PHP",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "MySQL",
    ket: "Database",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Laragon",
    ket: "Development Environment",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "GitHub",
    ket: "Repository",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Yii2",
    ket: "framework",
    dad: "1100",
  },
];

const noimg = import.meta.env.BASE_URL + "/assets/proyek/default.png".slice(1);
const Proyek1 =
  import.meta.env.BASE_URL + "/assets/proyek/proyek1.webp".slice(1);

export const listProyek = [
  {
    id: 1,
    gambar: noimg,
    nama: "Toko Baju",
    desk: "Web Toko Baju Sederhana",
    tools: ["HTML", "CSS", "PHP", "YY2"],
    link: "https://haniffikri.freedev.app/",
    dad: "200",
  },
];

export const listPendidikan = [
  {
    id: 1,
    dad: "100",
    jenjang: "SMK",
    nama: "SMKN 1 Jenangan Ponorogo",
    jurusan: "Rekayasa Perangkat Lunak",
    tahun: "2024 — Now",
  },
  {
    id: 2,
    dad: "200",
    jenjang: "SMP",
    nama: "SMPN 5 Ponorogo",
    jurusan: "Pendidikan Menengah Pertama",
    tahun: "2021 — 2024",
  },
  {
    id: 3,
    dad: "300",
    jenjang: "SD",
    nama: "SDN 1 Brotonegaran Ponorogo",
    jurusan: "Sekolah dasar",
    tahun: "2015 — 2021",
  },
];

export const listSkills = [
  { id: 1, nama: "Coding", level: 80, dad: "100" },
  { id: 2, nama: "Web Development", level: 70, dad: "100" },
  { id: 3, nama: "Android Aplication Development", level: 65, dad: "200" },
  { id: 4, nama: "Problem Solving", level: 75, dad: "300" },
];

export const listExperience = [
  {
    id: 1,
    kategori: "Kunjungan Industri",
    nama: "Kunjungan Industri (KI)",
    penyelenggara: "PT Gamelab Indonesia",
    tahun: "2026",
    desk: "Participating in industrial visits to learn about the application of technology in the workplace.",
    dad: "100",
  },
  {
    id: 2,
    kategori: "Bootcamp",
    nama: "Bootcamp LKS IT Software Solution for Business",
    penyelenggara: "PT Universal Big Data",
    tahun: "2026",
    desk: "Participating in intensive training to prepare for the secondary education-level LKS (Student Competency Competition).",
    dad: "200",
  },
  {
    id: 3,
    kategori: "Lomba",
    nama: "Lomba Kompetensi Siswa (LKS) - IT Software Solution for Business",
    penyelenggara: "Kemendikdasmen",
    tahun: "2026",
    desk: "Participated in a school/regency-level IT competition in the Software Solutions for Business category.",
    dad: "300",
  },
  {
    id: 4,
    kategori: "PKL",
    nama: "Praktik Kerja Lapangan",
    penyelenggara: "PT Promedia Citra Digital Informatika",
    tahun: "2026",
    desk: "Undertake a field internship as a web developer.",
    dad: "400",
  },
];

const kegiatan1 =
  import.meta.env.BASE_URL + "/assets/kegiatan/gamelab.jpeg".slice(1);
const kegiatan2 =
  import.meta.env.BASE_URL + "/assets/kegiatan/ubig.jpeg".slice(1);
const kegiatan3 =
  import.meta.env.BASE_URL + "/assets/kegiatan/lks.jpeg".slice(1);
const kegiatan4 =
  import.meta.env.BASE_URL + "/assets/kegiatan/pkl.jpeg".slice(1);

export const listKegiatan = [
  {
    id: 1,
    gambar: kegiatan1,
    nama: "Kunjungan Industri Gamelab Indonesia 2026",
    dad: "100",
  },
  {
    id: 2,
    gambar: kegiatan2,
    nama: "Bootcamp LKS UBIG 2026",
    dad: "200",
  },
  {
    id: 3,
    gambar: kegiatan3,
    nama: "LKS IT SOFTWARE JATIM 2026",
    dad: "300",
  },
  {
    id: 4,
    gambar: kegiatan4,
    nama: "PKL PT Promedia Citra Digital Informatika 2026",
    dad: "400",
  },
];

const sertifikat1 =
  import.meta.env.BASE_URL + "./assets/certificates/ki.png".slice(1);
const sertifikat2 =
  import.meta.env.BASE_URL + "./assets/certificates/lks.png".slice(1);

export const listSertifikasi = [
  {
    id: 1,
    gambar: sertifikat1,
    nama: "Bootcamp LKS UBIG 2026 certifictates",
    dad: "100",
  },
  {
    id: 2,
    gambar: sertifikat2,
    nama: "LKS IT SOFTWARE JATIM 2026 certifictates",
    dad: "100",
  },
];

export const listArtikel = [
  // Contoh format kalau nanti sudah ada artikel:
  // {
  //   id: 1,
  //   gambar: "/images/artikel/belajar-react.jpg",
  //   judul: "Memulai Belajar React untuk Pemula",
  //   tanggal: "12 Agustus 2026",
  //   ringkasan: "Panduan singkat langkah-langkah dasar memulai pengembangan aplikasi web menggunakan React dan Vite.",
  //   link: "https://medium.com/@username/belajar-react-pemula",
  // },
];
