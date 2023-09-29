export interface UserForm {
  fullName?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  contactNumber?: number | undefined;
  address?: string | undefined;
  dateOfBirth?: string | undefined;
  gender?: string | undefined;
  language?: string | undefined;
  country?: string | undefined;
  state?: string | undefined;
  city?: string | undefined;
  pinCode?: number | undefined;
  termsAndConditions?: boolean | undefined;
  profilePicture?: string | undefined;
  experience?: string | undefined;
  paymentMode?:
    | {
        method?: string | undefined;
      }
    | undefined;
}
