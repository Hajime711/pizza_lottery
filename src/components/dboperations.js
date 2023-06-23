import axios from 'axios';

export const retrieveFromDB = async() => {
  try{
    const response = await axios.get('http://localhost:5000/json');
    const jsonobj = response.data[response.data.length-1].data;
    console.log('retrieving data:',jsonobj);
    if(jsonobj === undefined){
      return {};
    }
    return jsonobj;
  }catch(error){
    console.log(error);
  }
};
export const uploadToDB = async(jsonobj) => {
  try {
      console.log('posting:',jsonobj);
      const response = await axios.post('http://localhost:5000/json', jsonobj);
      console.log('data posted!!');
      return response;
  } catch (error) {
      console.error(error);
  }
};
