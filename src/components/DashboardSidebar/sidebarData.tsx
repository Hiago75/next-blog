import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineUnorderedList,
  AiOutlineOrderedList,
  AiOutlineFileAdd,
  AiFillFileAdd,
} from 'react-icons/ai';
import { RiUserLine, RiUserFill } from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Página inicial',
    path: '/cboard',
    outlineIcon: <AiOutlineHome />,
    filledIcon: <AiFillHome />,
    exact: true,
  },
  {
    title: 'Perfil',
    path: '/cboard/profiles',
    outlineIcon: <RiUserLine />,
    filledIcon: <RiUserFill />,
    subNav: [
      {
        head: true,
        title: 'Meu perfil',
        path: '/cboard/profiles',
        exact: true,
      },
      {
        title: 'Registrar usuário',
        path: '/cboard/profiles/register',
        admin: true,
      },
    ],
  },
  {
    title: 'Posts',
    path: '/cboard/posts',
    outlineIcon: <AiOutlineFileAdd />,
    filledIcon: <AiFillFileAdd />,
    subNav: [
      {
        title: 'Página inicial',
        path: '/cboard/posts',
        exact: true,
      },
      {
        title: 'Criar post',
        path: '/cboard/posts/new',
      },
      {
        title: 'Editar post',
        path: '/cboard/posts/edit',
      },
    ],
  },
  {
    title: 'Tags/categorias',
    path: '/cboard/categories',
    outlineIcon: <AiOutlineUnorderedList />,
    filledIcon: <AiOutlineOrderedList />,
  },
];
