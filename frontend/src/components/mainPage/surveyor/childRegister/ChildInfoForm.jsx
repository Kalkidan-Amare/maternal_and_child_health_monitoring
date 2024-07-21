import FormWrapper from "../ui/FormWrapper"


const ChildInfoForm = ({id}) => {

  return (
    <FormWrapper title='Child Info Form' action='children/child_information/' redirect='surveyor/basic-info-submitted/'>
      {(location, register, styles) => (
        <>
          <div>
            <label  htmlFor="name" className={styles.labelClass}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.inputClass}
              {...register('name')}
            />
          </div>

          <div>
            <label  htmlFor="age_in_months" className={styles.labelClass}>Age in Months</label>
            <input
              type="number"
              id="age_in_months"
              name="age_in_months"
              className={styles.inputClass}
              {...register('age_in_months')}
            />
          </div>

          <div>
            <label  htmlFor="sex" className={styles.labelClass}>Sex</label>
            <select
              id="sex"
              name="sex"
              className={styles.inputClass}
              {...register('sex')}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label  htmlFor="vaccination_status" className={styles.labelClass}>Vaccination Status</label>
            <input
              type="text"
              id="vaccination_status"
              name="vaccination_status"
              className={styles.inputClass}
              {...register('vaccination_status')}
            />
          </div>

          <div>
            <label  htmlFor="health_card_verified" className={styles.labelClass}>Health Card Verified</label>
            <input
              type="checkbox"
              id="health_card_verified"
              name="health_card_verified"
              className="mt-1 block"
              {...register('health_card_verified')}
            />
          </div>

          <div>
            <label  htmlFor="date_of_birth" className={styles.labelClass}>Date of Birth</label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              className={styles.inputClass}
              {...register('date_of_birth')}
            />
          </div>

          <div>
            <input type="hidden" id="basic_information" name="basic_information" readOnly required defaultValue={id} className={styles.inputClass}
              {...register('basic_information')} />
          </div>

          <div>
            <label  htmlFor="location" className={styles.labelClass}>Location</label>
            <input type="text" id="location" name="location" readOnly required defaultValue={location} className={styles.inputClass}
              {...register('location')} />
          </div>

          <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
            Submit
          </button>
        </>)}
    </FormWrapper>
  )
}
export default ChildInfoForm