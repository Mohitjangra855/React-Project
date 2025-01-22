export default function Button({value,col,bgcol}){
    return(
        <button className="rounded px-2 py-1" style={{color:col,backgroundColor:bgcol}}>{value}</button>
    )
}