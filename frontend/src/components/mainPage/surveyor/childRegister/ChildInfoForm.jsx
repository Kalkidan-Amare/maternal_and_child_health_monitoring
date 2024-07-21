import FormWrapper from "../ui/FormWrapper"


const ChildInfoForm = () => {

    return (
        <FormWrapper title='Child Info Form' action='api/children/children/'>
            {(location, register, styles)=>(
                <>
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
                        <label htmlFor="birth-length" className={styles.labelClass}>Birth length (cm)</label>
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
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
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
                    </>)}
        </FormWrapper>
    )
}
export default ChildInfoForm