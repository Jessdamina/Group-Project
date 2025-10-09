import { Header } from './Header.jsx';
import { Description } from './Description.jsx';
import RLayout from './RLayout.jsx';
import RData from './RData.jsx';

function Recommendations () {
    return (
        <div className="
                flex flex-col justify-center items-center m-auto
                relative
                h-115 w-full max-w-4xl px-4 py-8
                md:bottom-2 md:left-8
                sm:top-5 sm:left-0
                lg:absolute lg:left-241 lg:top-550 lg:transform lg:-translate-x-1/2
            ">
            <div>
                <Header title="Recommendations" />
                <Description description="Amet minim mollit non deserunt ullamco est sit aliqua 
                dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                lorem ipsum" />
            </div>
            <div className='pt-10 flex gap-7'>
                {RData.map((service) => (
                    <RLayout 
                    key={service.id}
                    category={service.category}
                    imagesrc={service.src}
                    title={service.title}
                    description={service.description}/>
                ))}
            </div>
            <div className='flex gap-2 justify-center items-center w-68 pt-5 m-auto'>
                <img src="Ellipse 21.png" className='w-2 h-2'/>
                <img src="Ellipse 21.png" className='w-2 h-2'/>
                <img src="Ellipse 21.png" className='w-2 h-2'/>
            </div>
        </div>
    )
}
export default Recommendations;