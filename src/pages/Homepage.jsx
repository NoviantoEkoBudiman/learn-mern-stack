import { hoverEffectToWhite } from "../utils/constants";

export const Homepage = () => {
  return (
    <div>
      <div className="homepage pb-5 md:h-175 md:pb-0 mb-0">
        <div className="container mx-auto px-2">
          <div className="hero grid md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl/tight md:text-6xl/tight lg:text-8xl/tight font-semibold mb-2 my-2">
                The future <br /> is ours!
              </h1>
              <div className="flex items-center gap-2 bg-black w-fit rounded p-2 mx-auto md:mx-0 my-2">
                <i className="ri-lightbulb-ai-line text-white text-2xl/tight"></i>
                <q className="text-white lg:text-base text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</q>
              </div>
              <p className="text-base/loose opacity-75 my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates, dicta hic commodi temporibus nesciunt! Distinctio repellendus suscipit itaque obcaecati ipsum nemo eos assumenda! Quo iste ut recusandae? Ab, sint!
              </p>
              <button type="button" className={`bg-black border-transparent text-white rounded px-4 py-2 ${hoverEffectToWhite}`}>
                See more <i className="ri-eye-line"></i>
              </button>
            </div>
            <img src="/assets/team-7.jpg" alt="hero big" className="w-full md:h-175 md:block hidden"/>
          </div>
        </div>
      </div>
    </div>
  )
}