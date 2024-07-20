import { useParams } from "react-router-dom"
import ChildInfoForm from "./childRegister/ChildInfoForm"
import Neonatal from "./childRegister/Neonatal"


const RegisterChild = () => {
    const {id} = useParams();
    return (
        <>
            <ChildInfoForm id={id}/>
        </>
    )
}
export default RegisterChild