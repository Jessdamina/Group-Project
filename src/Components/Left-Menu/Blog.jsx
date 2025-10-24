import { Header } from './Header';
import { Description } from './Description';
import BClayout from './BClayout';

function Blog() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;

    return (
        <div className={'relative w-full max-w-4xl mx-auto justify-center items-center pt-15 overflow-x-hidden ' + (isMobile ? 'px-4' : 'px-0')}>
            <div className={isMobile ? 'text-center' : ''}>
                <Header title="Blog" />
                <Description description="Amet minim mollit non deserunt ullamco est
                 sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                  mollit. lorem ipsum" />
            </div>
            <div className={isMobile ? 'pt-6 flex flex-col gap-4' : 'pt-10 flex gap-7'}>
                <BClayout 
                    title='How To Make Web Templates'
                    imagesrc="Image (10).png"
                    isMobile={isMobile}
                />
                <BClayout 
                    title='Make Business Card'
                    imagesrc="Iamge.png"
                    isMobile={isMobile}
                />
                <BClayout 
                    title='How To Make Flyer Design'
                    imagesrc="Image (11).png"
                    isMobile={isMobile}
                />
            </div>
        </div>
    )
}
export default Blog;