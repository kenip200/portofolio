import Dataimg from "./data.js";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-10 xl:gap-0 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl self-start">
            <q>Kode yang indah, lahir dari ketekunan</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, I'm Hanif Fikri Saputra
          </h1>
          <q className="text-base/loose mb-6 opacity-50">
            Software Engineering student from SMKN 1 Jenangan Ponorogo,
            interested in website and Android application development. Has been
            learning in this field for the past two years.
          </q>
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
        />
      </div>
    </>
  );
}

export default App;
