import { useForm } from "react-hook-form";
import FormWrapper from "./ui/FormWrapper";
import { useMutation } from "react-query";
import { postData } from "../../hooks/useDjango";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Postnatal = () => {
    const {id, name} = useParams();

    return (
        <FormWrapper title="Postnatal Follow up Form" action='mothers/postnatal_follow_up/' redirect='/surveyor'>
            {(location, register, styles) => (
                <>
                    <div>
                        <label  htmlFor="blood_pressure_systolic" className={styles.labelClass}>Blood Pressure Systolic</label>
                        <input type="number" id="blood_pressure_systolic" name="blood_pressure_systolic" required className={styles.inputClass}
                            {...register('blood_pressure_systolic')} />
                    </div>

                    <div>
                        <label  htmlFor="blood_pressure_diastolic" className={styles.labelClass}>Blood Pressure Diastolic</label>
                        <input type="number" id="blood_pressure_diastolic" name="blood_pressure_diastolic" required className={styles.inputClass}
                            {...register('blood_pressure_diastolic')} />
                    </div>

                    <div>
                        <label  htmlFor="weight" className={styles.labelClass}>Weight</label>
                        <input type="number" id="weight" name="weight" step="0.1" required className={styles.inputClass}
                            {...register('weight')} />
                    </div>
                    <div>
                        <label  htmlFor="muac" className={styles.labelClass}>MUAC (cm)</label>
                        <input type="number" id="muac" name="muac" step="0.1" required className={styles.inputClass}
                            {...register('muac')} />
                    </div>

                    <div>
                        <label  htmlFor="blood_loss" className={styles.labelClass}>Blood Loss</label>
                        <input type="checkbox" id="blood_loss" name="blood_loss" className={styles.checkinputClass}
                            {...register('blood_loss')} />
                    </div>

                    <div>
                        <label  htmlFor="infections" className={styles.labelClass}>Infections</label>
                        <input type="checkbox" id="infections" name="infections" className={styles.checkinputClass}
                            {...register('infections')} />
                    </div>

                    <div>
                        <label  htmlFor="breastfeeding_issues" className={styles.labelClass}>Breastfeeding Issues</label>
                        <input type="checkbox" id="breastfeeding_issues" name="breastfeeding_issues" className={styles.checkinputClass}
                            {...register('breastfeeding_issues')} />
                    </div>

                    <div>
                        <label  htmlFor="location" className={styles.labelClass}>Location</label>
                        <input type="text" id="location" name="location" readOnly required defaultValue={location} className={styles.inputClass}
                            {...register('location')} />
                    </div>

                    <div>
                        <input type="submit" value="Submit" className={styles.submitClass} />
                    </div>

                </>
            )}
        </FormWrapper>
    );
};

export default Postnatal;
