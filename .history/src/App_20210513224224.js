import React, {Fragment, useEffect, useState} from 'react'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Form, FormItem, Input, Password, Submit } from '@formily/antd'
import { Tabs, Card } from 'antd'
import * as ICONS from '@ant-design/icons'
import { VerifyCode } from './VerifyCode'
import 'antd/lib/tabs/style'
import 'antd/lib/button/style'
import EyesComponent from './component/eyesComponent'

const normalForm = createForm({
  validateFirst: true,
})

const phoneForm = createForm({
  validateFirst: true,
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    VerifyCode,
  },
  scope: {
    icon(name) {
      return React.createElement(ICONS[name])
    },
  },
})
// eslint-disable-next-line 
export default () => {
  const [time, setTime] = useState(true);
  // const [opcityTime, setOpcityTime] = useState()
  useEffect(() => {
    let timer = setTimeout(() => {
      setTime(false)
    }, 5000)
    return () => {
      timer = null
    }
  }, [])
  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setTime(false)
  //   }, 5000)
  //   return () => {
  //     timer = null
  //   }
  // }, [])
  return (
    <Fragment>
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: '#eee',
          padding: '40px 0',
        }}
      >
        <Card style={{ width: 400 }}>
          <Tabs style={{ overflow: 'visible', marginTop: -10 }}>
            <Tabs.TabPane key="1" tab="账密登陆">
              <Form
                form={normalForm}
                layout="vertical"
                size="large"
                onAutoSubmit={console.log}
              >
                <SchemaField>
                  <SchemaField.String
                    name="username"
                    title="用户名"
                    required
                    x-decorator="FormItem"
                    x-component="Input"
                    x-validator={{
                      required: true,
                    }}
                    x-component-props={{
                      prefix: "{{icon('UserOutlined')}}",
                    }}
                  />
                  <SchemaField.String
                    name="password"
                    title="密码"
                    required
                    x-decorator="FormItem"
                    x-component="Input"
                    x-component-props={{
                      prefix: "{{icon('LockOutlined')}}",
                    }}
                  />
                </SchemaField>
                <Submit block size="large">
                  登陆
                </Submit>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane key="2" tab="手机登陆">
              <Form
                form={phoneForm}
                layout="vertical"
                size="large"
                onAutoSubmit={console.log}
              >
                <SchemaField>
                  <SchemaField.String
                    name="phone"
                    title="手机号"
                    required
                    x-validator="phone"
                    x-decorator="FormItem"
                    x-component="Input"
                    x-component-props={{
                      prefix: "{{icon('PhoneOutlined')}}",
                    }}
                  />
                  <SchemaField.String
                    name="verifyCode"
                    title="验证码"
                    required
                    x-decorator="FormItem"
                    x-component="VerifyCode"
                    x-component-props={{
                      prefix: "{{icon('LockOutlined')}}",
                    }}
                    x-reactions={[
                      {
                        dependencies: ['.phone#value', '.phone#valid'],
                        fulfill: {
                          state: {
                            'component[1].readyPost': '{{$deps[0] && $deps[1]}}',
                            'component[1].phoneNumber': '{{$deps[0]}}',
                          },
                        },
                      },
                    ]}
                  />
                </SchemaField>
                <Submit block size="large">
                  登陆
                </Submit>
              </Form>
            </Tabs.TabPane>
          </Tabs>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <a href="#新用户注册">新用户注册</a>
            <a href="#忘记密码">忘记密码?</a>
          </div>
        </Card>
      </div> */}
      <div className={}>
        {time && <EyesComponent time={time}/>}
      </div>
    </Fragment>
  )
}