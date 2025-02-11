import { useState } from "react";

const handleOnChange = (e, f, setf) => {
    setf({
        ...f,
        [e.target.name]: e.target.value
    });
};

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);
    return {
        form,
        setForm,
        handleOnChange: (e) => handleOnChange(e, form, setForm)
    }
}

export default useForm;