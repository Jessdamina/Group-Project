export const PPlayout = ({ title, description }) => {
    return (
        <div className='bg-white w-60 justify-center items-center m-auto'>
            {/* <div className='bg-[#FFB400] w-60 h-6 justify-center items-center m-auto'>
                <p className="text-[#2B2B2B] justify-center items-center text-xs 
                    text-center pt-1 font-medium">Most Popular</p>
            </div> */}
            <div className='justify-center items-center m-auto'>
                    <h4 className="text-[#2B2B2B] font-bold text-center pt-3">{description}</h4>
                <div className='flex gap-2 justify-center items-center m-auto text-center pt-3'>
                    <h2 className="text-[#2B2B2B] font-bold text-2xl text-center">{title}</h2>
                    <p className="text-[#2B2B2B] text-xs text-center pt-1">/Hour</p>
                </div>
                <p className='text-[#767676] text-xs text-center m-auto max-w-45 pt-3 pb-3'>
                    For most businesses that want to optimize web queries</p>
            </div>
        </div>
    )
}
export default PPlayout;