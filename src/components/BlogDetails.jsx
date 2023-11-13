import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blogs, isPending, error } = useFetch('https://todo-backend-v4re.onrender.com/api/get/' + id + '/');
  const [loading, setloading] = useState(false);
  const history = useHistory();
  if (!blogs) {
    return null;
  }
  const deleteBlog = () => {
    setloading(true);
    axios.delete('https://nha-todo-list.herokuapp.com/api/delete/' + id + '/')
      .then(() => {
        setloading(false);
        history.push('/');
      })
  }
  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <h2>{blogs[0].title}</h2>
          <p>{blogs[0].description}</p>
          {!loading && <button onClick={deleteBlog}>Delete</button>}
          {loading && <button disabled>Deleting...</button>}
        </article>
      )}
    </div>
  )
}

export default BlogDetails
