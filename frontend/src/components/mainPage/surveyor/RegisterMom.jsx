import { useParams } from "react-router-dom";
import LaborDelivery from "./momRegister/LaborDelivery"
import MomInfo from "./momRegister/MomInfo"
import Obstetric from "./momRegister/Obstetric"


const RegisterMother = () => {
    const {id} = useParams();

    return (
        <>
            <MomInfo id={id}/>
        </>
    )
}
export default RegisterMother