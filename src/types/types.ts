export interface SideBarProps {
  collapsed: boolean;
  selectedKey: string;
  onSelect?: (newKey: string) => void;
}

export interface ContentBodyProps {
  collapsed: boolean;
  onCollapse?: (newKey: boolean) => void;
}

export interface CardInfoProps {
  showFullNumber: boolean;
  cardDetails: any;
}

export interface MyCardsProps {
  cardDetails: any;
}

export interface CardDetails {
  id?: number;
  cardNumber: string;
  maskedNumber: string;
  unmaskedNumber: string;
  cardHolderName: string;
  validDate: string;
  CVV: string;
}
