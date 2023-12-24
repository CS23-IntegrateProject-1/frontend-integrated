import {Axios} from "../../AxiosInstance";

const updateStatusToSuccess = async (
  ) => {
    try {
      const response = await Axios.post(
        `/feature10/updatePaymentStatusToSuccess`,
      );
      return response.data;
    } catch (error) {
      console.error("Error can't post:", error);
    }
  };

  export default updateStatusToSuccess;