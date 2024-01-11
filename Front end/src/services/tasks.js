import axios from "../config/axiosConfig";


export const getTasksByUser = async (id) => {
  try {
    const result = await axios.get(`/usertasks/user/${id}`)
    console.log('Tasks completed by user--->', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getTasksByUser service -> ', error)
  }
}

