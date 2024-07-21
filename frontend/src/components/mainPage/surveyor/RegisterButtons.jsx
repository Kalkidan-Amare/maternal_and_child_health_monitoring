import { Button } from "@/components/ui/button";
import { useState } from "react";
import RegisterMother from "./RegisterMom";

const RegisterButtons = (props) => {
    const [momOpen, setMomOpen] = useState(false)
    const [childOpen, setChildOpen] = useState(false)

    const toggleMother = () => {
        setMomOpen(prev => prev == false ? true : false)
        setChildOpen(false)
    }
    const toggleChild = () => {
        setChildOpen(prev => prev == false ? true : false)
        setMomOpen(false)
    }

    const id = props.id
    return (
        <>
            <Button onClick={toggleMother}>Add Mother</Button>
            <Button onClick={toggleChild}>Add Child</Button>

        </>
    )
}
export default RegisterButtons