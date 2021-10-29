export interface subNav {
  head?: boolean;
  title: string;
  path: string;
  exact?: boolean;
  admin?: boolean;
}

export interface ISidebarData {
  title: string;
  path: string;
  outlineIcon: React.ReactElement;
  filledIcon: React.ReactElement;
  subNav?: subNav[];
  exact?: boolean;
}
