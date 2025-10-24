function Hero() {
    // Hide the hero section on screens smaller than 'lg'
    return (
        <div className="hidden relative left-35 lg:flex overflow-hidden flex-shrink-0 justify-center items-center m-auto bg-white dark:bg-[#242526] h-full w-215 max-w-4xl md:py-7">
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
                        <img src="/Vector3.png" alt="arrow" />
                        HIRE ME
                        <img src="/Vector3.png" alt="arrow" />
                    </button>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="image.png"
                        alt="Hero"
                        className="max-w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
export default Hero;
