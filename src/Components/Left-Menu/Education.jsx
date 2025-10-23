import Header from "./Header";
import { Description } from "./Description.jsx";
import { EClayout } from "./EClayout.jsx";

function Education () {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    return (
        <div className="relative left-30">
            <div className={`m-auto pt-25 w-full max-w-4xl ${isMobile ? "px-4" : ""}`}>
                <Header title="Education" />
                <Description description={
                    "Amet minim mollit non deserunt ullamco est sit aliqua " +
                    "dolor do amet sint. Velit officia consequat duis enim velit mollit. " +
                    "lorem ipsum"
                }/>
            </div>
            <div className="pt-10">
                <EClayout title="Junior Web Designer" />
                {/* hide the duplicate on small screens */}
                {!isMobile && <EClayout title="Junior Web Designer" />}
                <EClayout title="Senior Web Designer" />
            </div>
        </div>
    )
}
export default Education;