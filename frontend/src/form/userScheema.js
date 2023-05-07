import * as yup from "yup";

export const userScheema = yup.object().shape({
  name: yup.string().required(),
  dateOfBirthOrAge: yup.number().required(),
  sex: yup.string().required(),
});

export const mobileScheema = yup.object().shape({
  mobile: yup.string().matches(/^[6-9]\d{8}$/, "Invalid mobile number"),
});
export const emergencyScheema = yup.object().shape({
  mobile: yup.string().matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
});

export const adharScheema = yup.object().shape({
  govtId: yup.string().matches(/^[0-9]{11}$/, "Invalid Aadhar number"),
});

export const panScheema = yup.object().shape({
  govtId: yup
    .string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN number"),
});
