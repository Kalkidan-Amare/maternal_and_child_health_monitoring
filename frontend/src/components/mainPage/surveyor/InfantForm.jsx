import FormWrapper from "./ui/FormWrapper";

import {  useParams } from "react-router-dom";

const InfantForm = () => {

    const {id, name} = useParams();

    return (
        <FormWrapper title="Child Follow up Form" action='children/child_follow_up/' redirect='surveyor/'>
            {(location, register, styles) => (
                < >
                    <div>
                        <label  htmlFor="weight" className={styles.labelClass}>Weight (kg)</label>
                        <input type="number" id="weight" name="weight" step="0.1" required className={styles.inputClass}
                            {...register('weight')} />
                    </div>

                    <div>
                        <label  htmlFor="muac" className={styles.labelClass}>MUAC (cm)</label>
                        <input type="number" id="muac" name="muac" step="0.1" required className={styles.inputClass}
                            {...register('muac')} />
                    </div>

                    <div>
                        <label  htmlFor="vitamins" className={styles.labelClass}>Vitamins</label>
                        <input type="checkbox" id="vitamins" name="vitamins" className={styles.checkinputClass}
                            {...register('vitamins')} />
                    </div>

                    <div>
                        <label  htmlFor="deworming" className={styles.labelClass}>Deworming</label>
                        <input type="checkbox" id="deworming" name="deworming" className={styles.checkinputClass}
                            {...register('deworming')} />
                    </div>

                    <div>
                        <label  htmlFor="polio" className={styles.labelClass}>Polio</label>
                        <input type="checkbox" id="polio" name="polio" className={styles.checkinputClass}
                            {...register('polio')} />
                    </div>

                    <div>
                        <label  htmlFor="pcv" className={styles.labelClass}>PCV</label>
                        <input type="checkbox" id="pcv" name="pcv" className={styles.checkinputClass}
                            {...register('pcv')} />
                    </div>

                    <div>
                        <label  htmlFor="rotavirus" className={styles.labelClass}>Rotavirus</label>
                        <input type="checkbox" id="rotavirus" name="rotavirus" className={styles.checkinputClass}
                            {...register('rotavirus')} />
                    </div>

                    <div>
                        <label  htmlFor="diphtheria" className={styles.labelClass}>Diphtheria</label>
                        <input type="checkbox" id="diphtheria" name="diphtheria" className={styles.checkinputClass}
                            {...register('diphtheria')} />
                    </div>

                    <div>
                        <label  htmlFor="tetanus" className={styles.labelClass}>Tetanus</label>
                        <input type="checkbox" id="tetanus" name="tetanus" className={styles.checkinputClass}
                            {...register('tetanus')} />
                    </div>

                    <div>
                        <label  htmlFor="measles" className={styles.labelClass}>Measles</label>
                        <input type="checkbox" id="measles" name="measles" className={styles.checkinputClass}
                            {...register('measles')} />
                    </div>

                    <div>
                        <label  htmlFor="trachoma_screening" className={styles.labelClass}>Trachoma Screening</label>
                        <input type="checkbox" id="trachoma_screening" name="trachoma_screening" className={styles.checkinputClass}
                            {...register('trachoma_screening')} />
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

export default InfantForm;
