import { useForm } from "react-hook-form";
import FormWrapper from "./ui/FormWrapper";
import { useMutation } from "react-query";
import { postData } from "../../hooks/useDjango";
import { useState } from "react";

const Postnatal = () => {
    const [error, setError] = useState(null);
    const mutation = useMutation(
        (newComplaint) => postData('mothers/postnatal_follow_up/', newComplaint),
        {
            onSuccess: (data) => {
                console.log('Form submission successful', data);
                // Add any action you want to perform on success here
            },
            onError: (error) => {
                console.error('Form submission failed', error);
                setError(error);
                // Add any action you want to perform on failure here
            },
        }
    );

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setError(null); // Reset error state before new submission
        const modifiedData = {
            ...data,
            mother_information: 1,
            surveyor: 1,
        };
        mutation.mutate(modifiedData);
        console.log('form submitted', modifiedData);
    };

    return (
        <FormWrapper title="Postnatal Follow up Form">
            {(location, styles) => (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="blood_pressure_systolic" className={styles.labelClass}>Blood Pressure Systolic</label>
                        <input type="number" id="blood_pressure_systolic" name="blood_pressure_systolic" required className={styles.inputClass}
                            {...register('blood_pressure_systolic')} />
                    </div>

                    <div>
                        <label htmlFor="blood_pressure_diastolic" className={styles.labelClass}>Blood Pressure Diastolic</label>
                        <input type="number" id="blood_pressure_diastolic" name="blood_pressure_diastolic" required className={styles.inputClass}
                            {...register('blood_pressure_diastolic')} />
                    </div>

                    <div>
                        <label htmlFor="weight" className={styles.labelClass}>Weight</label>
                        <input type="number" id="weight" name="weight" step="0.1" required className={styles.inputClass}
                            {...register('weight')} />
                    </div>
                    <div>
                        <label htmlFor="muac" className={styles.labelClass}>MUAC (cm)</label>
                        <input type="number" id="muac" name="muac" step="0.1" required className={styles.inputClass}
                            {...register('muac')} />
                    </div>

                    <div>
                        <label htmlFor="blood_loss" className={styles.labelClass}>Blood Loss</label>
                        <input type="checkbox" id="blood_loss" name="blood_loss" className={styles.inputClass}
                            {...register('blood_loss')} />
                    </div>

                    <div>
                        <label htmlFor="infections" className={styles.labelClass}>Infections</label>
                        <input type="checkbox" id="infections" name="infections" className={styles.inputClass}
                            {...register('infections')} />
                    </div>

                    <div>
                        <label htmlFor="breastfeeding_issues" className={styles.labelClass}>Breastfeeding Issues</label>
                        <input type="checkbox" id="breastfeeding_issues" name="breastfeeding_issues" className={styles.inputClass}
                            {...register('breastfeeding_issues')} />
                    </div>

                    <div>
                        <label htmlFor="location" className={styles.labelClass}>Location</label>
                        <input type="text" id="location" name="location" readOnly required defaultValue={location} className={styles.inputClass}
                            {...register('location')} />
                    </div>

                    <div>
                        <input type="submit" value="Submit" className={styles.submitClass} />
                    </div>

                    {error && <div className="error-message">Submission failed: {error.message}</div>}
                </form>
            )}
        </FormWrapper>
    );
};

export default Postnatal;
