import { useState } from "react";

export const useForm = (fields = {}) => {
  const [formValues, setFormValues] = useState(fields);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
  };

  return {
    formValues,
    setFormValues,
    handleInputChange,
  };
};
