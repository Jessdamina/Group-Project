function Hero() {
    // Hide the hero section on screens smaller than 'lg' using Tailwind's 'hidden' and show as flex on 'lg' and above with 'lg:flex'
    return (
        <div className="hidden lg:flex justify-center items-center m-auto bg-white relative dark:bg-[#242526] h-full w-full max-w-4xl px-4 py-8 md:py-7">
            <div className="flex gap-10 flex-col md:flex-row h-auto md:h-100 max-w-full md:max-w-4xl m-auto md:gap-10">
                <div className="flex-1">
                    <h1 className="text-[#2B2B2B] text-2xl md:text-4xl dark:text-[#E4E6EB] font-bold pt-4 md:pt-16">
                        I'm Rayan Adlrdard
                    </h1>
                    <h1 className="text-[#2B2B2B] pb-2 md:pb-5 dark:text-[#E4E6EB] text-2xl md:text-4xl font-bold">
                        <span className="text-[#FFB400]">Front-end</span> Developer
                    </h1>
                    <p className="text-[#767676] dark:text-[#E4E6EB] pb-4 md:pb-10 text-xs md:text-sm max-w-full md:max-w-80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                    </p>
                    <button className="text-[#2B2B2B] bg-[#FFB400] flex items-center justify-center gap-2 cursor-pointer w-28 md:w-32 h-9 md:h-10 rounded-sm font-semibold hover:scale-105">
                        <img src="/Vector3.png" alt="Arrow pointing right, decorative accent for Hire Me button" />
                        HIRE ME
                        <img src="Vector3.png" alt="Arrow pointing right, decorative accent for Hire Me button" />
                    </button>
                    {/* Decorative images, hidden on small screens */}
                    <div className="hidden md:block">
                        <img src="/Rectangle 51.png" alt="Small yellow rectangle, decorative accent in hero section" className="w-4 h-4 object-cover absolute left-200 top-5"/>
                        <img src="/Ellipse 15.png" alt="Small yellow circle, decorative accent in hero section" className="w-3 h-3 object-cover absolute bottom-30 left-115"/>
                        <img src="/Ellipse 15.png" alt="Small yellow circle, decorative accent in hero section" className="w-3 h-3 object-cover absolute left-20 top-5"/>
                        <img src="/Ellipse 16.png" alt="Small gray circle, decorative accent in hero section" className="w-3 h-3 object-cover absolute left-120 top-15"/>
                        <img src="/Ellipse 16.png" alt="Small gray circle, decorative accent in hero section" className="w-3 h-3 object-cover absolute left-24 bottom-10"/>
                        <img src="/Rectangle 52.png" alt="Small gray rectangle, decorative accent in hero section" className="w-4 h-4 object-cover absolute left-60 bottom-35"/>
                        <img src="/Polygon 1.png" alt="Small yellow triangle, decorative accent in hero section" className="w-3 h-3 object-cover absolute left-200 bottom-10"/>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="image.png"
                        className="h-full md:h-auto w-auto object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
export default Hero;