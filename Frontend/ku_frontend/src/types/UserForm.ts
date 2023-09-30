export interface language {
  item: string;
  value: string;
}

export interface UserForm {
  fullName?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  contactNumber?: number | undefined;
  address?: string | undefined;
  dateOfBirth?: string | undefined;
  gender?: string | undefined;
  language?: language[] | undefined;
  country?: string | undefined;
  tourType?: string | undefined;
  numberOfvisitors?: number | undefined;
  termsAndConditions?: boolean | undefined;
  profilePicture?: string | undefined;
  about?: string | undefined;
  // experience?: string | undefined;
  // paymentMode?:
  //   | {
  //       method?: string | undefined;
  //     }
  //   | undefined;
}

export interface DisableAisstanceHireProps {
  hireRate: number | undefined;
  DisablePersonAbout: string | undefined;
  disabiliites: {
    mobility: boolean;
    visual: boolean;
    hearing: boolean;
    cognitive: boolean;
    speech: boolean;
    autism: boolean;
    chronicpain: boolean;
  };
  otherDisability?: string | undefined;
}

export interface GuideForm {
  fullName?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  contactNumber?: number | undefined;
  address?: string | undefined;
  dateOfBirth?: string | undefined;
  gender?: string | undefined;
  language?: language[] | undefined;
  tourType?: string | undefined;
  termsAndConditions?: boolean | undefined;
  profilePicture?: string | undefined;
  about?: string | undefined;
  experience?: string | undefined;
  paymentType?: string | undefined;
  rate: number | undefined;
}
