import { useEffect, useState } from 'react';

/** This is extracted out into a custom hook so as not to complicate App.jsx
 *  with implementation logic.
 */

export const useGetPostsFromApi = () => {
  /**
   * For a more complex app, we would need more complex state management.
   * This will suffice for now. I find redux(even with the redux-toolkit,
   * improves it a lot) to be overly verbose.
   *
   * We could implement our own functionality here with the useReducer hook,
   * or for an app with lots of different states, I'm quite fond of xstate, a
   * finite state machine/statechart library.
   */
  const [posts, setPosts] = useState([]);
  const [wasError, setWasError] = useState(false);

  useEffect(() => {
    /**
     * The fetch API isn't the nicest to use.
     * I tend towards using Axios as it's battle tested and can easily be
     * polyfilled to support Internet Explorer.
     */
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch(() => {
        setWasError(true);
      });
  }, []); // empty array here means useEffect will only call this when the component mounts

  return [posts, wasError];
};
