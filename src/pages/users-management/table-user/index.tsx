import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchListUser, getListUser } from 'redux/user-slice';
import { EditForm } from './edit-form';

interface IProps {
  visibleCreate: boolean;
}

export const TableUser: React.FC<IProps> = ({ visibleCreate }) => {
  const dispatch = useAppDispatch();
  const dataFetch = useAppSelector(getListUser);
  const [detailVisible, setDetailVisible] = useState<boolean>(false);
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
  const handleMore = () => {
    setDetailVisible(true);
  };
  const handleEdit = () => {
    setVisibleEdit(true);
  };
  const handleOkEdit = () => {
    setVisibleEdit(false);
  };
  const handleOk = () => {
    setDetailVisible(false);
  };
  useEffect(() => {
    dispatch(fetchListUser());
  }, []);

  const columns = [
    {
      title: 'UserName',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size='middle'>
          <Button type='link' onClick={handleMore}>
            More
          </Button>
          <Button type='link' onClick={handleEdit}>
            Delete
          </Button>
          <Button type='link' onClick={handleEdit}>
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  const data: any[] = [];
  dataFetch?.pagedResult?.items.map((item: { _id: any }) =>
    data.push({ ...item, key: item._id })
  );

  return (
    <>
      <Table
        onChange={(e) => {
          console.log(e);
        }}
        columns={columns}
        dataSource={data}
        scroll={{ y: 240 }}
      />
      <Modal
        title='Detail Infor'
        visible={detailVisible}
        onOk={handleOk}
        onCancel={handleOk}
        maskClosable={false}
      >
        asdasdasd
      </Modal>
      <EditForm
        formData={{ userName: 'nam', password: 'nam123123' }}
        visible={visibleEdit}
        onOk={handleOkEdit}
        onCancel={handleOkEdit}
      />
    </>
  );
};
