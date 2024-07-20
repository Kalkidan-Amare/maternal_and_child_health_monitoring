import React from 'react'
import FormWrapper from './ui/FormWrapper'
import { Button } from '@/components/ui/button'
import { useNavigate, useParams } from 'react-router-dom'

const BasicInfoSubmitted = () => {
    const navigate = useNavigate();

    const {id} = useParams();

    const handleAddChild = () => {
        navigate(`/surveyor/register-child/${id}`);
    }
    const handleAddMother = () => {
        navigate(`/surveyor/register-mother/${id}`);
    }
  return (
    <div>
        <FormWrapper title="Basic Information Submitted">
        {(location, styles) => (
            <div className='flex gap-5'>
                <Button onClick={handleAddMother} >Add Mother</Button>
                <Button onClick={handleAddChild} >Add Child</Button>
            </div>
        )}</FormWrapper>
    </div>
  )
}

export default BasicInfoSubmitted