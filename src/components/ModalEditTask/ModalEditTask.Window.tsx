import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './ModalEditTask.scss';
import { AddModalEditTaskForm } from './ModalEditTask.Form';

type PropsModal = {
  titleTextButton: string;
  titleTextModal: string;
  titleForm: string;
  objField: string;
  boardId: string;
  columnId: string;
  taskId: string;
  description: string;
  usersTeammates: string[];
};

export const AddModalEditTask = (props: PropsModal) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className="task-edit-button" onClick={showModal}>
        {props.titleTextButton}
      </Button>
      <Modal
        destroyOnClose={true}
        title={props.titleTextModal}
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        footer={null}
      >
        <AddModalEditTaskForm
          titleForm={props.titleForm}
          objField={props.objField}
          boardId={props.boardId}
          columnId={props.columnId}
          taskId={props.taskId}
          title={props.titleTextButton}
          description={props.description}
          usersTeammates={props.usersTeammates}
          onCancel={hideModal}
        />
      </Modal>
    </>
  );
};
