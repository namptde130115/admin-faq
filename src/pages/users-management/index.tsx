import React from 'react';
import { CreateForm } from 'pages/users-management/create-form/index';

interface Props {
  a?: string;
  b?: number;
}

export const UserPage: React.FC<Props> = ({ a, b }) => {
  return (
    <div>
      <CreateForm />
    </div>
  );
};
