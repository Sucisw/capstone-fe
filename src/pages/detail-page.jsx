import { useLocation, useParams } from "react-router-dom";
// import DetailDonasi from "../components/home/posts/detail-donasi";
import DetailBlog from "../components/home/posts/detail-blog";
import DetailPost from "../components/home/posts/detail-post";
const DetailPage = () => {
  const location = useLocation();
  // console.log(location.pathname.includes("blog"));
  const params = useParams();

  const userId = JSON.parse(localStorage.getItem("auth_user"))?.id;

  // =========================== render blog JSX ===========================
  if (location.pathname.includes("blog")) {
    return <DetailBlog userId={userId} postId={params.id} />;
  }

  // =========================== render donasi JSX ===========================
  if (location.pathname.includes("timeline")) {
    // return <div>awfwfw</div>
    return <DetailPost userId={userId} postId={params.id} />;
  }
};

export default DetailPage;
