export interface SideBarProps {
  collapsed: boolean;
  selectedKey: string;
  onSelect?: (newKey: string) => void;
}

export interface ContentBodyProps {
  collapsed: boolean;
  onCollapse?: (newKey: boolean) => void;
}
