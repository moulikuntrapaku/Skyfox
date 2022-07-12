import apiService from "../../../helpers/apiService";

export default {
  fetch: async (username) => {
    let userDetails = JSON.parse(localStorage.getItem("user"));
    const response = await apiService.get(`profile?username=${userDetails}`);
    return response.data;
  },
};