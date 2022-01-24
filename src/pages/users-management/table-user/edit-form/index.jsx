import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import styles from './index.module.scss';
import { FormItem } from 'components/form-item';
import { useForm } from 'react-hook-form';

export const EditForm = ({ visible, onOk, onCancel, formData, onAddField, onRemoveField }) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const [error, setError] = useState('');
  const handleChangeState = () => {
    setError('error!!!');
  };

  const handleAddField = () => {};

  const handleRemoveField = (index) => {};

  useEffect(() => {
    setValue('form', formData);
  }, [formData]);


  const handleOnOk = () => {
    // onOk();
    handleSubmit(submit);
    clearErrors('form');
    setError('');
  };

  const submit = (data) => {
    onOk();
    console.log('aaaa');
    console.log('data: ', data);
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
          <div>
            <input
              type='text'
              {...register('form.userName', {
                validate: {
                  positive: (v) => v.trim().length > 0,
                },
              })}
            />
            {errors?.form?.userName?.type === 'positive' && (
              <span>must be input!</span>
            )}
          </div>
        </FormItem>
        <FormItem label='Password :' className={styles.form__item}>
          <div>
            <input
              type='text'
              {...register('form.password', {
                pattern: /[^A-Za-z0-9]/g,
                minLength: 8,
              })}
            />
            {errors?.form?.password?.type === 'pattern' && (
              <span>don't be input special character</span>
            )}
            {errors?.form?.password?.type === 'minLength' && (
              <span>must be input min 8 character</span>
            )}
          </div>
        </FormItem>
        {formData.items.map((item, index) => (
          <FormItem
            key={index}
            label={index === 0 ? 'Items :' : ''}
            className={styles.form__item}
          >
            <div>
              <input type='text' {...register(`form.items.${index}.id`)} />
            </div>
            <div>
              <input type='text' {...register(`form.items.${index}.name`)} />
            </div>
            <span onClick={() => onRemoveField(index)}>-</span>
          </FormItem>
        ))}
        <span onClick={onAddField}>+</span>
        <input type='submit' />
      </form>
      {error}
      <Button onClick={handleChangeState}>set state</Button>
    </Modal>
  );
};
