import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { title, description };
    setIsPending(true);
    axios.post('https://nha-todo-list.herokuapp.com/api/create/', todo)
      .then(() => {
        setIsPending(false);
        history.push('/');
      })
  }
  return (
    <div className='create'>
      <h2>Add New List</h2>
      <form method='post' onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
          name="title"
        />
        <label>Description:</label>
        <textarea
          type="text"
          required
          value={description}
          onChange={e => setDescription(e.target.value)}
          name="description"
        />
        {!isPending && <button>Add Todo</button>}
        {isPending && <button disabled>Adding...</button>}

      </form>
    </div>
  )
}

export default Create