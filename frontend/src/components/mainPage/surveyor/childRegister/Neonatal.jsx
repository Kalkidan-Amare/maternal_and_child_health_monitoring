import { useForm } from "react-hook-form"
import FormWrapper from "../ui/FormWrapper"

const Neonatal = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log('form submitted', data)
    }
    return (
        <FormWrapper title='Neonatal Health Form'>
            {(location, styles) => (

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="apgar-score" className={styles.labelClass}>Apgar Score</label>
                        <input type="number" id="apgar-score" name="apgar-score" step="0.1" required className={styles.inputClass} {...register('apgar_score')} />
                    </div>

                    <div>
                        <label htmlFor="newborn-screening" className={styles.labelClass}>Newborn Screening Results</label>
                        <textarea id="newborn-screening" name="newborn-screening" rows="4" cols="50" required className={styles.inputClass} {...register('newborn_screening_results')} />
                    </div>

                    <div>
                        <label htmlFor="congenital-conditions" className={styles.labelClass}>Congenital Conditions</label>
                        <textarea id="congenital-conditions" name="congenital-conditions" rows="4" cols="50" required className={styles.inputClass} {...register('congenital_conditions')} />
                    </div>

                    <div>
                        <label htmlFor="child" className={styles.labelClass}>Child's Name</label>
                        <input type="text" id="child" name="child" required className={styles.inputClass} {...register('child')} />
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
export default Neonatal