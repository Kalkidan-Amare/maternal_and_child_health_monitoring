import { useParams } from "react-router-dom"


import FormWrapper from "./ui/FormWrapper"
import { useForm } from "react-hook-form"

const InfantForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log('form submitted', data)
  }

  const params = useParams()
  console.log(params)
  return (
    <FormWrapper title='Infant Child Health Form'>
      {(location, styles) => (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="checkup-date" className={styles.labelClass}>Checkup Date</label>
            <input type="date" id="checkup-date" name="checkup-date" required className={styles.inputClass} {...register('checkup_date')} />
          </div>

          <div>
            <label htmlFor="weight" className={styles.labelClass}>Weight (kg)</label>
            <input type="number" id="weight" name="weight" step="0.1" required className={styles.inputClass} {...register('weight')} />
          </div>

          <div>
            <label htmlFor="height" className={styles.labelClass}>Height (cm)</label>
            <input type="number" id="height" name="height" step="0.1" required className={styles.inputClass} {...register('height')} />
          </div>

          <div>
            <label htmlFor="head-circumference" className={styles.labelClass}>Head Circumference (cm)</label>
            <input type="number" id="head-circumference" name="head-circumference" step="0.1" required className={styles.inputClass} {...register('head_circumference')} />
          </div>

          <div>
            <label htmlFor="developmental-milestone" className={styles.labelClass}>Developmental Milestone</label>
            <textarea id="developmental-milestone" name="developmental-milestone" rows="4" cols="50" required className={styles.inputClass} {...register('developmental_milestones')} />
          </div>

          <div>
            <label htmlFor="immunization" className={styles.labelClass}>Immunization</label>
            <textarea id="immunization" name="immunization" rows="4" cols="50" required className={styles.inputClass} {...register('immunizations')} />
          </div>

          <div>
            <label htmlFor="nutrition" className={styles.labelClass}>Nutrition</label>
            <textarea id="nutrition" name="nutrition" rows="4" cols="50" required className={styles.inputClass} {...register('nutrition')} />
          </div>

          <div>
            <label htmlFor="child" className={styles.labelClass}>Child's Name</label>
            <input defaultValue={params.name} readOnly type="text" id="child" name="child" required className={styles.inputClass} {...register('child')} />
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
export default InfantForm