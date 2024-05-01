import './Heading.css'
let Heading=({HeadingAfter, HeadingBefore})=>{
    return(
        <h2 className='heading_all'>{HeadingAfter} <br /> {HeadingBefore}</h2>
    )
}
export default Heading;