import { Header } from './Header.jsx';
import { Description } from './Description.jsx';
import MSCard from './MSCard.jsx';
import MSData from './MSData.jsx';
import { useState, useEffect } from 'react';

function MyServices() {
    // Responsive handling: Hide component in mobile and medium screens
    const [isBelowLg, setIsBelowLg] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsBelowLg(window.innerWidth < 1024); // 1024px is Tailwind's 'lg'
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isBelowLg) return null;

    return (
        // remove left-30 and redundant h-full; add overflow-hidden and horizontal padding to prevent overflow
        <div className="flex flex-col items-center mx-auto pt-20 w-full max-w-4xl relative left-30 overflow-hidden px-4 sm:px-6">
            <div className="w-full">
                <Header title="My Services" />
                <Description
                    description="Amet minim mollit non deserunt ullamco est sit aliqua 
                    dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    lorem ipsum"
                />
            </div>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
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
    );
}
export default MyServices;
