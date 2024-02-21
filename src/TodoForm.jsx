import React from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { toDoState } from './atoms';

export default function TodoForm() {
  const { register, handleSubmit, setValue } = useForm();
  const [toDos, setTodos] = useRecoilState(toDoState);
  const onSubmit = (toDo) => {
    setTodos((prev) => [
      { text: toDo, id: Date.now(), category: 'TO_DO' },
      ...prev,
    ]);
    console.log(toDos);
    setValue('toDo', '');
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('toDo')}
          placeholder='오늘의 할 일을 입력해주세요'
        />
        <button type='submit'>등록하기</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li>{toDo.text}</li>
        ))}
      </ul>
    </>
  );
}
