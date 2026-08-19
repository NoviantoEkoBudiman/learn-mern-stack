import { Skills } from "../data/data"
import { hoverEffectToBlack } from "../utils/constants";

export const Aboutpage = () => {
  return (
    <div className="about bg-black py-28">
      <div className="container mx-auto px-2 text-center text-white pb-10">
        <h1 className="text-5xl/tight font-semibold">About Us</h1>
        <p className="text-base/loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, temporibus? Optio, iure repudiandae alias corporis velit exercitationem? Officiis placeat quis illo tempora exercitationem saepe sit ex ipsa libero, animi nam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat cupiditate hic non in maiores, tempora modi laboriosam consequuntur atque cumque beatae officiis qui quasi recusandae veniam blanditiis velit ipsa eaque!
        </p>
      </div>
      <div className="skill flex flex-col md:flex-row justify-center gap-5 md:gap-0 md:gap-3 md:px-15 lg:px-30 pb-10">
        { Skills.map((skill) => (
          <div key={skill.id} className={`mx-auto bg-white w-90 rounded-[1vw] p-5 text-center ${hoverEffectToBlack}`}>
            <i className={skill.icon}></i>
            <h1>{skill.Judul}</h1>
            <p>{skill.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button type="button" className={`bg-white px-4 py-2 rounded-[1vw] ${hoverEffectToBlack}`}>Lihat Selengkapnya <i className="ri-eye-line"></i></button>
      </div>
    </div>
  )
}