import { useForm } from "react-hook-form"
import FormWrapper from "../ui/FormWrapper"

const Obstetric = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log('form submitted', data)
    }
    return (
        <FormWrapper title='Obstetric History Form'>
            {(location, styles) => (

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="previous-pregnancies" className={styles.labelClass}>Previous Pregnancies</label>
                        <input type="number" id="previous-pregnancies" name="previous-pregnancies" required className={styles.inputClass} {...register('previous_pregnancies')} />
                    </div>

                    <div>
                        <label htmlFor="live-births" className={styles.labelClass}>Live Births</label>
                        <input type="number" id="live-births" name="live-births" required className={styles.inputClass} {...register('live_births')} />
                    </div>

                    <div>
                        <label htmlFor="stillbirths" className={styles.labelClass}>Stillbirths</label>
                        <input type="number" id="stillbirths" name="stillbirths" required className={styles.inputClass} {...register('stillbirths')} />
                    </div>

                    <div>
                        <label htmlFor="miscarriages" className={styles.labelClass}>Miscarriages</label>
                        <input type="number" id="miscarriages" name="miscarriages" required className={styles.inputClass} {...register('miscarriages')} />
                    </div>

                    <div>
                        <label htmlFor="complications" className={styles.labelClass}>Complications</label>
                        <textarea id="complications" name="complications" rows="4" required className={styles.inputClass} {...register('complications')} />
                    </div>
                    <div>
                        <label htmlFor="mother" className={styles.labelClass}>Mother's Name</label>
                        <input type="text" id="mother" name="mother" required className={styles.inputClass} {...register('mother')} />
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
export default Obstetric