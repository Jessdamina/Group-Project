import { useState } from "react";

function Icons () {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleMenuClick = () => {
        setIsNavOpen(!isNavOpen);
    };

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleContrastClick = () => {
        setIsDarkTheme(!isDarkTheme);
        document.documentElement.classList.toggle("dark", !isDarkTheme);
    };

    return (
        <nav>
            {/* Hamburger button for mobile */}
            <button
                className="md:hidden flex items-center p-2 rounded focus:outline-none focus:ring absolute top-4 right-4 z-50"
                aria-label="Open menu"
                onClick={handleMenuClick}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {/* Responsive nav content */}
            <div className={`${isNavOpen ? "block" : "hidden"} md:block md:flex-col`} id="Nav">
                <div className={`m-auto bg-white dark:bg-[#242526] w-25 h-310 absolute top-0 right-10 pt-5`}>
                    <img
                        src="Contrast.png"
                        alt="Contrast"
                        className="justify-center w-7 h-7 items-center m-auto cursor-pointer"
                        onClick={handleContrastClick}
                        style={{ filter: isDarkTheme ? "invert(1)" : "none" }}
                    />
                    <div className="grid gap-10">
                        <div className="grid gap-2 pt-40">
                            <img src="Pop up.png" alt="Pop up" className="justify-center items-center m-auto"/>
                            <img src="Home.png" alt="Home" className="justify-center w-7 h-7 items-center m-auto"/>
                        </div>
                        <img src="Service.png" alt="Service" className="justify-center w-7 h-7 items-center m-auto"/>
                        <img src="Cv.png" alt="Cv" className="justify-center w-7 h-7 items-center m-auto"/>
                        <img src="Portfolio.png" alt="Portfolio" className="justify-center w-7 h-7 items-center m-auto"/>
                        <img src="Blog.png" alt="Blog" className="justify-center w-7 h-7 items-center m-auto"/>
                        <img src="Contact.png" alt="Contact" className="justify-center w-7 h-7 items-center m-auto"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Icons;