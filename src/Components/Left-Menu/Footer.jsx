import React, { useEffect, useState } from 'react';

function Footer() {
    const [width, setWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const getDeviceType = (w) => {
        if (w === 0) return 'Unknown';
        if (w < 640) return 'Mobile';
        if (w < 1024) return 'Tablet';
        return 'Desktop';
    };

    const device = getDeviceType(width);

    return (
        // avoid horizontal overflow and ensure images scale
        <div className="relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 pt-20 pb-10">
                <img src="./Map.png" alt="map" className="object-cover w-full max-w-full h-auto" />
                <div className="pt-10 flex flex-wrap justify-between gap-4">
                    <img src="Frame.png" alt="frame" className="object-cover max-w-full h-auto" />
                    <img src="Frame (1).png" alt="frame1" className="object-cover max-w-full h-auto" />
                    <img src="Frame (2).png" alt="frame2" className="object-cover max-w-full h-auto" />
                    <img src="Frame (3).png" alt="frame3" className="object-cover max-w-full h-auto" />
                </div>
                <div
                    className="text-center bg-white dark:bg-[#2B2B2B] text-gray-500 justify-center items-center m-auto pt-5"
                >
                    <p className="justify-center items-center text-center m-auto pt-3 pb-3 dark:bg-[#767676] dark:text-[#FFB400] font-semibold">
                        2021 All Rights Reserved.Ojjomedia
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;
