import LTitle from "./LTitle"

export const LTemplate = ({ description, percentage }) => {
    return (
        <div className="">
            {/* <LTitle title={title} /> */}
            <div className="flex justify-between">
                <p className="text-[#767676]
                font-md text-md">{description}</p>
                <p className="text-[#767676]
                font-md text-md">{percentage}</p>
            </div>
        </div>
    )
}