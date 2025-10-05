export const RLayout = ({ imagesrc, title, description, category }) => {
    return (
        <div className="bg-white w-60 pt-3 h-60">
            <div className='flex gap-2 pl-5'>
                <img src='Star.png' className='w-4 h-4'/>
                <img src='Star.png' className='w-4 h-4'/>
                <img src='Star.png' className='w-4 h-4'/>
                <img src='Star.png' className='w-4 h-4'/>
                <img src='Star.png' className='w-4 h-4'/>
            </div>
            <h3 className='text-[#2B2B2B] text-md pt-3 font-medium pl-5'>{category}</h3>
            <p className='text-xs pt-3 max-w-53 text-[#767676] pl-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
            <div className="flex gap-2 pl-5 pt-5 items-center m-auto">
                <img src={imagesrc} className="w-15 h-15"/>
                <div>
                    <h3 className="text-[#2B2B2B] text-md font-medium">{title}</h3>
                    <p className='text-xs max-w-53 text-[#767676]'>{description}</p>
                </div>
            </div>
        </div>
    )
}
export default RLayout;