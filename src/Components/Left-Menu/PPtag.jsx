export const PPtag = ({ description, background }) => {
    return (
        <div className='h-6 justify-center items-center m-auto' style={{ backgroundColor: background }}>
            <p className="text-[#2B2B2B] justify-center items-center text-xs 
                text-center pt-1 font-medium">{description}</p>             
        </div>
    )
}