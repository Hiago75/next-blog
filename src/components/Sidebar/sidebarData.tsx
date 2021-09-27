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
    path: '/admin/dashboard',
    outlineIcon: <AiOutlineHome />,
    filledIcon: <AiFillHome />,
  },
  {
    title: 'Meu perfil',
    path: '/admin/dashboard/profile',
    outlineIcon: <RiUserLine />,
    filledIcon: <RiUserFill />,
  },
  {
    title: 'Posts',
    path: '/admin/dashboard/posts',
    outlineIcon: <AiOutlineFileAdd />,
    filledIcon: <AiFillFileAdd />,
    subNav: [
      {
        title: 'Página inicial',
        path: '/admin/dashboard/posts',
      },
      {
        title: 'Editar post',
        path: '/admin/dashboard/posts/edit',
      },
      {
        title: 'Criar post',
        path: 'admin/dashboard/posts/create',
      },
    ],
  },
  {
    title: 'Categorias',
    path: '/admin/dashboard/categories',
    outlineIcon: <AiOutlineUnorderedList />,
    filledIcon: <AiOutlineOrderedList />,
  },
];
