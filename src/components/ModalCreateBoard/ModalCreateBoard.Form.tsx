import React, { useState } from 'react';
import { Button, Form, Input, Row } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { createBoard } from 'utils/API/create-board';
import { ROUTES } from 'utils/const/routes';
import { useNavigate } from 'react-router-dom';

type Values = {
  boardTitle: string;
  description: string;
};

type PropsCreateBoardForm = {
  titleForm: string;
  objField: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onCancel: () => void;
};

export const AddModalFormBoard = (props: PropsCreateBoardForm) => {
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const { userId } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: Values) => {
    props.setLoading(true);
    setComponentDisabled(true);
    if (props.objField === 'boardTitle') {
      await dispatch(
        createBoard({
          title: JSON.stringify({ title: values[props.objField], description: values.description }),
          owner: userId,
          users: [],
        })
      );
      props.onCancel();
      form.resetFields();
      navigate(ROUTES.YOUR_BOARDS);
    }
  };

  return (
    <>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        disabled={componentDisabled}
      >
        <Form.Item
          label={props.titleForm}
          name={props.objField}
          rules={[
            {
              required: true,
              message: `Please input ${props.titleForm[0].toLowerCase()}${props.titleForm.slice(
                1
              )}!`,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input />
        </Form.Item>
        <Row justify="center">
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={props.loading}>
              Submit
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </>
  );
};
