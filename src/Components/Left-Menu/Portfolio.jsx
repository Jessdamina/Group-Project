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
        // prevent horizontal overflow, center and add side padding
        <div className="max-w-4xl mx-auto px-4 relative overflow-x-hidden">
            <div className="pt-20">
                <Header title="Portfolio" />
                <Description
                    description={
                        "Amet minim mollit non deserunt ullamco est sit aliqua " +
                        "dolor do amet sint. Velit officia consequat duis enim velit mollit. " +
                        "lorem ipsum"
                    }
                />
            </div>

            <div>
                {isMobile ? (
                    <div className="flex justify-center pb-4">
                        <select className="border rounded p-2 w-full">
                            <option>All Categories</option>
                            <option>UI Design</option>
                            <option>Web Templates</option>
                            <option>Logo</option>
                            <option>Branding</option>
                        </select>
                    </div>
                ) : (
                    <div className="text-center">
                        <ul className="flex gap-6 pb-5 pt-5 justify-center items-center flex-wrap">
                            <li className="text-[#FFB400] text-sm font-semibold">All Categories</li>
                            <li className="text-[#2B2B2B] text-sm font-semibold">UI Design</li>
                            <li className="text-[#2B2B2B] text-sm font-semibold">Web Templates</li>
                            <li className="text-[#2B2B2B] text-sm font-semibold">Logo</li>
                            <li className="text-[#2B2B2B] text-sm font-semibold">Branding</li>
                        </ul>
                    </div>
                )}

                {/* Use flex-wrap so items wrap instead of overflowing; ensure images are responsive */}
                <div className={isMobile ? 'grid grid-cols-1 gap-4 px-0' : 'flex flex-wrap justify-center gap-7'}>
                    <img src="./Image (2).png" alt="Portfolio Item 1"
                        className={isMobile ? 'w-full h-40 object-cover' : 'w-64 h-48 object-cover'} />
                    <img src="./Image (1).png" alt="Portfolio Item 2"
                        className={isMobile ? 'w-full h-40 object-cover' : 'w-64 h-48 object-cover'} />
                    <img src="./Image (3).png" alt="Portfolio Item 3"
                        className={isMobile ? 'w-full h-40 object-cover' : 'w-64 h-48 object-cover'} />
                </div>

                <div className={isMobile ? 'grid grid-cols-1 gap-4 px-0 pt-4' : 'flex flex-wrap justify-center gap-7 pt-7'}>
                    <img src="./Image (4).png" alt="Portfolio Item 4"
                        className={isMobile ? 'w-full h-40 object-cover' : 'w-64 h-48 object-cover'} />
                    <img src="./Image (5).png" alt="Portfolio Item 5"
                        className={isMobile ? 'w-full h-40 object-cover' : 'w-64 h-48 object-cover'} />
                    <img src="./Image (6).png" alt="Portfolio Item 6"
                        className={isMobile ? 'w-full h-40 object-cover' : 'w-64 h-48 object-cover'} />
                </div>

                <div className={isMobile ? 'grid grid-cols-1 gap-4 px-0 pt-4' : 'flex flex-wrap justify-center gap-7 pt-7'}>
                    <img src="./Image (7).png" alt="Portfolio Item 7"
                        className={isMobile ? 'w-full h-40 object-cover' : 'w-64 h-48 object-cover'} />
                    <img src="./Image (8).png" alt="Portfolio Item 8"
                        className={isMobile ? 'w-full h-40 object-cover' : 'w-64 h-48 object-cover'} />
                    <img src="./Image (9).png" alt="Portfolio Item 9"
                        className={isMobile ? 'w-full h-40 object-cover' : 'w-64 h-48 object-cover'} />
                </div>
            </div>
        </div>
    );
}
export default Portfolio;