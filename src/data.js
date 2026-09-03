const HeroImage = import.meta.env.BASE_URL + "/assets/hero-img2.png".slice(1);

const Image = {
  HeroImage,
};

export default Image;

const Tools1 = import.meta.env.BASE_URL + "/assets/tools/vscode.png".slice(1);
const Tools2 = import.meta.env.BASE_URL + "/assets/tools/reactjs.png".slice(1);
const Tools3 = import.meta.env.BASE_URL + "/assets/tools/Laravel.png".slice(1);
const Tools4 = import.meta.env.BASE_URL + "/assets/tools/tailwind.png".slice(1);
const Tools5 = import.meta.env.BASE_URL + "/assets/tools/bootstrap.png".slice(1);
const Tools6 = import.meta.env.BASE_URL + "/assets/tools/js.png".slice(1);
const Tools7 = import.meta.env.BASE_URL + "/assets/tools/PHP.png".slice(1);
const Tools8 = import.meta.env.BASE_URL + "/assets/tools/MySQL.png".slice(1);
const Tools9 = import.meta.env.BASE_URL + "/assets/tools/Laragon.png".slice(1);
const Tools10 = import.meta.env.BASE_URL + "/assets/tools/github.png".slice(1);

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
];

const Proyek1 = import.meta.env.BASE_URL + "/assets/proyek/proyek1.webp".slice(1);

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Sekolah",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    dad: "200",
  },
];
