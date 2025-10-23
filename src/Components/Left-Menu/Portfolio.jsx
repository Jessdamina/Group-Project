import { Header } from './Header';
import { Description } from './Description';
import React, { useState, useEffect } from 'react';

function Portfolio() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return;
        const mq = window.matchMedia('(max-width: 640px)');
        const handler = (e) => setIsMobile(e.matches);
        setIsMobile(mq.matches);
        if (mq.addEventListener) mq.addEventListener('change', handler);
        else mq.addListener(handler);
        return () => {
            if (mq.removeEventListener) mq.removeEventListener('change', handler);
            else mq.removeListener(handler);
        };
    }, []);

    return (
        <div className='max-w-4xl justify-center items-center m-auto relative left-30'>
            <div className='pt-20'>
                <Header title="Portfolio" />
                <Description description={
                    "Amet minim mollit non deserunt ullamco est sit aliqua " +
                    "dolor do amet sint. Velit officia consequat duis enim velit mollit. " +
                    "lorem ipsum"
                }/>
            </div>

            <div>
                {isMobile ? (
                    <div className='flex justify-center pb-4'>
                        <select className='border rounded p-2 w-3/4'>
                            <option>All Categories</option>
                            <option>UI Design</option>
                            <option>Web Templates</option>
                            <option>Logo</option>
                            <option>Branding</option>
                        </select>
                    </div>
                ) : (
                    <div className='justify-center items-center m-auto text-center'>
                        <ul className='flex gap-6 pb-5 pt-5 justify-center items-center m-auto text-center'>
                            <li className='text-[#FFB400] text-sm font-semibold'>All Categories</li>
                            <li className='text-[#2B2B2B] text-sm font-semibold'>UI Design</li>
                            <li className='text-[#2B2B2B] text-sm font-semibold'>Web Templates</li>
                            <li className='text-[#2B2B2B] text-sm font-semibold'>Logo</li>
                            <li className='text-[#2B2B2B] text-sm font-semibold'>Branding</li>
                        </ul>
                    </div>
                )}

                <div className={isMobile ? 'grid grid-cols-1 gap-4 px-4' : 'justify-center items-center m-auto flex gap-7'}>
                    <img src="./Image (2).png" alt="Portfolio Item 1"
                        className={isMobile ? 'w-full h-40 object-cover rounded' : 'w-70 h-60 object-cover'} />
                    <img src="./Image (1).png" alt="Portfolio Item 2"
                        className={isMobile ? 'w-full h-40 object-cover rounded' : 'w-70 h-60 object-cover'} />
                    <img src="./Image (3).png" alt="Portfolio Item 3"
                        className={isMobile ? 'w-full h-40 object-cover rounded' : 'w-70 h-60 object-cover'} />
                </div>

                <div className={isMobile ? 'grid grid-cols-1 gap-4 px-4 pt-4' : 'justify-center items-center m-auto flex gap-7 pt-7'}>
                    <img src="./Image (4).png" alt="Portfolio Item 4"
                        className={isMobile ? 'w-full h-40 object-cover rounded' : 'w-70 h-60 object-cover'} />
                    <img src="./Image (5).png" alt="Portfolio Item 5"
                        className={isMobile ? 'w-full h-40 object-cover rounded' : 'w-70 h-60 object-cover'} />
                    <img src="./Image (6).png" alt="Portfolio Item 6"
                        className={isMobile ? 'w-full h-40 object-cover rounded' : 'w-70 h-60 object-cover'} />
                </div>

                <div className={isMobile ? 'grid grid-cols-1 gap-4 px-4 pt-4' : 'justify-center items-center m-auto flex gap-7 pt-7'}>
                    <img src="./Image (7).png" alt="Portfolio Item 7"
                        className={isMobile ? 'w-full h-40 object-cover rounded' : 'w-70 h-60 object-cover'} />
                    <img src="./Image (8).png" alt="Portfolio Item 8"
                        className={isMobile ? 'w-full h-40 object-cover rounded' : 'w-70 h-60 object-cover'} />
                    <img src="./Image (9).png" alt="Portfolio Item 9"
                        className={isMobile ? 'w-full h-40 object-cover rounded' : 'w-70 h-60 object-cover'} />
                </div>
            </div>
        </div>
    );
}
export default Portfolio;