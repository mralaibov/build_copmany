import React, {useState} from 'react';
import {StyledMainForm} from "./StyledMainForm";
import CustomInput from "../../../ui-components/customInput/CustomInput";

const MainForm = () => {

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const setFormItem = (item, value) => {
    setForm(curForm => ({...curForm, [item]: value}))
  }

  const submit = () => {
    setSubmitted(true)
  }

  const handleError = (key, str) => {
    if (submitted) {
      if (!str.length) return "Too short"
      if (key !== 'message' && str.length > 30) return "Too long"
    }
    return ""
  }

  return (
    <StyledMainForm onSubmit={() => submit()}>

      {Object.entries(form).map( ([key, value]) => {
        value && value[0]?.toUpperCase()
        return <CustomInput name={key} value={value} error={handleError(key, value)} key={key}
                     setValue={(e) => setFormItem(e.target.value, key)}/>
      })}

      <button type="submit">Submit</button>

    </StyledMainForm>
  );
};

export default MainForm;
