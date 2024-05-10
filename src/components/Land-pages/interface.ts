export interface PageProps {
  title: string;
  skip?: () => void;
  onNext: () => void;
  onBack: () => void;
  SvgImage: React.ReactElement;
  desc: string;
  currentPage?: number;
  changed?: boolean;
}
