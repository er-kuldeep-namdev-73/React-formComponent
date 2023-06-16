import Label from "./label"
const Checkbox=({labelName,fieldType,className,fieldName,updateSkills,name})=>{
    function changeField(even){
        updateSkills(even);
    }
    return(
        <>
            {
                labelName && <><Label name={labelName}/> <br/></>
            }
            {
            fieldName.map((data,index)=>{
                return (
                    <span key={index}>
                <input type={fieldType} className={className} value={data} name={name} onClick={changeField}/>{data} 
                </span>
            )
        })
            }
        </>
    )
}
export default Checkbox;