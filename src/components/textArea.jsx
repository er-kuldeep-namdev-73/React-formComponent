import Label from "./label";

const TextArea=({fieldType,labelName,className,placeholderName,manageData,name})=>{
    return(
        <>
        {
            labelName && <Label name={labelName}/>
        }
            <textarea type={fieldType} className={className} placeholder={placeholderName} name={name} onChange={manageData}></textarea>
        </>
    )
}
export default TextArea;