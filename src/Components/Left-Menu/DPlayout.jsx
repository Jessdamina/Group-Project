export const DPlayout = ({ imagesrc, color, description }) => {
    return (
        <div className="pt-3 pl-7 flex gap-3 items-center m-auto">
            <img src={imagesrc} className="w-4 h-4"/>
            <p className="text-xs text-[#2B2B2B]" style={{ color: color }}>{description}</p>
        </div>
    )
}
export default DPlayout;