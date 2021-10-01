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
    title: 'Usuários',
    path: '/cboard/profiles/me',
    outlineIcon: <RiUserLine />,
    filledIcon: <RiUserFill />,
    subNav: [
      {
        title: 'Meu perfil',
        path: '/cboard/profiles/me',
        exact: true,
      },
      {
        title: 'Registrar usuário',
        path: '/cboard/profiles/register',
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
    title: 'Categorias',
    path: '/cboard/categories',
    outlineIcon: <AiOutlineUnorderedList />,
    filledIcon: <AiOutlineOrderedList />,
  },
];
