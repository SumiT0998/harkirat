
export const RevenueCard=({title,orderCount,amount})=>{

    return <div className="bg-white-500 rounded shadow-sm">
        <div>
            {title}
            ?
        </div>

        <div className="flex justify-between">
            <div>
                ₹{amount}
            </div>
            {orderCount ? <div>
                {orderCount} order(s) {">"}
                <div/> : null }

        </div>

    </div>
}