export interface UserForm {
  fullName: string;
  email: string;
  password: string;
  contactNumber: number;
  address: string;
  dateOfBirth: string;
  gender: string;
  language: string;
  country: string;
  state: string;
  city: string;
  pinCode: number;
  termsAndConditions: boolean;
  profilePicture: string;
  experience: string;
  paymentMode: {
    method: string;
  };
}
