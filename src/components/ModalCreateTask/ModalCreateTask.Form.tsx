import React, { useEffect } from 'react';
import { Button, Cascader, Form, Input, Row } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ROUTES } from 'utils/const/routes';
import { useNavigate } from 'react-router-dom';
import { getTeammatesByBoardId } from 'utils/API/get-teammates-by-board-id';
import { createTask } from 'utils/API/create-task';
import { getTasks } from 'utils/API/get-tasks-by-board-id';
import { addBoardId } from 'app/reducers/boardSlice';

type Values = {
  teammates: string[][];
  taskTitle: string;
  description: string;
};

type PropsCreateBoardForm = {
  titleForm: string;
  objField: string;
  boardId: string;
  columnId: string;
  onCancel: () => void;
};

type Option = {
  value: string | number;
  label: string;
  children?: Option[];
};

export const AddModalFormBoard = (props: PropsCreateBoardForm) => {
  const [form] = Form.useForm();
  const { login } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useNavigate();

  useEffect(() => {
    dispatch(getTeammatesByBoardId(props.boardId));
  }, [dispatch, props.boardId]);

  const { teammates, isLoading } = useAppSelector((state) => state.board);
  const usersTeamFilter = teammates.map((item) => {
    return { label: item, value: item };
  });

  const options: Option[] = usersTeamFilter;

  const onFinish = async (values: Values) => {
    form.resetFields();
    if (props.objField === 'taskTitle') {
      dispatch(
        createTask({
          title: values[props.objField],
          order: 1,
          description: values.description ? values.description : ' ',
          userId: login,
          users: values.teammates ? values.teammates.flat() : [],
          boardId: props.boardId,
          columnId: props.columnId,
        })
      );
      // dispatch(addBoardId(props.boardId));
      // await dispatch(getTasks(props.boardId));
      props.onCancel();
      router(`${ROUTES.YOUR_BOARDS}/${props.boardId}`);
    }
  };

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
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
          <Form.Item label="Choose teammates" name="teammates">
            <Cascader options={options} multiple />
          </Form.Item>
          <Row justify="center">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Row>
        </Form>
      )}
    </>
  );
};
