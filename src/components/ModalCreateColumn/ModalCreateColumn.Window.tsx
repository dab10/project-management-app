import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { AddModalFormColumn } from './ModalCreateColumn.Form';

type PropsModal = {
  typeButton: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
  titleTextButton: string;
  titleTextModal: string;
  titleForm: string;
  objField: string;
  boardId: string;
};

export const AddModalCreateColumn = (props: PropsModal) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type={props.typeButton} icon={<PlusOutlined />} onClick={showModal}>
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
        <AddModalFormColumn
          titleForm={props.titleForm}
          objField={props.objField}
          onCancel={hideModal}
          boardId={props.boardId}
        />
      </Modal>
    </>
  );
};
