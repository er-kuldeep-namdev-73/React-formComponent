import Label from "./label";
const Option=({labelName,fieldName,className,manageData,name})=>{
    return(
        
        <>
        {
            labelName && <Label name={labelName}/> 
        }
        <select className={className} onChange={manageData} name={name}>
        {
            fieldName.map((data,index)=>{
                return(
                    <option key={index} value={data}>{data}</option>
                )
            })
        }
        </select>
        </>
    )
}
export default Option;