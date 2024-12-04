export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  postedAt: string;
  logo: string;
}

export interface JobFilters {
  search: string;
  type: string;
  sort?: string;
}

export interface SampleJob {
  company_name: string;
  company_description: string;
  company_size: string;
  company_url: string;
  company_logo_url: string;
  company_tags: string;
  job_title: string;
  job_url: string;
  job_type: string;
  salary_min: number | null;
  salary_max: number | null;
  equity_min: number | null;
  equity_max: number | null;
  locations: string;
  required_experience: number;
  posted_date: string;
  actively_hiring: boolean;
}
