import style from './elementStyle.module.css'

export default function Style(){
   var inlinecss={
    color:"white",
    backgroundColor:"skyblue",
    padding:"20px"
   }
    return(
        <>
         <h2 style={inlinecss}>This is the Inline css</h2>
         <h2 className={style.elementStyle}>This is element module style</h2>
        </>
    )
}