export const Downloadbutton = () => {
    return (
        <div className="flex justify-center items-center gap-5 max-w-60
        bg-[#FFB400] m-auto h-12 mt-5 cursor-pointer hover:scale-105">
            <button className="text-[#2B2B2B] text-lg cursor-pointer font-medium">
                Download CV</button>
            <img src="download1.png" alt="download" 
            className="w-4 h-4 object-cover" />
        </div>
    )
}
export default Downloadbutton;