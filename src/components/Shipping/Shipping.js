import React, {useEffect, useRef} from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input  defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="phone number" defaultValue="" {...register("phone",{ required: true })} />
                {errors.phone && <span className="error">This field is required</span>}
                <input placeholder="City" defaultValue="Chittagong" {...register("city",{ required: true })} />
                {errors.city && <span className="error">This field is required</span>}
                <select {...register("area")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                {errors.area && <span className="error">This field is required</span>}

                <textarea  placeholder="Address" defaultValue="" {...register("address",{ required: true })} />
                {errors.address && <span className="error">This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;