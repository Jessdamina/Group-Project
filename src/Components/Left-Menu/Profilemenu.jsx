import Profile from "./Profile";
import Languages from "./Languages";
import Skills from "./Skills";
import Extraskills from "./Extraskills";
import Downloadbutton from "./Downloadbutton";
import { useEffect, useState } from 'react';

function Profilemenu() {
    const [isMobile, setIsMobile] = useState(false);

    const checkWindowSize = () => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 768); // Mobile breakpoint
        }
    };

    useEffect(() => {
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    return (
        <div
            className={`bg-white dark:bg-[#242526] justify-center items-center relative left-10 w-80 h-310
                ${isMobile ? 'w-full left-0 h-auto' : ''}`}
        >
            <Profile />
            <Languages />
            <Skills />
            <Extraskills />
            <Downloadbutton />
        </div>
    );
}
export default Profilemenu;
