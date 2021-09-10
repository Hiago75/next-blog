import { GetServerSideProps } from 'next';
import { destroyCookie } from 'nookies';
import { useContext } from 'react';
import { DashboardContainer } from '../../../components';
import { PanelCategories } from '../../../containers';

export default function AdminCategories() {
  return (
    <DashboardContainer>
      <PanelCategories />
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