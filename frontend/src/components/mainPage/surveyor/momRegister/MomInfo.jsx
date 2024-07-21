import FormWrapper from "../ui/FormWrapper";

const MomInfo = ({id}) => {

    return (
        <FormWrapper 
        title="Mother's Information Form"
        redirect="surveyor/basic-info-submitted/"
        action='mothers/mother_information/'
        id={id} portal={true}
        >
            {(location, register, styles) => (
                <>
                    <div>
                        <label  htmlFor="name" className={styles.labelClass}>Name</label>
                        <input type="text" id="name" name="name" required className={styles.inputClass}
                            {...register('name')} />
                    </div>

                    <div>
                        <label  htmlFor="phone_number" className={styles.labelClass}>Phone Number</label>
                        <input type="tel" id="phone_number" name="phone_number" required className={styles.inputClass}
                            {...register('phone_number')} />
                    </div>

                    <div>
                        <label  htmlFor="age" className={styles.labelClass}>Age</label>
                        <input type="number" id="age" name="age" required className={styles.inputClass}
                            {...register('age')} />
                    </div>

                    <div>
                        <label  htmlFor="pregnant_or_lactating" className={styles.labelClass}>Pregnant or Lactating</label>
                        <select id="pregnant_or_lactating" name="pregnant_or_lactating" required className={styles.inputClass}
                            {...register('pregnant_or_lactating')}>
                            <option value="">Select...</option>
                            <option value="Pregnant">Pregnant</option>
                            <option value="Lactating">Lactating</option>
                        </select>
                    </div>

                    <div>
                        <label  htmlFor="antenatal_care_received_previously" className={styles.labelClass}>Antenatal Care Received Previously</label>
                        <input type="checkbox" id="antenatal_care_received_previously" name="antenatal_care_received_previously"
                            className={styles.checkinputClass} {...register('antenatal_care_received_previously')} />
                    </div>

                    <div>
                        <label  htmlFor="details_of_previous_antenatal_care" className={styles.labelClass}>Details of Previous Antenatal Care</label>
                        <textarea id="details_of_previous_antenatal_care" name="details_of_previous_antenatal_care"
                            className={styles.inputClass} {...register('details_of_previous_antenatal_care')} />
                    </div>

                    <div>
                        <label  htmlFor="location" className={styles.labelClass}>Location</label>
                        <input type="text" id="location" name="location" readOnly required defaultValue={location} className={styles.inputClass}
                            {...register('location')} />
                    </div>
                    <div>
                        <input type="hidden" id="basic_information" name="basic_information" readOnly  required defaultValue={id} className={styles.inputClass}
                            {...register('basic_information')} />
                    </div>

                    <div>
                        <input type="submit" value="Submit" className={styles.submitClass} />
                    </div>

                </>
            )}
        </FormWrapper>
    );
};

export default MomInfo;
