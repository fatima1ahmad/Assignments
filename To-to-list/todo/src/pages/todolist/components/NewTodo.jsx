import { useState } from "react";

function NewTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handledescriptionChange = (e) => {
    setdescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    const todo = {
      id: Date.now(),
      title,
      description,
    };

    props.onAddTodo(todo);
    setTitle("");
    setdescription("");
  };

  return (
    <div className="todo__new card">
      <h2>Add New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="form-input"
            placeholder=" title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handledescriptionChange}
            className="form-textarea"
            placeholder=" description"
          />
        </div>
        <button className="btn-primary" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodo;
