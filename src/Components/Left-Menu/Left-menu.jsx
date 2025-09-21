import Profile from "./Profile";
import Languages from "./Languages";
import Skills from "./Skills";
import Extraskills from "./Extraskills";
import Downloadbutton from "./Downloadbutton";

function LeftMenu() {
    return (
        <div className="justify-center items-center m-auto">
            <div className="w-78 h-365 bg-white justify-center
            items-center relative">
                <div>
                    <Profile />
                    <Languages />
                    <Skills />
                    <Extraskills />
                    <Downloadbutton />
                </div>
            </div>
        </div>
    )
}
export default LeftMenu;