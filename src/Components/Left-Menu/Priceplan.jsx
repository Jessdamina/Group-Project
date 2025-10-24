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
import Button from './Button.jsx';
import React, { useState, useEffect } from 'react';

function Priceplan () {

    // Responsive mobile detector handled by isMobileState below

    const [activeIndex, setActiveIndex] = useState(0);

    // Slide data for plans
    const plans = [
        {
            key: 'silver',
            content: (
                <div className='bg-white dark:bg-[#242526] h-112 w-68 pt-6 justify-center 
                items-center m-0'>
                    <PPlayout description="Silver" title="$0.00" />
                    {SData.map((service) => (
                        <SPlayout
                            key={service.id}
                            imagesrc={service.src}
                            description={service.description}
                            color={service.color}
                        />
                    ))}
                    <Button />
                </div>
            ),
        },
        {
            key: 'gold',
            content: (
                <div className='drop-shadow-lg drop-shadow-gray-300 bg-white dark:bg-[#242526]
                 h-112 dark:drop-shadow-[#FFB400]'>
                    <PPtag background="#FFB400" description="Most Popular" />
                    <PPlayout description="Gold" title="$50.00" />
                    {GData.map((service) => (
                        <GPlayout
                            key={service.id}
                            imagesrc={service.src}
                            description={service.description}
                            color={service.color}
                        />
                    ))}
                    <Button background="#FFB400" color="#242526" />
                </div>
            ),
        },
        {
            key: 'diamond',
            content: (
                <div className='bg-white w-68 dark:bg-[#242526] pt-6 h-112'>
                    <PPlayout description="Diamond" title="$80.00" />
                    {DData.map((service) => (
                        <DPlayout
                            key={service.id}
                            imagesrc={service.src}
                            description={service.description}
                        />
                    ))}
                    <Button />
                </div>
            ),
        },
    ];

    // Slide animation styles are handled by slideStyleMobile below.

    // Navigation for mobile
    const handlePrev = () => setActiveIndex((i) => (i > 0 ? i - 1 : i));
    const handleNext = () => setActiveIndex((i) => (i < plans.length - 1 ? i + 1 : i));

    // Responsive mobile detector (updates on resize / orientation change)
    const [isMobileState, setIsMobileState] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= 768;
        }
        return false; // Default to desktop if window is not defined (SSR)
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mq = window.matchMedia('(max-width: 768px)');
        const handleChange = (e) => setIsMobileState(e.matches);

        // initialize state from matchMedia
        setIsMobileState(mq.matches);

        // prefer modern addEventListener/removeEventListener, fallback to addListener/removeListener
        if (mq.addEventListener) {
            mq.addEventListener('change', handleChange);
            return () => mq.removeEventListener('change', handleChange);
        } else if (mq.addListener) {
            mq.addListener(handleChange);
            return () => mq.removeListener(handleChange);
        }
    }, []);

    // Slide style for mobile using reactive detector
    const slideStyleMobile = {
        transition: 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)',
        transform: isMobileState ? `translateX(-${activeIndex * 100}%)` : 'none',
        display: 'flex',
        flexDirection: 'row',
        width: isMobileState ? `${plans.length * 100}%` : 'auto',
    };

    return (
        <div
            className="
                flex flex-col justify-center items-center m-auto
                relative h-full w-full max-w-4xl pt-20 left-35"
        >
            <div className="w-full max-w-md mx-auto">
                <Header title="Price Plan" />
                <Description description="Amet minim mollit non deserunt ullamco est sit aliqua 
                dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                lorem ipsum" />
            </div>
            {isMobileState ? (
                <div className="overflow-hidden relative pt-10 w-full flex justify-center items-center">
                    <div style={slideStyleMobile}>
                        {plans.map((plan) => (
                            <div key={plan.key} style={{ width: '100%' }}>
                                {plan.content}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 w-full max-w-md mx-auto">
                        <button
                            onClick={handlePrev}
                            disabled={activeIndex === 0}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            Prev
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={activeIndex === plans.length - 1}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <div className='pt-10 flex gap-10 justify-center items-center m-auto w-full'>
                    {plans.map((plan) => (
                        <React.Fragment key={plan.key}>{plan.content}</React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Priceplan;