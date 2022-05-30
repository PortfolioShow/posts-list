import UsersList from "./components/UsersList/UsersList";
import ProfileContainer from "./components/Profile/ProfileContainer";
import PostsContainer from "./components/Posts/PostsContainer";
import CommentsContainer from "./components/Comments/CommentsContainer";
import { Route, Routes } from "react-router-dom";
import style from "./app.module.scss";

function App() {
  return (
    <div className={style.App}>
      <header className={style.header}>
        <h1 className={style.header__text}>Blog</h1>
      </header>
      <Routes>
        <Route path={"/posts-list/profile/:id"} element={<ProfileContainer />} />
        <Route path={"/posts-list/profile/:id/posts/"} element={<PostsContainer />} />
        <Route path={"/posts-list/profile/:id/posts/:postId/"} element={<CommentsContainer />} />
        <Route path="/posts-list" element={<UsersList />} />
      </Routes>
    </div>
  );
}

export default App;
