import { useForm } from "react-hook-form";
import FormWrapper from "./ui/FormWrapper";
import { useMutation } from "react-query";
import { postData } from "../../hooks/useDjango";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BasicInfoForm = () => {

  return (
    <FormWrapper
      title="Basic Information"
      redirect='surveyor/basic-info-submitted/'
      action='basicinfos/basic_information/'>
      {(location, register, styles) => (
        <>
          <div>
            <label htmlFor="country" className={styles.labelClass}>
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              className={styles.inputClass}
              {...register("country")}
            />
          </div>

          <div>
            <label htmlFor="region" className={styles.labelClass}>
              Region
            </label>
            <input
              type="text"
              id="region"
              name="region"
              required
              className={styles.inputClass}
              {...register("region")}
            />
          </div>

          <div>
            <label htmlFor="zone" className={styles.labelClass}>
              Zone
            </label>
            <input
              type="text"
              id="zone"
              name="zone"
              required
              className={styles.inputClass}
              {...register("zone")}
            />
          </div>

          <div>
            <label htmlFor="woreda" className={styles.labelClass}>
              Woreda
            </label>
            <input
              type="text"
              id="woreda"
              name="woreda"
              required
              className={styles.inputClass}
              {...register("woreda")}
            />
          </div>

          <div>
            <label htmlFor="kebele" className={styles.labelClass}>
              Kebele
            </label>
            <input
              type="text"
              id="kebele"
              name="kebele"
              required
              className={styles.inputClass}
              {...register("kebele")}
            />
          </div>

          <div>
            <label
              htmlFor="nearest_health_facility"
              className={styles.labelClass}
            >
              Nearest Health Facility
            </label>
            <input
              type="text"
              id="nearest_health_facility"
              name="nearest_health_facility"
              required
              className={styles.inputClass}
              {...register("nearest_health_facility")}
            />
          </div>

          <div>
            <label htmlFor="house_number" className={styles.labelClass}>
              House Number
            </label>
            <input
              type="text"
              id="house_number"
              name="house_number"
              required
              className={styles.inputClass}
              {...register("house_number")}
            />
          </div>

          <div>
            <label
              htmlFor="head_of_household_name"
              className={styles.labelClass}
            >
              Head of Household Name
            </label>
            <input
              type="text"
              id="head_of_household_name"
              name="head_of_household_name"
              required
              className={styles.inputClass}
              {...register("head_of_household_name")}
            />
          </div>

          <div>
            <label
              htmlFor="head_of_household_phone_number"
              className={styles.labelClass}
            >
              Head of Household Phone Number
            </label>
            <input
              type="tel"
              id="head_of_household_phone_number"
              name="head_of_household_phone_number"
              required
              className={styles.inputClass}
              {...register("head_of_household_phone_number")}
            />
          </div>
          <div>
            <label htmlFor="location" className={styles.labelClass}>
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              readOnly
              required
              defaultValue={location}
              className={styles.inputClass}
              {...register("location")}
            />
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className={styles.submitClass}
            />
          </div>
        </>
      )}
    </FormWrapper>
  );
};

export default BasicInfoForm;
