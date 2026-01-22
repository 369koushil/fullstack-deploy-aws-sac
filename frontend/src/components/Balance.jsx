export const Balance = ({ value }) => {
    return <div className="flex">
        <div className="font-semibold text-3xl">
            Your balance
        </div>
        <div className="flex items-center font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}