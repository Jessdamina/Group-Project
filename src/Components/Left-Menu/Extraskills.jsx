import LTitle from "./LTitle";
import ESData from "./ESData";

function Extraskills() {
    const extraSkills = ESData.map(skill => (
        <div key={skill.id} className="flex gap-3 pt-2 items-center">
            <img src={skill.src} alt="Icons" className="w-4 h-4 object-cover" />
            <p className="text-[#767676] font-md text-lg">{skill.description}</p>
        </div>
    ));
    return (
        <div className="max-w-60 m-auto relative">
            <LTitle title="Extra Skills" />
            {extraSkills}
            <img src="Line 6.png" className="items-center
                pt-5 m-auto w-full"  />
        </div>
    )
}
export default Extraskills;