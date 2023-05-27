import "../../App.scss";
import {PostType} from "../../App";

type PostListPageProps ={
    list: PostType[]
};

export const PostListPage = ({list}: PostListPageProps) => {
    return (
      <div>
        <h1>Lista postów</h1>
      </div>
    );
  };