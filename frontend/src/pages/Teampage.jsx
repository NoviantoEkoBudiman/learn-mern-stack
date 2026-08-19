import { DataTeams } from "../data/data"
import { hoverEffectToWhite } from "../utils/constants"

export const Teampage = () => {
  return (
    <div className="teams">
      <div className="container flex flex-col gap-5 mx-auto py-2 px-4 w-ful">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl/tight font-semibold">Our Teams</h1>
          <h3 className="text-base/loose">This is our great teams. Let's get to know them more!</h3>
        </div>
        <div className="unit-images mx-auto flex flex-wrap justify-center w-full max-w-4xl gap-5">
          { DataTeams.map((team) => (
            <div key={ team.id } className="relative w-full h-72 rounded-xl overflow-hidden sm:w-[48%] md:w-[31%]">
              <img src={team.img} alt={team.nama} className="w-full h-full object-cover shadow-md"/>
              <div className="absolute text-white w-full bottom-5 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                <span>{team.nama}</span>
                <p>{team.job}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button type="button" className={`bg-black px-4 py-2 rounded-xl text-white ${hoverEffectToWhite}`}>See more <i className="ri-eye-line"></i></button>
        </div>
      </div>
    </div>
  )
}