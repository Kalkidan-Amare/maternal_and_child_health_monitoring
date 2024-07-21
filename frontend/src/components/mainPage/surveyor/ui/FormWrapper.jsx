import { useMutation } from 'react-query';
import useGeolocation from '../hooks/useGeolocation';
import * as styles from '../ui/repeatedClass'
import { postData } from '../../../hooks/useDjango';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const FormWrapper = (props) => {
    const { location, error } = useGeolocation();
    const navigate=useNavigate()

    const mutation = useMutation((newComplaint) => postData(props.action, newComplaint), {
        onSuccess: (data) => {
            console.log('done')
            const id=props.id?props.id:data.data.id
            navigate(`/${props.redirect}${id}`)
        },
    });

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        mutation.mutate({ ...data, surveyor: 1 })
    }
    return (
        <>
            {error && <h1>Location error: {error}</h1>}
            {!error && location.lat === null && <h1>Loading location...</h1>}
            {!error && location.lat !== null && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                            <h1 className="text-2xl font-bold mb-6 text-center text-emerald-700">{props.title}</h1>
                            {props.children(JSON.stringify(location), register, styles)}
                        </div>
                    </div>
                </form>
            )}
        </>
    )
}
export default FormWrapper
// <div>
//     <label  htmlFor={htmlfor} className={styles.labelClass}>Visit Date</label>
//     <input type={type} id={id} name={id} required={required} className={styles.inputClass} />
// </div>
