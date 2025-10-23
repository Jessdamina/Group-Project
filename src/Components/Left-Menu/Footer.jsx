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
        <div className="relative">
            <div className="max-w-4xl justify-center items-center m-auto pt-20 pb-10 relative left-30">
                <img src="./Map.png" className="object-cover" />
                <div className="pt-10 flex justify-between gap-4">
                    <img src="Frame.png" className="object-cover" />
                    <img src="Frame (1).png" className="object-cover" />
                    <img src="Frame (2).png" className="object-cover" />
                    <img src="Frame (3).png" className="object-cover" />
                </div>
                <div
                    className="text-center bg-white dark:bg-[#2B2B2B] text-gray-500
                justify-center items-center m-auto h-15 pt-5"
                >
                    <p className="justify-center items-center text-center m-auto pt-3 pb-3
                    dark:bg-[#767676] dark:text-[#FFB400] font-semibold">
                        2021 All Rights Reserved.Ojjomedia
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;