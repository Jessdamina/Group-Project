import { Header } from './Header.jsx';
import { Description } from './Description.jsx';
import MSCard from './MSCard.jsx';
import MSData from './MSData.jsx';

function MyServices() {
    return (
        <div className="justify-center items-center m-auto
         relative bottom-280 w-200 h-100 left-26">
            <div>
                <Header title="My Services" />
                <Description 
                description="Amet minim mollit non deserunt ullamco est sit aliqua 
                dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                lorem ipsum"
                />
            </div>
            <div className='pt-15 grid grid-cols-3 gap-x-3 gap-5 max-w-200 h-130'>
                {MSData.map((service) => (
                    <MSCard
                        key={service.id}
                        title={service.title}
                        imagesrc={service.src}
                        description={service.description}
                    />
                ))}
            </div>
            <div className="bg-white w-60 h-50 hover:scale-105 cursor-pointer
            relative bottom-55 left-135">
                <h1 className="text-[#2B2B2B] text-md font-semibold
                text-center pt-4">Advertising</h1>
                <p className='text-[#767676] text-sm ml-2 mr-2
                text-center pt-4'>Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </p>
                <div className='flex gap-3 justify-center items-center m-auto pt-4'>
                    <p className='text-[#FFB400] text-xs font-semibold'>
                    ORDER NOW</p>
                    <img src="vector.png" alt="vector" className='h-2 w-2 object-cover'/>
                </div>
            </div>
        </div>
    )
}
export default MyServices;