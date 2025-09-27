export const Header = ( { title }) => {
    return (
        <div>
            <h1 className="text-[#2B2B2B] text-2xl font-bold justify-center 
            items-center m-auto text-center pb-5">
                {title}
            </h1>
        </div>
    )
}
export default Header;