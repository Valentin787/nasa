import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/common/Loader';

import { register } from '../../redux/auth/authOperations';
import { getError, getLoading, getUserName } from 'redux/auth/authSelector';

import 'antd/dist/antd.css';
import {
  SettingFilled,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './RegisterForm.module.css';


const RegisterForm = () => {
  const dispatch = useDispatch()
  const name = useSelector(getUserName)
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errMessage = "INVALID_INFO, TRY_AGAIN :(";
  const normalizeName = name && name[0].toUpperCase() + name.slice(1,name.length) ;


  useEffect(() => {
    if (!error) return;
    toast.error(errMessage)
  }, [error])


  useEffect(() => {
    if (!name) return;
    toast.success(`${normalizeName}, WELCOME 👋`)
  
  }, [name, normalizeName])
  
  
  const onFinish = ({ email, displayName, password }) => {

    const credentials = {
      displayName,
      email,
      password
    };

    dispatch(register(credentials));
 
    reset()
  };
 
  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
  }
 
   
  const isBtnDisabled = loading || !displayName || !email || !password;

  // const checkLang = lang[1].language;
  // const messageName = checkLang === "en" ? "Please input your username!" : "Введіть будь-ласка ваше ім'я ...";
  // const messageValidEmail = checkLang === "en" ? "The input is not valid E-mail!" : "Не забувайте за '@' :)";
  // const messageEmail = checkLang === "en" ? "Please input your E-mail!" : "Не забувайте ввести ваш E-mail :)";
  //  const messagePassword = checkLang === "en" ? "Please input your Password!" : "Не забувайте ввести ваш Пароль :)";
  
  return (
  <>
      {loading ?
        <Loader /> :
        <div
          className={s.loginForm}>
        <Form
          name="basic"
            
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}

          onFinish={onFinish}
          autoComplete="off"
        >
            <Form.Item
          
            label="User_Name"
            name="displayName"
            onChange={e => setDisplayName(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input 
            className={s.containerInput} 
            placeholder="Please enter your name  ..."
            prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            onChange={e => setEmail(e.target.value)}
            rules={[
              {
                type: 'email',
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
            className={s.containerInput} 
            placeholder="Please enter your e-mail with -> @  :)"
            prefix={<SettingFilled />}/> 
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password  
            className={s.containerInput} 
            placeholder="Please enter your password  ..."
            prefix={<LockOutlined />}
            
            />
          </Form.Item>
          
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            >
              <Button
              type="primary"
              htmlType="submit"
              disabled ={isBtnDisabled}>
              Register
            </Button >

          </Form.Item>
        </Form>
          <ToastContainer theme={"colored"}/>
        </div>
}
      </>


  );

}

export default RegisterForm