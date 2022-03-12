export interface App {
  onSwitch: () => void;
}

export interface PortfolioModel {
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
    endDate?: {
      month?: string;
      year?: number;
    };
    mainTools: Array<string>;
    images: Array<string>;
  };
  text?: string;
}

export interface PortfolioImages {
  images: Array<string>;
}

export interface ToolsModel {
  description: string;
  languages: {
    pro: Array<string>;
    intermediate: Array<string>;
    beginner: Array<string>;
  };
  tools: Array<string>;
}

export interface MyInfoModel {
  name: string;
  surname: string;
  age: string;
  position: string;
  company: string;
  city: string;
  country: string;
}

export interface Props {
  currentTheme?: unknown;
}
