import axios from "../config/axiosConfig";


export const getUserDetails = async (id) => {
  try {
    const result = await axios.get(`/user/${id}`)
    console.log('user --->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getUserDetails service -> ', error)
  }
}
