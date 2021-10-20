const TodoTitle = ({ handleSearch }) => {
  return (
    <>
      <div className="todo_title d_flex_between">
        <div className="title">
          <h3>Todo List</h3>
        </div>
        <div className="search_box">
          <div className="search_input">
            <input type="text" placeholder="Search" onChange={handleSearch} />
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoTitle;
