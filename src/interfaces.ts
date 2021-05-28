export interface App {
  onSwitch: () => void;
}

export interface Portfolio {
  id: number;
  name: string;
  company: string;
  mainImage: string;
  url: string;
  slug: string;
  color: string;
  jobInfo: {
    role: string;
    type: string;
    language: string;
    startDate: {
      month: string;
      year: number;
    };
    endDate: {
      month: string;
      year: number;
    };
    mainTools: [string];
    images: [string];
  };
  text: string;
}

export interface PortfolioImages {
  images: Array<string>;
}

export interface Props {
  currentTheme?: unknown;
}
