import './Paragraph.css'
let Paragraph = ({paraFirstContent, paraSecondContent})=>{
    return (
        <>
            <p className='pagePara'>{paraFirstContent}</p>

            <p className='pagePara'>{paraSecondContent}</p>
        </>
    )
}
export default Paragraph;