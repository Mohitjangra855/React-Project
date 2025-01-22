import Button from "./Button"
export default function Data() {
    return (
        <div className="flex  flex-col justify-center item-center space-y-2 rounded-s border-y-2 border-black border-l ">
            <h1 className="text-5xl capitalize">Your feet deserve the best</h1>
            <p className="text-xl capitalize">your feet deserve the best and we're here to help to you with our shoes.</p>
            <div className="flex justify-evenly">
                <Button col={"white"} bgcol={"red"} value={"Shop now"} />
                <Button col={"black"} bgcol={"gray"} value={"Category"} />
            </div>
        </div>
    )
}