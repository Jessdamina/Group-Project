import { Header } from './Header.jsx';
import { Description } from './Description.jsx';
import MSCard from './MSCard.jsx';
import MSData from './MSData.jsx';
import { useState, useEffect } from 'react';

function MyServices() {
    // Import useState and useEffect for responsive handling

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Hide component in mobile view
    if (isMobile) return null;

    // Hide component in mobile and medium screens
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsHidden(window.innerWidth < 1024); // 1024px is Tailwind's 'lg'
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isHidden) return null;

    return (
        <div className="flex flex-col items-center m-auto h-full w-full max-w-4xl py-7 relative 
        bottom-290 left-30">
            <div className="w-full">
                <Header title="My Services" />
                <Description
                    description="Amet minim mollit non deserunt ullamco est sit aliqua 
                    dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    lorem ipsum"
                />
            </div>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 h-full w-full 
            max-w-4xl">
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
    )
}
export default MyServices;