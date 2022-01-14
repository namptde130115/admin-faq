export {};
// import React, { useState } from 'react';
// import { Table, Spin, Empty, Modal } from 'antd';
// import {
//   EyeInvisibleOutlined,
//   EyeTwoTone,
//   ExclamationCircleOutlined,
// } from '@ant-design/icons';
// import { useAppSelector, useAppDispatch } from 'redux/hooks';

// export const TableUser = () => {
//   const [isVisibleEdit, setIsVisibleEdit] = useState<boolean>(false);
//   const [editInfor, setEditInfor] = useState();
//   const [selectedRowKeys, setSelectedRowKeys] = useState<[]>([]);

//   const dispatch = useAppDispatch();

//   const { confirm } = Modal;

//   let locale = {
//     emptyText: (
//       <Empty
//         image={Empty.PRESENTED_IMAGE_SIMPLE}
//         description='データなし'
//       ></Empty>
//     ),
//   };

//   const handleTableChange = (pagination: any) => {
//     // dispatch(
//     //   getListAccount({
//     //     // page: pagination.current,
//     //     search: searchValue,
//     //     pageSize: 1000,
//     //   })
//     // );
//   };

//   const showConfirmDelete = (param: string, deleteId: number) => {
//     confirm({
//       icon: <ExclamationCircleOutlined />,
//       content: <span>ユーザーIDを削除してもよろしいでしょうか？</span>,
//       okText: 'はい',
//       cancelText: 'いいえ',
//       onOk() {
//         dispatch(deleteAccount(deleteId));
//         dispatch(checkCrawlData());
//       },
//       onCancel() {},
//     });
//   };

//   const showConfirmAsync = (param: string, asyncId: any) => {
//     confirm({
//       icon: <ExclamationCircleOutlined />,
//       content: <span>データを同期しますか？</span>,
//       okText: 'はい',
//       cancelText: 'いいえ',
//       onOk: async () => {
//         try {
//           const asyncResult = await dispatch(crawlData([asyncId]));
//           unwrapResult(asyncResult);
//         } catch (error) {
//           console.log(error.message);
//         }
//       },
//       onCancel() {},
//     });
//   };
//   const handleDelete = (id: { _id: number }) => {
//     showConfirmDelete('delete account', id._id);
//   };

//   const handleEdit = (value: { _id: any }) => {
//     const id = data.find((item: { _id: any }) => item._id === value._id);
//     setEditInfor({
//       _id: { value: id._id },
//       userName: { value: id.userName },
//       password: { value: id.password },
//       expiredDate: {
//         value: moment(id.expiredDate, 'YYYY/MM/DD'),
//       },
//       agents: { value: id.agents },
//     });
//     setIsVisibleEdit(true);
//   };

//   const handleOkEdit = () => {
//     setEditInfor(null);
//     setIsVisibleEdit(false);
//   };

//   const handleCancelEdit = () => {
//     setEditInfor(null);
//     setIsVisibleEdit(false);
//   };

//   const handleAync = (id: { _id: any }) => {
//     showConfirmAsync('async account', id._id);
//   };

//   const togglePassword = (id: any) => {
//     dispatch(handleTogglePassword(id));
//   };
//   const Action = ({ id }) => {
//     return (
//       <div className='action'>
//         <span className='action__link' onClick={() => handleEdit(id)}>
//           編集
//         </span>
//         <span className='action__link' onClick={() => handleAync(id)}>
//           同期
//         </span>
//         <span className='action__link' onClick={() => handleDelete(id)}>
//           削除
//         </span>
//       </div>
//     );
//   };

//   let columns = [
//     {
//       title: 'ユーザーID',
//       dataIndex: 'userName',
//       key: 'userName',
//     },
//     {
//       title: 'パスワード',
//       dataIndex: 'password',
//       key: 'password',
//       render: (
//         text: any,
//         record: {
//           isShowPassword: any;
//           password:
//             | boolean
//             | React.ReactChild
//             | React.ReactFragment
//             | React.ReactPortal
//             | null
//             | undefined;
//           _id: any;
//         }
//       ) => (
//         <div className='password__account'>
//           <span>
//             {!record.isShowPassword
//               ? `\u2022\u2022\u2022\u2022`
//               : record.password}
//           </span>
//           {!record.isShowPassword ? (
//             <EyeTwoTone onClick={() => togglePassword(record._id)} />
//           ) : (
//             <EyeInvisibleOutlined onClick={() => togglePassword(record._id)} />
//           )}
//         </div>
//       ),
//     },
//     {
//       title: '代理店',
//       dataIndex: 'agents',
//       key: 'agents',
//       render: (text: any, record: any) => (
//         <div>
//           {record.agents.map(
//             (
//               agent: { agentCode: any; agentName: undefined },
//               index: React.Key | null | undefined
//             ) => (
//               <p key={index} style={{ marginBottom: '5px' }}>{`${
//                 agent.agentCode
//               }${
//                 agent.agentName === undefined ? '' : ` - ${agent.agentName}`
//               }`}</p>
//             )
//           )}
//         </div>
//       ),
//     },
//     {
//       title: '有効期限',
//       dateIndex: 'expiredDate',
//       key: 'expiredDate',
//       render: (text: any, record: any) => (
//         <span>{new Date(record.expiredDate).toLocaleDateString('ja-JP')}</span>
//       ),
//     },
//     {
//       title: '同期日',
//       dateIndex: 'syncDate',
//       key: 'syncDate',
//       render: (text: any, record: any) => {
//         return (
//           <span>
//             {record.syncDate
//               ? new Date(parseInt(record.syncDate)).toLocaleString('ja-JP')
//               : null}
//           </span>
//         );
//       },
//     },
//     {
//       title: 'ステータス',
//       dateIndex: 'status',
//       key: 'status',
//       render: (text: any, record: any) => {
//         return record.syncDate ? (
//           <div style={{ wordBreak: 'break all' }}>
//             <p className={record.status === '成功' ? 'green' : 'red'}>
//               {record.syncDate ? record.status : null}
//             </p>
//           </div>
//         ) : null;
//       },
//     },
//     {
//       title: '',
//       dataIndex: 'action',
//       key: 'action',
//       render: (text: any, record: any) => <Action id={record} />,
//       width: '180px',
//     },
//   ];

//   return (
//     <>
//       <Table
//         // rowSelection={rowSelection}
//         loading={{
//           indicator: (
//             <Spin tip='ただいま同期処理中です。しばらくお待ちください。' />
//           ),
//           spinning: syncing,
//         }}
//         locale={locale}
//         columns={columns}
//         dataSource={data}
//         pagination={{ pageSize: 100 }}
//         onChange={handleTableChange}
//         scroll={{ y: 'calc(85vh - 210px)' }}
//       ></Table>
//       <FormEditAcount
//         title='ユーザーの編集'
//         editInfor={editInfor}
//         visible={isVisibleEdit}
//         onOk={handleOkEdit}
//         onCancel={handleCancelEdit}
//       />
//     </>
//   );
// };
