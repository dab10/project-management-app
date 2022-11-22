import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { AddModalFormBoard } from './ModalCreateBoard.Form';
import newBoard from '../../media/new-board.svg';

type PropsModal = {
  typeButton: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
  titleTextButton: string;
  titleTextModal: string;
  titleForm: string;
  objField: string;
};

export const AddModalCreateBoard = (props: PropsModal) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        <img className="icon" src={newBoard} alt="boards list" onClick={showModal} />
        <span className="menu-item-title" onClick={showModal}>
          {props.titleTextButton}
        </span>
      </>
      <Modal
        destroyOnClose={true}
        title={props.titleTextModal}
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        footer={null}
      >
        <AddModalFormBoard
          titleForm={props.titleForm}
          objField={props.objField}
          onCancel={hideModal}
        />
      </Modal>
    </>
  );
};
