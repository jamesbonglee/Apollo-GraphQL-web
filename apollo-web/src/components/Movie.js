import React from "react";
import { Link } from "react-router-dom";

// HOme.js에서 movie 컴포넌트로 id를 map메서드 사용하여값을 넘겨주었음
// 리액트에선 a태그를 사용하지않음 그래서 LINK사용
export default ({ id }) => (
   <div>
      <Link to={`/${id}`}>{id}</Link>
   </div>
);
