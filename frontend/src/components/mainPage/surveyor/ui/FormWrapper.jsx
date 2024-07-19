import useGeolocation from '../hooks/useGeolocation';
import * as styles from '../ui/repeatedClass'
const FormWrapper = (props) => {
    const { location, error } = useGeolocation();

    if (error) {
        return <h1>Location error: {error}</h1>;
    }
    if (location.lat === null || location.lon === null) {
        return <h1>Loading location...</h1>;
    }

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-emerald-700">{props.title}</h1>
                {props.children(JSON.stringify(location), styles)}
            </div>
        </div>
    )
}
export default FormWrapper
// <div>
//     <label htmlFor={htmlfor} className={styles.labelClass}>Visit Date</label>
//     <input type={type} id={id} name={id} required={required} className={styles.inputClass} />
// </div>