import { LTemplate } from "./LTemplate";
import LTitle from "./LTitle";

function Skills() {
    return (
        <div className="max-w-60 h-fit m-auto relative">
            <LTitle title="Skills" />
            <LTemplate description="Html" percentage="90%" />
            <div className="pt-1 relative m-auto justify-center items-center">
                <img src="Rectangle 7.png" alt="Progress bar"
                    className="w-57 h-1 relative rounded-2xl
                    justify-center items-center" />
                <img src="Rectangle 10.png" alt="Progress bar"
                    className="w-full h-2 relative bottom-1.5 rounded-2xl" />
            </div>
            <LTemplate description="CSS" percentage="85%" />
            <div className="pt-1 relative m-auto justify-center items-center">
                <img src="Rectangle 7.png" alt="Progress bar"
                    className="w-55 h-1 relative rounded-2xl
                    justify-center items-center" />
                <img src="Rectangle 10.png" alt="Progress bar"
                    className="w-full h-2 relative bottom-1.5 rounded-2xl" />
            </div>
            <LTemplate description="Js" percentage="80%" />
            <div className="pt-1 relative m-auto justify-center items-center">
                <img src="Rectangle 7.png" alt="Progress bar"
                    className="w-52 h-1 relative rounded-2xl
                    justify-center items-center object-cover" />
                <img src="Rectangle 10.png" alt="Progress bar"
                    className="w-full h-2 relative bottom-1.5 rounded-2xl" />
            </div>
            <LTemplate description="PHP" percentage="75%" />
            <div className="pt-1 relative m-auto justify-center items-center">
                <img src="Rectangle 7.png" alt="Progress bar"
                    className="w-50 h-1 relative rounded-2xl
                    justify-center items-center" />
                <img src="Rectangle 10.png" alt="Progress bar"
                    className="w-full h-2 relative bottom-1.5 rounded-2xl" />
            </div>
            <LTemplate description="Wordpress" percentage="85%" />
            <div className="pt-1 relative m-auto justify-center items-center">
                <img src="Rectangle 7.png" alt="Progress bar"
                    className="w-55 h-1 relative rounded-2xl
                    justify-center items-center" />
                <img src="Rectangle 10.png" alt="Progress bar"
                    className="w-full h-2 relative bottom-1.5 rounded-2xl" />
            </div>
            <img src="Line 6.png" className="items-center
                pt-5 m-auto w-full dark:blur-2xl"  />
        </div>
    )
}
export default Skills;