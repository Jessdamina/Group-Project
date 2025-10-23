export const BClayout = ({ imagesrc, title }) => {
    return (
        <div className='bg-white w-70 h-108 dark:bg-[#242526]'>
            <img src={imagesrc} alt="Blog Image" 
            className='w-70 h-70 object-cover'/>
            <div className='pt-5 pl-4'>
                <h1 className='text-[#2B2B2B] font-semibold text-sm dark:text-[#FFB400]'>{title}</h1>
                <p className='text-[#767676] text-sm pt-3 max-w-70'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    itae nulla diam in ac dictum a urna </p>
                <div className='flex flex-row items-center pt-3 gap-2 cursor-pointer'>
                    <p className='text-[#FFB400] text-sm'>Learn More</p>
                    <img src="./vector.png" className='object-cover' />
                </div>
            </div>
        </div>
    )
}
export default BClayout;