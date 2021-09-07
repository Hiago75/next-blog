import { GetServerSideProps } from 'next';
import { destroyCookie } from 'nookies';
import { useContext } from 'react';
import { DashboardContainer } from '../../../components';
import { PanelHomePage } from '../../../containers';
import { AuthContext } from '../../../contexts/AuthContext';

export default function AdminHome() {
  const { user } = useContext(AuthContext);

  return (
    <DashboardContainer>
      <PanelHomePage user={user} />
    </DashboardContainer>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { refresh_token, isAuthenticated } = ctx.req.cookies;

//   if (!refresh_token) {
//     isAuthenticated ? destroyCookie(ctx, 'isAuthenticated') : '';
//     return {
//       redirect: {
//         destination: '/admin',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };