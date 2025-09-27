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
            <div className='pt-15 grid grid-cols-3 gap-x-3 gap-7'>
                {MSData.map((service) => (
                    <MSCard
                        key={service.id}
                        title={service.title}
                        imagesrc={service.src}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    )
}
export default MyServices;