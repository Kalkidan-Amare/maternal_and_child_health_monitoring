import { useForm } from "react-hook-form";
import FormWrapper from "./ui/FormWrapper";
import { useMutation } from "react-query";
import { postData } from "../../hooks/useDjango";
import { useState } from "react";

const Antenatal = () => {
    const [error, setError] = useState(null);
    const mutation = useMutation(
        (newComplaint) => postData('mothers/antenatal_follow_up/', newComplaint),
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
        <FormWrapper title="Antenatal Follow up Form">
            {(location, styles) => (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="antenatal_pills" className={styles.labelClass}>Antenatal Pills</label>
                        <input type="checkbox" id="antenatal_pills" name="antenatal_pills" className={styles.inputClass}
                            {...register('antenatal_pills')} />
                    </div>

                    <div>
                        <label htmlFor="tetanus_vaccinations" className={styles.labelClass}>Tetanus and Other Related Vaccinations</label>
                        <input type="checkbox" id="tetanus_vaccinations" name="tetanus_vaccinations" className={styles.inputClass}
                            {...register('tetanus_and_other_related_vaccinations')} />
                    </div>

                    <div>
                        <label htmlFor="iron_folic_acid" className={styles.labelClass}>Iron Folic Acid</label>
                        <input type="checkbox" id="iron_folic_acid" name="iron_folic_acid" className={styles.inputClass}
                            {...register('iron_folic_acid')} />
                    </div>

                    <div>
                        <label htmlFor="weight_gain" className={styles.labelClass}>Weight Gain</label>
                        <input type="checkbox" id="weight_gain" name="weight" className={styles.inputClass}
                            {...register('weight')} />
                    </div>

                    <div>
                        <label htmlFor="muac" className={styles.labelClass}>MUAC (cm)</label>
                        <input type="number" id="muac" name="muac" step="0.1" required className={styles.inputClass}
                            {...register('muac')} />
                    </div>

                    <div>
                        <label htmlFor="deworming" className={styles.labelClass}>Deworming</label>
                        <input type="checkbox" id="deworming" name="deworming" className={styles.inputClass}
                            {...register('deworming')} />
                    </div>

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
                        <label htmlFor="syphilis_screening" className={styles.labelClass}>Syphilis Screening</label>
                        <input type="checkbox" id="syphilis_screening" name="syphilis_screening" className={styles.inputClass}
                            {...register('syphilis_screening')} />
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

export default Antenatal;
