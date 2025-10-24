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

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {isMobile ? (
                <>
                    {/* Profile icon for small/medium screens */}
                    <button
                        aria-label="Open profile menu"
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200"
                    >
                        {/* simple inline user SVG icon */}
                        <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" />
                            <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8v1H4v-1z" />
                        </svg>
                    </button>

                    {/* Overlay menu when icon is clicked */}
                    {menuOpen && (
                        <div className="fixed inset-0 z-40 flex items-start justify-end">
                            <div
                                className="absolute inset-0"
                                onClick={() => setMenuOpen(false)}
                                aria-hidden="true"
                            />
                            <div
                                className="m-4 mt-6 w-80 max-w-full bg-white dark:bg-[#242526] rounded-md shadow-lg overflow-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Profile />
                                <Languages />
                                <Skills />
                                <Extraskills />
                                <Downloadbutton />
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div
                    className="bg-white dark:bg-[#242526] justify-center items-center absolute top-0 h-310 w-80"
                >
                    <Profile />
                    <Languages />
                    <Skills />
                    <Extraskills />
                    <Downloadbutton />
                </div>
            )}
        </>
    );
}
export default Profilemenu;
