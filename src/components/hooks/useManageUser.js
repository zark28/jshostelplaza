import { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RespondsDataContext,
  SigninAccountContext,
  UserDataContext,

} from '../../components/contexts/SignupSigninContext';
import axios from 'axios';

const useManageUser = ({ endpoint = 'data', body }) => {
  const {responseData, setResponseData}= useContext(RespondsDataContext);
  const {setUserData}=useContext(UserDataContext)
  const {isLogedIn, setIsLogedIn } = useContext(SigninAccountContext);
  const navigate = useNavigate();

  const handleSignUpNavigation = useCallback(
    (userData, nextPage, endpoint) => {
      if (endpoint === 'tenant/register'){
      if (userData.tenant._id) {
        nextPage('next');
      }else{
        console.log(userData);
      }
      return;
        }    },
    []
  );
  const handleSignInNavigation = useCallback(
    ( userData ,endpoint) => {
      console.log(userData);
     
      if (endpoint === 'auth/login') {
        
        if (userData.token) {
          console.log(userData.user);
          localStorage.setItem("token",userData.token)
          localStorage.setItem("user",JSON.stringify(userData.user))
          setIsLogedIn({...isLogedIn,admin:true});
          navigate('dashboard');
        }     

        if(!userData.user._id){
          alert(userData.message)
        }
        return;
      }
    },
    [ setIsLogedIn, isLogedIn, navigate]
  );

// signup and login
  const postRequest = useCallback(
    (nextpage) => {
      axios
        .post(`https://api-jshostel.onrender.com/${endpoint}`, body)
        .then((res) => {
          alert(res.statusText)
          return res.data;
        })
        .then((data) => {
          if (endpoint === 'tenant/login' || endpoint === 'auth/login'){

          setUserData(data)
        }
          // if (endpoint === 'tenant/login' || endpoint === 'auth/login') {/////////
          
            handleSignInNavigation(data, endpoint);
          // }
          // if (endpoint === 'tenant/register') {
            handleSignUpNavigation(data, nextpage, endpoint);
          // }
         
        })
        .catch((err) => {  
         
          console.error(err)}
          );
    },
    [endpoint, body, setUserData, handleSignInNavigation, handleSignUpNavigation]
  );

// Get all data from api
  const getResources = useCallback(() => {
    axios
      .get(`https://api-jshostel.onrender.com/${endpoint}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        // console.log(data);
          setResponseData({tenants:data.tenants,users:data.users,data:data});
      })
      .catch((err) => {  
        console.error(err)}
        );
  }, [endpoint, setResponseData]);

  // upadate information
  const updateResources = useCallback(()=>{
    axios
      .patch(`https://api-jshostel.onrender.com/${endpoint}`, { ...body })
      .then((res) => {
          //  console.log(res);
          alert(res.statusText)
      })
      
    
      .catch((err) => console.error(err));

  },[body, endpoint])

  // delete data
  const removeResource=useCallback(()=>{
    axios
    .delete(`https://api-jshostel.onrender.com/${endpoint}`)
    .then((res)=> {
       alert(res.statusText)
       return res})
    .catch((err) => console.error(err));
  },[endpoint])

  return {
    postRequest,
    getResources,
    removeResource,
    updateResources,
    responseData,
    setResponseData,
  };
};

export default useManageUser;
