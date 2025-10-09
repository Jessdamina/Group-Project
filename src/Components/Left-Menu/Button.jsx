export const Button = ({ background, color }) => {
    return (
        <div className="pt-2 flex justify-center items-center m-auto w-full">
            <button
                className="justify-center items-center w-32 h-10 rounded-2xl border border-[#e4e1e1]
                drop-shadow-xs drop-shadow-[#e4e1e1] dark:drop-shadow-none dark:border-[#FFB400]
                text-xs font-bold text-[#2B2B2B] dark:text-[#FFB400] text-center
                px-4 py-2
                sm:w-40 sm:h-12
                max-w-xs"
                style={{ backgroundColor: background, color: color }}
            >
                ORDER NOW
            </button>
        </div>
    )
}
export default Button;