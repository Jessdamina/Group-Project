import Socials from "./Socials.jsx";

function Profile() {

    return (
        <div className="max-w-60 pt-2 m-auto">
            <div>
                <img src="Profile.png" alt="Profile" 
                    className="justify-center items-center 
                    object-cover pt-2 m-auto"/>
                    <div className="relative left-40 top-[-38px]">
                        <img src="Available.png" alt="Available"
                        className="right-220 top-40" />
                    </div>
                    <h1 className="text-xl text-center text-[#242526] dark:text-[#FFB400]
                    drop-shadow-gray-400 drop-shadow-md font-semibold">
                        Rayan Adlardard</h1>
                    <h3 className="text-[#8c8c8c] text-center dark:text-[#E4E6EB] pt-2 text-md">
                        Front-End Developer</h3>
            </div>
            <Socials />
            <img src="Line 6.png" className="items-center dark:blur-2xl
                pt-3 m-auto w-full"  />
            <div className="flex justify-center pt-2">
                <div className="justify-items-start grid gap-2 pt-5 max-w-fit">
                    <p className="text-[#3A3B3C] text-md
                    pl-1 pr-1 font-md bg-[#FFB400]">Age:</p>
                    <p className="text-[#3A3B3C] text-md
                    pl-1 pr-1 font-md bg-[#FFB400]">Residence:</p>
                    <p className="text-[#3A3B3C] text-md
                    pl-1 pr-1 font-md bg-[#FFB400]">Freelance:</p>
                    <p className="text-[#3A3B3C] text-md
                    pl-1 pr-1 font-md bg-[#FFB400]">Address:</p>
                </div>
                <div className="grid gap-2 justify-items-end max-w-fit pt-5">
                    <p className="text-md text-[#767676] dark:text-[#E4E6EB]">24</p>
                    <p className="text-md text-[#767676] dark:text-[#E4E6EB]">BD</p>
                    <p className="text-md text-green-600 dark:text-[#E4E6EB]">Available</p>
                    <p className="text-md text-[#767676] dark:text-[#E4E6EB]">Dhaka, Bangladesh</p>
                </div>
            </div>
            <img src="Line 6.png" className="items-center dark:blur-2xl
                pt-5 m-auto w-full"  />
        </div>
    )
}
export default Profile;