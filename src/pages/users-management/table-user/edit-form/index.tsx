import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import styles from './index.module.scss';
import { FormItem } from 'components/form-item';
import { useForm } from 'react-hook-form';

interface IProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  formData: { userName: string; password: string };
}

interface IFormInput {
  formData: {
    userName: string;
    password: string;
  };
}

export const EditForm: React.FC<IProps> = ({
  visible,
  onOk,
  onCancel,
  formData,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onBlur' });

  const [error, setError] = useState<string>('');

  const handleChangeState = () => {
    setError('error!!!');
  };

  useEffect(() => {
    setValue('formData', formData);
  }, [formData]);

  const handleOnOk = () => {
    onOk();
    // handleSubmit(submit);
    console.log(formData);
    clearErrors('formData');
    setError('');
  };

  const submit = (data: any) => {
    console.log(formData);
  };

  return (
    <Modal
      title='Edit Form'
      visible={visible}
      onOk={handleOnOk}
      onCancel={onCancel}
    >
      {console.log('rerender')}
      <form onSubmit={handleSubmit(submit)}>
        <FormItem label='User Name :' className={styles.form__item}>
          <input
            type='text'
            {...register('formData.userName', {
              validate: {
                positive: (v) => v.trim().length > 0,
              },
            })}
          />
          {errors?.formData?.userName?.type === 'positive' && (
            <span>must be input!</span>
          )}
        </FormItem>
        <FormItem label='Password :' className={styles.form__item}>
          <input
            type='text'
            {...register('formData.password', {
              pattern: /[^A-Za-z0-9]/g,
              minLength: 8,
            })}
          />
          {errors?.formData?.password?.type === 'pattern' && (
            <span>don't be input special character</span>
          )}
          {errors?.formData?.password?.type === 'minLength' && (
            <span>must be input min 8 character</span>
          )}
        </FormItem>
      </form>
      {error}
      <Button onClick={handleChangeState}>set state</Button>
    </Modal>
  );
};
