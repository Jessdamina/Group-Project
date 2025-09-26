function Hero() {
    return (
        <div className="justify-center items-center m-auto
            bg-white absolute top-0 w-200 h-100 left-115">
            <div className="flex h-100 max-w-180
            m-auto gap-10">
                <div>
                    <h1 className="text-[#2B2B2B] 
                    text-4xl font-bold pt-15">I'm Rayan Adlardard</h1>
                    <h1 className="text-[#2B2B2B] pb-5
                    text-4xl font-bold"><span className="text-[#FFB400]">
                        Front-end</span> Developer</h1>
                    <p className="text-[#767676] pb-10 text-sm max-w-80">
                       Lorem ipsum dolor sit amet,
                       consectetur adipiscing elit. Et,
                       volutpat feugiat placerat lobortis.
                       Natoque rutrum semper sed suspendisse 
                       nunc lectus. 
                    </p>
                    <button className="text-[#2B2B2B] bg-[#FFB400]
                    flex items-center justify-center gap-2 cursor-pointer
                    w-32 h-10 rounded-sm font-semibold hover:scale-105">
                        HIRE ME
                        <img src="Vector3.png" alt="Vector3" />
                    </button>
                    <img src="Rectangle 51.png" alt="Rectangle 51"
                    className="w-4 h-4 object-cover relative left-170 bottom-60"/>
                    <img src="Ellipse 15.png" alt="Ellipse 15"
                    className="w-3 h- object-cover relative bottom-78"/>
                    <img src="Ellipse 15.png" alt="Ellipse 15"
                    className="w-3 h-3 object-cover relative left-90 top-0"/>
                    <img src="Ellipse 16.png" alt="Ellipse 16"
                    className="w-3 h-3 object-cover relative left-5 top-5"/>
                    <img src="Ellipse 16.png" alt="Ellipse 16"
                    className="w-3 h-3 object-cover relative left-90 bottom-80"/>
                    <img src="Rectangle 52.png" alt="Rectangle 52"
                    className="w-4 h-4 object-cover relative left-60 bottom-30"/>
                    <img src="Polygon 1.png" alt="Polygon 1"
                    className="w-3 h-3 object-cover relative left-178 bottom-5"/>
                </div>
                <img src="image.png" alt="image" className="h-100 
                object-cover" />
            </div>
        </div>
    )
}
export default Hero;