import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/common/Loader';

import { singIn } from 'redux/auth/authOperations';
import { getError, getLoading, getUserName } from 'redux/auth/authSelector';

import { LockOutlined, SettingFilled } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import s from './SingInForm.module.css'



const SingInForm = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName)
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isBtnDisabled = loading || !email || !password;
  const errMessage = "INVALID_INFO, TRY_AGAIN :(";
  const normalizeName = name && name[0].toUpperCase() + name.slice(1, name.length);

    useEffect(() => {
    if (!error) return;
    toast.error(errMessage)
  }, [error])


  useEffect(() => {
    if (!name) return;
    toast.success(`${normalizeName}, WELCOME 👋`)
  
  }, [name, normalizeName])

 

  const onFinish = ({ email, password }) =>
  { 
    const credentials = { email, password };
    dispatch(singIn(credentials));
  }
  
  
  return (
    <>
      {loading ? <Loader /> :
        <Form
          name="normal_login"
          className={s.loginForm}
          initialValues={{
            remember: true,
          }}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
        >
      
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
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input
              placeholder="Please input your E-mail!"
              prefix={<SettingFilled />} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className={s.siteFormItemIcon} />}
              type="password"
              placeholder="Please enter your password  ..."
            />
          </Form.Item>


          <Form.Item>
            <div className={s.btnWrap}>
              <Button
                type="primary"
                htmlType="submit"
                disabled={isBtnDisabled}
              >
                Log in
              </Button>
              <div
                className={s.textContainer}
              >
                <p>Or</p>
                <a
                  className={s.link}
                  href="/register">Register Now!</a>
              </div>
            </div>
          </Form.Item>
        </Form>
      }
    <ToastContainer theme ="colored"/>
      
    </>

  );
}

export default SingInForm