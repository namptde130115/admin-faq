import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchListUser, getListUser } from 'redux/user-slice';

interface IProps {
  visibleCreate: boolean;
}

export const TableUser: React.FC<IProps> = ({ visibleCreate }) => {
  const dispatch = useAppDispatch();
  const dataFetch = useAppSelector(getListUser);
  const [detailVisible, setDetailVisible] = useState<boolean>(false);

  const handleMore = () => {
    setDetailVisible(true);
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
          <a>Delete</a>
          <a>Edit</a>
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
    </>
  );
};
