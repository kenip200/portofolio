import Dataimg from "./data.js";
import { listTools, listProyek } from "./data.js";

function App() {
  return (
    <>
      {/* hero */}
      <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-10 xl:gap-0 gap-6">
        <div>
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
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-file-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              see Project <i className="ri-arrow-down-double-fill rii-lg"></i>
            </a>
          </div>
        </div>

        <img
          src={Dataimg.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
          loading="lazy"
        />
      </div>

      {/* about */}
      <div className="about mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg ">
          <img
            src={Dataimg.HeroImage}
            alt="About Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hi, my name is Hanif Fikri Saputra, a student of Software
            Engineering at SMKN 1 Jenangan Ponorogo.
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

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools that I use</h1>
          <div className="toolsbox mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border bg-zinc-800 rounded-md hover:bg-zinc-600 group"
                key={tool.id}
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

      {/* projects */}
      <div className="projects mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">My Projects</h1>
        <div className="ProjectsBox mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 border bg-zinc-800 rounded-md">
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
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-500 hover:bg-violet-600"
                  >
                    see website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
