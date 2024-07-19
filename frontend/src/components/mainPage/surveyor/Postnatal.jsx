import { useParams } from "react-router-dom"


import FormWrapper from "./ui/FormWrapper"
import { useForm } from "react-hook-form"

const Postnatal = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log('form submitted', data)
    }

    const params = useParams()

    return (
        <FormWrapper title='Postnatal Care Form'>
            {(location, styles) => (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="visit-date" className={styles.labelClass}>Visit Date</label>
                        <input type="date" id="visit-date" name="visit-date" required className={styles.inputClass} {...register('visit_date')} />
                    </div>

                    <div>
                        <label htmlFor="health-assessment" className={styles.labelClass}>Health Assessment</label>
                        <textarea id="health-assessment" name="health-assessment" rows="4" cols="50" required className={styles.inputClass} {...register('health_assessment')} />
                    </div>

                    <div>
                        <label htmlFor="breastfeeding-support" className={styles.labelClass}>Breastfeeding Support</label>
                        <textarea id="breastfeeding-support" name="breastfeeding-support" rows="4" cols="50" required className={styles.inputClass} {...register('breastfeeding_support')} />
                    </div>



                    <div>
                        <label htmlFor="mother" className={styles.labelClass}>Mother's Name</label>
                        <input defaultValue={params.name} readOnly type="text" id="mother" name="mother" required className={styles.inputClass} {...register('mother')} />
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
export default Postnatal