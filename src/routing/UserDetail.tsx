import { useLocation, useParams, useSearchParams } from "react-router";

const UserDetail = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return <p>User {params.id}</p>;
};

export default UserDetail;
