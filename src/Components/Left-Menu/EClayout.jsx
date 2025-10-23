export const EClayout = ({ title }) => {
    return (
        <div className="m-auto pt-5 pb-5 w-full max-w-4xl flex gap-50 bg-white dark:bg-[#242526]">
            <div>
                <h1 className="text-[#2B2B2B] font-semibold text-lg pl-3 dark:text-[#FFB400]">
                    {title}</h1>
                <div className="flex flex-start gap-5 pl-3 pt-8">
                    <h2 className="text-[#2B2B2B] text-sm pt-1 justify-center items-center
                    m-auto dark:text-[#767676]">Student</h2>
                    <div className="bg-[#FFB400] w-40 h-6 justify-center items-center m-auto">
                        <p className="text-white dark:text-[#FFB400] justify-center items-center
                        text-xs text-center pt-1">Jan 1016 - Dec 2021</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-[#2B2B2B] font-semibold text-lg dark:text-[#FFB400]">
                Certification of Web Training</h1>
                <p className="text-[#767676] dark:text-[#767676] 
                text-xs pt-5 max-w-110">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. 
                Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere 
                fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</p>
            </div>
        </div>
    )
}
export default EClayout;