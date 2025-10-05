export const Button = ({ background }) => {
    return (
        <div className="pt-4 flex justify-center items-center m-auto">
            <button className="justify-center items-center w-33 h-8 rounded-4xl border-1 border-[#e4e1e1]
            drop-shadow-xs drop-shadow-[#e4e1e1]" style={{ backgroundColor: background }} >
                <p className="text-[#2B2B2B] text-xs font-bold justify-center items-center m-auto text-center">ORDER NOW</p>
            </button>
        </div>
    )
}
export default Button;