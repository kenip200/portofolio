import Dataimg from "./data.js";
import {
  listTools,
  listProyek,
  listPendidikan,
  listSkills,
  listExperience,
  listKegiatan,
  listSertifikasi,
  listArtikel,
} from "./data.js";

function App() {
  return (
    <>
      {/* hero */}
      <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-10 xl:gap-0 gap-6">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl self-start">
            <q>Kode yang indah, lahir dari ketekunan</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, I'm Hanif Fikri Saputra
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Software Engineering student from SMKN 1 Jenangan Ponorogo,
            interested in website and Android application development. Has been
            learning in this field for the past two years.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href={import.meta.env.BASE_URL + "cv/HanifFikriSaputraCV.pdf"}
              download="HanifFikriSaputraCV.pdf"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-file-download-line ri-lg"></i>
            </a>
            <a
              href="#project"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              see Project <i className="ri-arrow-down-double-fill ri-lg"></i>
            </a>
          </div>
        </div>

        <img
          src={Dataimg.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/* about */}
      <div className="about mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={Dataimg.HeroImage}
            alt="About Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hi, my name is Hanif Fikri Saputra, a student of Software
            Engineering at SMKN 1 Jenangan Ponorogo. I am currently focusing on
            learning web development.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={Dataimg.HeroImage}
              alt="About Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  2 <span className="text-violet-500">+</span>
                </h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* education */}
        <div className="education mt-32 py-10" id="pendidikan">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Education
          </h1>
          <div className="pendidikanBox mt-14 grid md:grid-cols-2 grid-cols-1 gap-4">
            {listPendidikan.map((edu) => (
              <div
                key={edu.id}
                className="p-5 border bg-zinc-800 rounded-md hover:bg-zinc-600"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={edu.dad}
                data-aos-once="true"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="py-1 px-3 text-sm border border-zinc-500 bg-zinc-700 rounded-md font-semibold">
                    {edu.jenjang}
                  </span>
                  <span className="opacity-50 text-sm">{edu.tahun}</span>
                </div>
                <h4 className="text-xl font-bold">{edu.nama}</h4>
                <p className="text-violet-400 font-semibold mt-1">
                  {edu.jurusan}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* skills */}
        <div className="skills mt-32 py-10" id="skill">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            My Skills
          </h1>
          <div className="skillsBox mt-14 grid grid-cols-1 gap-4">
            {listSkills.map((skill) => (
              <div
                key={skill.id}
                className="p-4 border bg-zinc-800 rounded-md hover:bg-zinc-600"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={skill.dad}
                data-aos-once="true"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">{skill.nama}</h4>
                  <span className="opacity-50 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-violet-500 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* tools */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools that I use
          </h1>
          <div className="toolsbox mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border bg-zinc-800 rounded-md hover:bg-zinc-600 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  loading="lazy"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* experience */}
      <div className="experience mt-32 py-10" id="experience">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Experience
        </h1>
        <div className="experienceBox mt-14 grid md:grid-cols-2 grid-cols-1 gap-4">
          {listExperience.map((exp) => (
            <div
              key={exp.id}
              className="p-5 border bg-zinc-800 rounded-md hover:bg-zinc-600"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={exp.dad}
              data-aos-once="true"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="py-1 px-3 text-sm border border-zinc-500 bg-zinc-700 rounded-md font-semibold">
                  {exp.kategori}
                </span>
                <span className="opacity-50 text-sm">{exp.tahun}</span>
              </div>
              <h4 className="text-xl font-bold">{exp.nama}</h4>
              <p className="text-violet-400 font-semibold mt-1">
                {exp.penyelenggara}
              </p>
              <p className="text-base/loose mt-3 opacity-80">{exp.desk}</p>
            </div>
          ))}
        </div>
      </div>

      {/* kegiatan */}
      <div className="activities mt-32 py-10" id="activity">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kegiatan
        </h1>
        <div className="kegiatanBox mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listKegiatan.map((kegiatan) => (
            <div
              key={kegiatan.id}
              className="p-4 border bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={kegiatan.dad}
              data-aos-once="true"
            >
              <img
                src={kegiatan.gambar}
                alt="kegiatan image"
                loading="lazy"
                className="w-full h-auto rounded-md"
              />
              <h1 className="text-xl font-bold my-4">{kegiatan.nama}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* sertifikasi */}
      <div className="certificates mt-32 py-10" id="certificate">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Sertifikasi
        </h1>
        <div className="sertifikasiBox mt-14 grid md:grid-cols-2 grid-cols-1 gap-4">
          {listSertifikasi.map((sertifikat) => (
            <div
              key={sertifikat.id}
              className="p-4 border bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={sertifikat.dad}
              data-aos-once="true"
            >
              <img
                src={sertifikat.gambar}
                alt="sertifikat image"
                loading="lazy"
                className="w-full h-auto rounded-md"
              />
              <h1 className="text-xl font-bold my-4">{sertifikat.nama}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* artikel */}
      <div className="articles mt-32 py-10" id="article">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Artikel & Blog
        </h1>

        {listArtikel.length === 0 ? (
          <div
            className="mt-14 flex flex-col items-center justify-center text-center py-12 border border-dashed border-zinc-700 rounded-md"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <p className="opacity-70 text-sm">
              Belum ada artikel yang dipublikasikan saat ini.
            </p>
            <p className="opacity-50 text-xs mt-1">
              Nantikan tulisan-tulisan berikutnya di sini.
            </p>
          </div>
        ) : (
          <div className="artikelBox mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listArtikel.map((artikel) => (
              <div
                key={artikel.id}
                className="p-4 border bg-zinc-800 rounded-md flex flex-col"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={artikel.dad}
                data-aos-once="true"
              >
                <img
                  src={artikel.gambar}
                  alt="artikel image"
                  loading="lazy"
                  className="w-full h-auto rounded-md"
                />
                <span className="opacity-50 text-sm mt-4">
                  {artikel.tanggal}
                </span>
                <h1 className="text-xl font-bold my-2">{artikel.judul}</h1>
                <p className="text-base/loose opacity-80 mb-4 flex-1">
                  {artikel.ringkasan}
                </p>
                <a
                  href={artikel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 font-semibold hover:underline mt-auto"
                >
                  Baca Selengkapnya →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* projects */}
      <div className="projects mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          My Projects
        </h1>
        <div className="ProjectsBox mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 border bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img
                src={proyek.gambar}
                alt="proyek image"
                loading="lazy"
                className="w-full h-auto rounded-md"
              />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyek.tools.map((tool, index) => (
                    <p
                      key={index}
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={proyek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    see website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  contact */}
      <div className="contact mt-32" id="contact">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Contact Me
        </h1>
        <form
          action="https://formsubmit.co/71d31b6a79f1ad98cfb8a89f9d3209d7"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="border border-zinc-500 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border border-zinc-500 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="45"
                rows="7"
                placeholder="message"
                className="border border-zinc-500 rounded-md p-2"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
