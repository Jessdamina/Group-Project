import { Header } from './Header.jsx';
import { Description } from './Description.jsx';
import RLayout from './RLayout.jsx';
import RData from './RData.jsx';

function Recommendations () {
    const isMobile = typeof window !== 'undefined'
        && window.matchMedia
        && window.matchMedia('(max-width: 640px)').matches;

    return (
        <div className={`
                flex flex-col justify-center items-center m-auto pb-10 left-35
                relative ${isMobile ? 'pt-6' : 'pt-25'}
                ${isMobile ? 'h-auto' : 'h-115'} w-full max-w-4xl`}>
            <div>
                <Header title="Recommendations" />
                <Description description="Amet minim mollit non deserunt ullamco est sit aliqua 
                dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                lorem ipsum" />
            </div>

            <div className={isMobile ? 'pt-6 flex flex-col gap-4 items-center' : 'pt-10 flex gap-7'}>
                {RData.map((service) => (
                    <RLayout 
                        key={service.id}
                        category={service.category}
                        imagesrc={service.src}
                        title={service.title}
                        description={service.description}
                        isMobile={isMobile}
                    />
                ))}
            </div>

            <div className={`flex gap-2 justify-center items-center ${isMobile ? 'w-full pt-4' : 'w-68 pt-5 m-auto'}`}>
                <img src="Ellipse 21.png" className='w-2 h-2'/>
                <img src="Ellipse 21.png" className='w-2 h-2'/>
                <img src="Ellipse 21.png" className='w-2 h-2'/>
            </div>
        </div>
    )
}
export default Recommendations;