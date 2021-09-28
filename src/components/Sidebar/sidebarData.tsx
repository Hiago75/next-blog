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
  },
  {
    title: 'Meu perfil',
    path: '/cboard/profile',
    outlineIcon: <RiUserLine />,
    filledIcon: <RiUserFill />,
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
      },
      {
        title: 'Editar post',
        path: '/cboard/posts/edit',
      },
      {
        title: 'Criar post',
        path: '/cboard/posts/new',
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
