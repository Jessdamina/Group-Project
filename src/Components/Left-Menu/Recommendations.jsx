import { Header } from './Header.jsx';
import { Description } from './Description.jsx';
import RLayout from './RLayout.jsx';
import RData from './RData.jsx';

function Recommendations () {
    return (
        <div className="justify-center items-center m-auto
         absolute top-470 w-200 h-100 right-60">
            <div>
                <Header title="Recommendations" />
                <Description description="Amet minim mollit non deserunt ullamco est sit aliqua 
                dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                lorem ipsum" />
            </div>
            <div className='pt-10 flex gap-10'>
                {RData.map((service) => (
                    <RLayout 
                    key={service.id}
                    category={service.category}
                    imagesrc={service.src}
                    title={service.title}
                    description={service.description}/>
                ))}
            </div>
            <div className='flex gap-2 justify-center items-center pt-5 m-auto'>
                <img src="Ellipse 21.png" className='w-2 h-2'/>
                <img src="Ellipse 21.png" className='w-2 h-2'/>
                <img src="Ellipse 21.png" className='w-2 h-2'/>
            </div>
        </div>
    )
}
export default Recommendations;