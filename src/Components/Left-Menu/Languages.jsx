import { LTemplate } from './LTemplate.jsx';
import LTitle from './LTitle.jsx';

function Languages() {
    return (
        <div className="max-w-60 m-auto relative">
            <LTitle title="Languages" />
            <div>
                <LTemplate description="Bangla" percentage="100%" />
                <div className="pt-2 relative m-auto justify-center items-center">
                    <img src="Rectangle 7.png" alt="Progress bar"
                        className="w-full h-1 relative rounded-2xl
                        justify-center items-center m-auto" />
                    <img src="Rectangle 10.png" alt="Progress bar"
                        className="w-full h-2 relative bottom-1.5 rounded-2xl" />
                </div>
                <LTemplate description="English" percentage="80%" />
                <div className="pt-2 relative m-auto justify-center items-center">
                    <img src="Rectangle 7.png" alt="Progress bar"
                        className="w-55 h-1 relative rounded-2xl
                        justify-center items-center" />
                    <img src="Rectangle 10.png" alt="Progress bar"
                        className="w-full h-2 relative bottom-1.5 rounded-2xl" />
                </div>
                <LTemplate description="Spanish" percentage="60%" />
                <div className="pt-2 relative m-auto justify-center items-center">
                    <img src="Rectangle 7.png" alt="Progress bar"
                        className="w-50 h-1 relative rounded-2xl
                        justify-center items-center" />
                    <img src="Rectangle 10.png" alt="Progress bar"
                        className="w-full h-2 relative bottom-1.5 rounded-2xl" />
                </div>
            </div>
            <img src="Line 6.png" className="items-center
                pt-7 m-auto w-full"  />
        </div>
    )
}
export default Languages;