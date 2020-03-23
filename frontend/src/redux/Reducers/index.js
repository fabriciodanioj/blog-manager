import { combineReducers } from "redux";

import ArticleSelectedList from "./ArticleSelectedList";
import ArticleToView from "./ArticleToView";
import CategoryOptions from "./CategoryOptions";

export default combineReducers({
  ArticleSelectedList,
  ArticleToView,
  CategoryOptions
});
