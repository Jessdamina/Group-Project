import { Header } from './Header.jsx';
import { Description } from './Description.jsx';
import { PPlayout } from './PPlayout.jsx'
import { PPtag } from './PPtag.jsx';
import SPlayout from './SPlayout.jsx';
import SData from './SData.jsx';
import GPlayout from './GPlayout.jsx';
import GData from './GData.jsx';
import DData from './DData.jsx';
import DPlayout from './DPlayout.jsx';
import Button from './button.jsx';

function Priceplan () {
    return (
        <div className="justify-center items-center m-auto
         relative bottom-210 w-200 h-100 left-26">
            <div>
                <Header title="Price Plan" />
                <Description description="Amet minim mollit non deserunt ullamco est sit aliqua 
                dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                lorem ipsum" />
            </div>
            <div className='pt-10 flex gap-10 justify-center items-center m-auto'>
                <div className='bg-white h-112 w-60 justify-center items-center m-auto'>
                    <PPtag background="white"/>
                    <PPlayout
                    description="Silver"
                    title="$0.00"/>
                    {SData.map((service) => (
                        <SPlayout 
                        key={service.id}
                        imagesrc={service.src}
                        description={service.description}
                        color={service.color}/>
                    )) }
                    <Button />
                </div> 
                <div className='drop-shadow-lg drop-shadow-gray-300 bg-white h-112'>
                    <PPtag 
                    background="#FFB400"
                    description="Most Popular"/>
                    <PPlayout
                    description="Gold" 
                    title="$50.00"/>
                    {GData.map((service) => (
                        <GPlayout
                            key={service.id}
                            imagesrc={service.src}
                            description={service.description}
                            color={service.color}
                        />
                    )) }
                    <Button background="#FFB400"/>
                </div>
                <div className='bg-white pt-6 h-112'>
                    <PPlayout
                    description="Diamond"
                    title="80.00"/>
                    {DData.map((service) => (
                        <DPlayout
                            key={service.id}
                            imagesrc={service.src}
                            description={service.description}
                        />
                    ))}
                    <Button />
                </div>
            </div>
        </div>
    )
}
export default Priceplan;