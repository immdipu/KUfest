import { axiosInstance } from "@/lib/utils";
import axios from "axios";

const userApis = {
  signUp: async (data: any) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_USER_URL}/user/signup`,
      data
    );
    return res.data;
  },
  GetAllCities: async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_USER_URL}/api/cities`
    );
    return res.data;
  },
};
