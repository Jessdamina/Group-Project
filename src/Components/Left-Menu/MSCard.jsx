export const MSCard = ({ imagesrc, title, description }) => {
    return (
        <div className="bg-white w-60 h-50 hover:scale-105 cursor-pointer">
            <img src={imagesrc} alt="image" className="className='justify-center
            items-center m-auto object-cover pt-4"/>
            <h1 className="text-[#2B2B2B] text-md font-semibold
            text-center pt-4">{title}</h1>
            <p className='text-[#767676] text-sm ml-2 mr-2
            text-center pt-4'>{description}</p>
        </div>
    )
}
export default MSCard;