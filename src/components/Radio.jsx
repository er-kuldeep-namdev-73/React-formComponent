import Input from "./input";
import Label from "./label";

const Radio = ({className,labelName,fieldName,manageData})=>{
    return(
    <div>
    {
        
        labelName && <><Label name={labelName}/><br/></>
        
    }
    {
        fieldName.map((data,index)=>{
            return(
                <span key={index}>
                <Input fieldType={"radio"} className={className} svalue={data} name="gender" manageData={manageData}/>{data} 
                </span>
            )
       })
    }
       
    </div>
    )
}
export default Radio;