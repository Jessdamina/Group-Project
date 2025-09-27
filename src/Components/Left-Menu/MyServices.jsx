import { Header } from './Header.jsx';
import { Description } from './Description.jsx';
import MSData from './MSData.jsx';

function MyServices() {
    const MyServices = MSData.map(service => (
        <div key={service.id} className='justify-center items-center m-auto
        text-center'>
            <img src={service.src} alt='service-image' className='justify-center
            items-center m-auto' />
            <h1 className='text-[#2B2B2B]'>{service.title}</h1>
            <p className='text-[#767676] text-sm'>{service.description}</p>
        </div>
    ));
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
            <div className='grid grid-cols-3 justify-center items-center m-auto
            bg-white grid-rows-subgrid'>
                {MyServices}
            </div>
        </div>
    )
}
export default MyServices;