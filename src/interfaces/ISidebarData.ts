interface subNav {
  title: string;
  path: string;
  exact?: boolean;
}

export interface ISidebarData {
  title: string;
  path: string;
  outlineIcon: React.ReactElement;
  filledIcon: React.ReactElement;
  subNav?: subNav[];
  exact?: boolean;
}
