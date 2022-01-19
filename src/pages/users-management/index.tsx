import React from 'react';
import { CreateForm } from 'pages/users-management/create-form/index';
import { TableUser } from 'pages/users-management/table-user';
import clsx from 'clsx';
import { Button } from 'antd';

export const UserPage: React.FC = () => {
  return (
    <div className={clsx('div__content')}>
      {console.log('aaaa')}
      <div>
        <Button>add</Button>
      </div>
      <TableUser />
    </div>
  );
};
