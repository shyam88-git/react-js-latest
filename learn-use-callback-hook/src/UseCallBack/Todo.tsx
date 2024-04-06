interface PropsI {
  todo: string[];
  addTodo: () => void;
}

const todo = ({ todo, addTodo }: PropsI) => {
  return (
    <>
      <h2>My Todo</h2>
      {todo.map((t, index) => {
        return <p key={index}>{t + index}</p>;
      })}

      <button onClick={addTodo}>add Todo</button>
    </>
  );
};

export default todo;
