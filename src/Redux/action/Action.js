import axios from 'axios';
import {BASE_URL} from '../Baseurl';
import {LOGIN_USER, REGISTER_USER, GET_ALL, GET_UPDATE} from './types';
export const loginaction = data => {
  // console.log(data);
  return async dispatch => {
    const res = await axios.post(`${BASE_URL}/login.php`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Auth: 'c7e1249ffc03eb9ded908c236bd1996d',
      },
    });
    console.log('ressssssssssssssssssssssss', res);
    // console.log('erooorrrrrrrr',res.data.error)
    if (res.status) {
      dispatch({
        type: LOGIN_USER,
        userdata: res.data,
      });
      return res;
    } else {
      return res;
    }
  };
};

export const regaction = data => {
  console.log(data);

  return async dispatch => {
    const res = await axios.post(`${BASE_URL}api/register`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Auth: 'c7e1249ffc03eb9ded908c236bd1996d',
      },
    });

    console.log(res);
    if (res.data.status) {
      dispatch({
        type: REGISTER_USER,
        regdata: res.data.data,
      });
      return res;
    } else {
      return res;
    }
  };
};

export const getall = data => {
  console.log(data);

  return async dispatch => {
    const res = await axios.post(`${BASE_URL}/showQuestions.php`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Auth: 'c7e1249ffc03eb9ded908c236bd1996d',
      },
    });
    console.log('ressssssssssssssssssssssss', res);

    if (res.status) {
      console.log('mardataaaaa', res?.data?.question[0].answer);
      const answers = res?.data?.question[0].answer.map((item, index) => {
        return {
          ...item,
          check1: false,
          check2: false,
        };
      });
      dispatch({
        type: GET_ALL,
        getdata: res?.data?.question[0],
        getanswer: answers,
      });
      return res;
    } else {
      return res;
    }
  };
};

export const updateanswers = answer => {
  console.log(answer);

  return async dispatch => {
    try {
      dispatch({
        type: GET_UPDATE,
        getanswer: answer,
      });
    } catch {}
  };
};
