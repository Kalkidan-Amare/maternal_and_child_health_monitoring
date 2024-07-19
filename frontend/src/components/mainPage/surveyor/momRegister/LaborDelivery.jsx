import { useForm } from "react-hook-form"
import FormWrapper from "../ui/FormWrapper"

const LaborDelivery = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log('form submitted', data)
    }
    return (
        <FormWrapper title='Labor Delivery'>
            {(location, styles) => (

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="delivery-date" className={styles.labelClass}>Delivery Date</label>
                        <input type="date" id="delivery-date" name="delivery-date" required className={styles.inputClass} {...register('delivery_date')} />
                    </div>

                    <div>
                        <label htmlFor="place-of-delivery" className={styles.labelClass}>Place of Delivery</label>
                        <input type="text" id="place-of-delivery" name="place-of-delivery" required className={styles.inputClass} {...register('place_of_delivery')} />
                    </div>

                    <div>
                        <label htmlFor="type-of-delivery" className={styles.labelClass}>Type of Delivery</label>
                        <select id="type-of-delivery" name="type-of-delivery" required className={styles.inputClass} {...register('type_of_delivery')}>
                            <option value="">Select...</option>
                            <option value="vaginal">Vaginal</option>
                            <option value="cesarean">Cesarean</option>
                            <option value="forceps">Forceps</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="birth-attendant" className={styles.labelClass}>Birth Attendant</label>
                        <input type="text" id="birth-attendant" name="birth-attendant" required className={styles.inputClass} {...register('birth_attendant')} />
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
export default LaborDelivery