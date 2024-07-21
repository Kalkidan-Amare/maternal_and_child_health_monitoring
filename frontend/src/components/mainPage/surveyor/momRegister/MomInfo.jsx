import { useForm } from "react-hook-form";
import FormWrapper from "../ui/FormWrapper";
import { useMutation } from "react-query";
import { postData } from "../../../hooks/useDjango";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MomInfo = ({id}) => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const mutation = useMutation(
        (newComplaint) => postData('mothers/mother_information/', newComplaint),
        {
            onSuccess: (data) => {
                console.log('Form submission successful', data);
                navigate(`/surveyor/basic-info-submitted/${id}`)

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
            basic_information: id,
            surveyor: 1,
        };
        mutation.mutate(modifiedData);
        console.log('form submitted', modifiedData);
    };

    return (
        <FormWrapper title="Mother's Information Form">
            {(location, styles) => (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className={styles.labelClass}>Name</label>
                        <input type="text" id="name" name="name" required className={styles.inputClass}
                            {...register('name')} />
                    </div>

                    <div>
                        <label htmlFor="phone_number" className={styles.labelClass}>Phone Number</label>
                        <input type="tel" id="phone_number" name="phone_number" required className={styles.inputClass}
                            {...register('phone_number')} />
                    </div>

                    <div>
                        <label htmlFor="age" className={styles.labelClass}>Age</label>
                        <input type="number" id="age" name="age" required className={styles.inputClass}
                            {...register('age')} />
                    </div>

                    <div>
                        <label htmlFor="pregnant_or_lactating" className={styles.labelClass}>Pregnant or Lactating</label>
                        <select id="pregnant_or_lactating" name="pregnant_or_lactating" required className={styles.inputClass}
                            {...register('pregnant_or_lactating')}>
                            <option value="">Select...</option>
                            <option value="Pregnant">Pregnant</option>
                            <option value="Lactating">Lactating</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="antenatal_care_received_previously" className={styles.labelClass}>Antenatal Care Received Previously</label>
                        <input type="checkbox" id="antenatal_care_received_previously" name="antenatal_care_received_previously"
                            className={styles.checkinputClass} {...register('antenatal_care_received_previously')} />
                    </div>

                    <div>
                        <label htmlFor="details_of_previous_antenatal_care" className={styles.labelClass}>Details of Previous Antenatal Care</label>
                        <textarea id="details_of_previous_antenatal_care" name="details_of_previous_antenatal_care"
                            className={styles.inputClass} {...register('details_of_previous_antenatal_care')} />
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

export default MomInfo;
