import { useForm } from "react-hook-form"
import FormWrapper from "../ui/FormWrapper"
import { useMutation } from "react-query";
import { postData } from "../../../hooks/useDjango";

const ChildInfoForm = () => {
    const mutation = useMutation((newComplaint)=>postData('children/children/',newComplaint), {
      onSuccess: () => {
        // Invalidate and refetch
        console.log('done')
      },
    });

    const {register, handleSubmit}=useForm()
    const onSubmit=(data)=>{
        mutation.mutate({...data, surveyor:1})
        console.log('form submitted', data)
    }
    return (
        <FormWrapper title='Child Info Form'>
            {(location, styles)=>(

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className={styles.labelClass}>Name</label>
                        <input type="text" id="name" name="name" required className={styles.inputClass} 
                        {...register('name')}/>
                    </div>

                    <div>
                        <label htmlFor="dob" className={styles.labelClass}>Date of Birth</label>
                        <input type="date" id="dob" name="dob" required className={styles.inputClass} 
                        {...register('date_of_birth')}/>
                    </div>

                    <div>
                        <label htmlFor="birth-weight" className={styles.labelClass}>Birth Weight (kg)</label>
                        <input type="number" id="birth-weight" name="birth-weight" step="0.1" required className={styles.inputClass} 
                        {...register('birth_weight')}/>
                    </div>
                    <div>
                        <label htmlFor="birth-length" className={styles.labelClass}>Birth length (kg)</label>
                        <input type="number" id="birth-length" name="birth-length" step="0.1" required className={styles.inputClass} 
                        {...register('birth_length')}/>
                    </div>

                    <div>
                        <label htmlFor="mother" className={styles.labelClass}>Mother's Name</label>
                        <input type="text" id="mother" name="mother" required className={styles.inputClass} 
                        {...register('mother')}/>
                    </div>
                    
                    <div>
                        <label htmlFor="gender" className={styles.labelClass}>Gender</label>
                        <select id="gender" name="gender" required className={styles.inputClass} {...register('gender')}>
                            <option value="">Select...</option>
                            <option value="vaginal">Male</option>
                            <option value="cesarean">Female</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="location" className={styles.labelClass}>Location</label>
                        <input type="text" id="location" name="location" readOnly required defaultValue={location} className={styles.inputClass}
                        {...register('location')} />
                    </div>

                    <div>
                        <input type="submit" value="Submit" className={styles.submitClass} />
                    </div>
                </form>)}
        </FormWrapper>
    )
}
export default ChildInfoForm