import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <main>
      <p>ページが見つかりません</p>
      <Link to="/">Homeに戻る</Link>
    </main>
  );
};

export default Page404;
