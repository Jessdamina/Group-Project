import Socials from "./Socials.jsx";

function Profile() {
    return (
        <div className="max-w-70 pt-5 m-auto">
            <div>
                <img src="Profile.png" alt="Profile" 
                    className="justify-center items-center 
                    object-cover pt-5 m-auto"/>
                    <div className="relative left-45 top-[-38px]">
                        <img src="Available.png" alt="Available"
                        className="right-200 top-40" />
                    </div>
                    <h1 className="text-xl text-center text-[#242526]
                    drop-shadow-gray-400 drop-shadow-md font-semibold">
                        Rayan Adlardard</h1>
                    <h3 className="text-[#8c8c8c] text-center pt-3 text-md">
                        Front-End Developer</h3>
            </div>
            <Socials />
            <img src="Line 6.png" className="items-center
                pt-5 m-auto w-full"  />
            <div className="flex justify-center pt-3">
                <div className="justify-items-start grid gap-2 pt-5 max-w-fit">
                    <p className="text-[#3A3B3C] text-lg
                    pl-1 pr-1 font-md bg-[#FFB400]">Age:</p>
                    <p className="text-[#3A3B3C] text-lg
                    pl-1 pr-1 font-md bg-[#FFB400]">Residence:</p>
                    <p className="text-[#3A3B3C] text-lg
                    pl-1 pr-1 font-md bg-[#FFB400]">Freelance:</p>
                    <p className="text-[#3A3B3C] text-lg
                    pl-1 pr-1 font-md bg-[#FFB400]">Address:</p>
                </div>
                <div className="grid gap-2 justify-items-end max-w-fit pt-5">
                    <p className="text-lg text-[#767676]">24</p>
                    <p className="text-lg text-[#767676]">BD</p>
                    <p className="text-lg text-green-600">Available</p>
                    <p className="text-lg text-[#767676]">Dhaka, Bangladesh</p>
                </div>
            </div>
            <img src="Line 6.png" className="items-center
                pt-7 m-auto w-full"  />
        </div>
    )
}
export default Profile;