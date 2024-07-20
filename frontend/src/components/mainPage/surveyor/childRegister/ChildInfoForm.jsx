import { useForm } from "react-hook-form";
import FormWrapper from "../ui/FormWrapper";
import { useMutation } from "react-query";
import { postData } from "../../../hooks/useDjango";

const ChildInfoForm = () => {
  const mutation = useMutation(
    (newComplaint) => postData("children/child_information/", newComplaint),
    {
      onSuccess: () => {
        // Invalidate and refetch
        console.log("done");
      },
    }
  );

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const modifiedData = {
        ...data,
        sex: data.gender,
        surveyor: 1,
        vaccination_status: data.vaccination_status || false,
        health_card_verification: data.health_card_verification,
        basic_information: 1,
    };
    delete modifiedData.gender;
    mutation.mutate(modifiedData);
    console.log('form submitted', modifiedData);
};
  return (
    <FormWrapper title="Child Info Form">
      {(location, styles) => (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className={styles.labelClass}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={styles.inputClass}
              {...register("name")}
            />
          </div>

          <div>
            <label htmlFor="dob" className={styles.labelClass}>
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
              className={styles.inputClass}
              {...register("date_of_birth")}
            />
          </div>

          <div>
            <label htmlFor="age-in-months" className={styles.labelClass}>
              Age in Months
            </label>
            <input
              type="number"
              id="age-in-months"
              name="age_in_months"
              required
              className={styles.inputClass}
              {...register("age_in_months")}
            />
          </div>

          <div>
            <label htmlFor="gender" className={styles.labelClass}>
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              className={styles.inputClass}
              {...register("gender")}
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="health-card-verification"
              className={styles.labelClass}
            >
              Health Card Verification
            </label>
            <select
              id="health-card-verification"
              name="health_card_verification"
              required
              className={styles.inputClass}
              {...register("health_card_verification")}
            >
              <option value="">Select...</option>
              <option value="Verified">Verified</option>
              <option value="Not Verified">Not Verified</option>
            </select>
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
            <label htmlFor="vaccination-status" className={styles.labelClass}>
              Vaccination Status
            </label>
            <input
              type="checkbox"
              id="vaccination-status"
              name="vaccination_status"
              className={styles.inputClass}
              {...register("vaccination_status")}
            />
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className={styles.submitClass}
            />
          </div>
        </form>
      )}
    </FormWrapper>
  );
};
export default ChildInfoForm;
