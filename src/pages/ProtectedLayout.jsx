import { useGetAuthUserQuery } from '@/services/rootApi';
import { Navigate, Outlet } from 'react-router-dom';

//  Sử dụng ProtectedLayout để bảo vệ các route không cho người dùng truy cập nếu chưa đăng nhập
// Nếu người dùng chưa đăng nhập thì sẽ chuyển hướng về trang login
const ProtectedLayout = () => {
  // RTK sẽ tự động caching lại query có cùng endpoint và param truyền vào => không gọi dữ liêu từ server nữa mà lấy từ redux store để tái sử dụng
  const response = useGetAuthUserQuery();
  console.log({ response: response });

  /**
   * response.isLoading : nó chỉ set thành "true" ở lần query đầu tiền
   * response.refetch : không muốn sử dụng dữ liệu đã được caching trươc đó mà muốn lấy lại từ server thì dùng refetch()
   * response.isFetching : set thành "true" ở lần query đầu tiên và khi được refetch
   * response.isSuccess : nó sẽ set true khi fetch thành công, nếu thất bại hoặc chưa fetch thì là false
   * response.error : lỗi của request
   * response.data : data trả về sau khi fetch xong
   *
   */
  if (response.isFetching) {
    return <p>Loading...</p>;
  }

  if (response.error) {
    return <Navigate to="/login" />;
  }

  if (!response.data?.data?.id) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
