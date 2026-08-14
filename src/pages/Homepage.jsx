export const Homepage = () => {
  return (
    <div className="homepage pt-8">
      <div className="container mx-auto px-2">
        <div className="hero grid md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 bg-indigo-900 w-fit rounded p-2 mx-auto md:mx-0">
              <img src="/assets/hero.webp" alt="Hero" className="w-10" />
              <q className="text-white lg:text-base text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</q>
            </div>
            <h1 className="text-4xl/tight md:text-8xl/tight font-semibold mb-2">
              Teknologi <br /> untuk kita.
            </h1>
            <p className="text-base/loose opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates, dicta hic commodi temporibus nesciunt! Distinctio repellendus suscipit itaque obcaecati ipsum nemo eos assumenda! Quo iste ut recusandae? Ab, sint!
            </p>
            <button type="button" className="bg-black border-3 border-transparent text-white rounded px-4 py-2 hover:bg-white hover:text-black transition-all duration-300 hover:border-black">
              Lihat Jadwal Event <i className="ri-eye-line"></i>
            </button>
          </div>
          <img src="/assets/hero.webp" alt="hero big" className="w-full md:block hidden"/>
        </div>
      </div>
    </div>
  )
}