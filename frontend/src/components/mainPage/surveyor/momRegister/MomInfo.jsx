import { useForm } from "react-hook-form"
import FormWrapper from "../ui/FormWrapper"


const MomInfo = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log('form submitted', data)
    }
    return (
        <FormWrapper title="Mother's Information Form">
            {(location, styles) => (

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className={styles.labelClass}>Name</label>
                        <input type="text" id="name" name="name" required className={styles.inputClass} {...register('name')} />
                    </div>

                    <div>
                        <label htmlFor="age" className={styles.labelClass}>Age</label>
                        <input type="number" id="age" name="age" required className={styles.inputClass} {...register('age')} />
                    </div>

                    <div>
                        <label htmlFor="marital-status" className={styles.labelClass}>Marital Status</label>
                        <select id="marital-status" name="marital-status" required className={styles.inputClass} {...register('marital_status')}>
                            <option value="">Select...</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="education-level" className={styles.labelClass}>Education Level</label>
                        <input type="text" id="education-level" name="education-level" required className={styles.inputClass} {...register('education_level')} />
                    </div>

                    <div>
                        <label htmlFor="socioeconomic-status" className={styles.labelClass}>Socioeconomic Status</label>
                        <input type="text" id="socioeconomic-status" name="socioeconomic-status" required className={styles.inputClass} {...register('socioeconomic_status')} />
                    </div>
                    <div>
                        <label htmlFor="occupation" className={styles.labelClass}>occupation</label>
                        <input type="text" id="occupation" name="occupation" required className={styles.inputClass} {...register('occupation')} />
                    </div>

                    <div>
                        <label htmlFor="residence" className={styles.labelClass}>Residence</label>
                        <input type="text" id="residence" name="residence" required className={styles.inputClass} {...register('residence')} />
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
export default MomInfo