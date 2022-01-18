import React, { useEffect } from 'react';
import { Header } from 'components/header/index';
import styles from './index.module.scss';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

interface IFormInput {
  formData: {
    oldPass: string;
    newPass: string;
    confirmNewPass: string;
  };
}

export const InforPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>();
  let formData = {
    oldPass: 'aaa',
    newPass: 'bbb',
    confirmNewPass: 'bbb',
  };

  useEffect(() => {
    setValue('formData', formData);
  }, []);

  const onChange = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <>
      <Header title='Changge Password' />
      <div className={clsx(styles.form__container, 'div__content')}>
        <form
          className={clsx(styles.form__container)}
          onChange={handleSubmit(onChange)}
        >
          <div className={styles.form__item}>
            <label>現在のパスワード</label>
            <input
              type='text'
              {...register('formData.oldPass', {
                validate: {
                  positive: (v) => parseInt(v) > 0,
                },
              })}
            />
            {errors?.formData?.oldPass?.type === 'positive' && (
              <p>This field is required</p>
            )}
          </div>
          <div className={styles.form__item}>
            <label>新しいパスワード</label>
            <input type='text' {...register('formData.newPass')} />
          </div>
          <div className={styles.form__item}>
            <label>新しいパスワード（確認）</label>
            <input type='text' {...register('formData.confirmNewPass')} />
          </div>
        </form>
      </div>
    </>
  );
};
