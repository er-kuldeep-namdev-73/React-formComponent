import Label from "./label";
const Input=({fieldType,placeholderName,className,labelName,svalue,manageData,name})=>{
    function valueChange(event){
        manageData(event)
    }
    return (

        <>
            {
                labelName && <Label name={labelName}/> 
            }
            <input type={fieldType} placeholder={placeholderName} className={className} value={svalue} onChange={valueChange} name={name}/>
        </>
    )
}
export default Input;