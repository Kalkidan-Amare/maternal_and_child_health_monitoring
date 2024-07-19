import { useParams } from "react-router-dom"
import FormWrapper from "./ui/FormWrapper"

import { useForm } from "react-hook-form"

const Antenatal = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log('form submitted', data)
    }

    const params = useParams()

    return (
        <FormWrapper title='antenatal form'>
            {(location, styles) => (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="visit-date" className={styles.labelClass}>Visit Date</label>
                        <input type="date" id="visit-date" name="visit-date" required className={styles.inputClass} {...register('visit_date')} />
                    </div>

                    <div>
                        <label htmlFor="blood-pressure" className={styles.labelClass}>Blood Pressure</label>
                        <input type="text" id="blood-pressure" name="blood-pressure" placeholder="e.g., 120/80" required className={styles.inputClass} {...register('blood_pressure')} />
                    </div>

                    <div>
                        <label htmlFor="weight" className={styles.labelClass}>Weight (kg)</label>
                        <input type="number" id="weight" name="weight" step="0.1" required className={styles.inputClass} {...register('weight')} />
                    </div>

                    <div>
                        <label htmlFor="hemoglobin" className={styles.labelClass}>Hemoglobin Level (g/dL)</label>
                        <input type="number" id="hemoglobin" name="hemoglobin" step="0.1" required className={styles.inputClass} {...register('hemoglobin_level')} />
                    </div>

                    <div>
                        <label htmlFor="screening-results" className={styles.labelClass}>Screening Results</label>
                        <textarea id="screening-results" name="screening-results" rows="4" cols="50" required className={styles.textareaClass} {...register('screening_results')} />
                    </div>

                    <div>
                        <label htmlFor="immunizations" className={styles.labelClass}>Immunizations</label>
                        <textarea id="immunizations" name="immunizations" rows="4" cols="50" required className={styles.textareaClass} {...register('immunizations')} />
                    </div>



                    <div>
                        <label htmlFor="mother" className={styles.labelClass}>Mother's Name</label>
                        <input type="text" id="mother" name="mother" defaultValue={params.name} readOnly required className={styles.inputClass} {...register('mother')} />
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
export default Antenatal