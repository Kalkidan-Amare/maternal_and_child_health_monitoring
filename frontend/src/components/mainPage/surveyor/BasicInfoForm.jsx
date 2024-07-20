import { useForm } from "react-hook-form";
import FormWrapper from "./ui/FormWrapper";
import { useMutation } from "react-query";
import { postData } from "../../hooks/useDjango";
import { useState } from "react";

const BasicInfoForm = () => {
  const [error, setError] = useState(null);
  const mutation = useMutation(
    (newComplaint) => postData("basicinfos/basic_information/", newComplaint),
    {
      onSuccess: (data) => {
        console.log("Form submission successful", data);
        
      },
      onError: (error) => {
        console.error("Form submission failed", error);
        setError(error);
        
      },
    }
  );

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setError(null); 
    const modifiedData = {
      ...data,
      basic_information: {
        country: data.country,
        region: data.region,
        zone: data.zone,
        woreda: data.woreda,
        kebele: data.kebele,
        nearest_health_facility: data.nearest_health_facility,
        house_number: data.house_number,
        head_of_household_name: data.head_of_household_name,
        head_of_household_phone_number: data.head_of_household_phone_number,
        location: data.location,
        serveyor: 1,
      },
    };
    mutation.mutate(modifiedData);
    console.log("form submitted", modifiedData);
  };

  return (
    <FormWrapper title="Basic Information">
      {(location, styles) => (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          {error && (
            <div className="error-message">
              Submission failed: {error.message}
            </div>
          )}
        </form>
      )}
    </FormWrapper>
  );
};

export default BasicInfoForm;
