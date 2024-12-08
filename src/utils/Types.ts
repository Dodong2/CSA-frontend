//Job Post para user
export interface JobPostRequest {
  business_name: string
  descriptions: string
  work_schedule: string
  skills_required: string
  experience: string
  employment_type: string
  work_positions: string
  company_email: string
  contact_number: string
  locations: string
  collar: string
}

export interface JobPost extends JobPostRequest {
  id: string;
  user_id: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
  business_permit_path: string;
  valid_id_path: string;
}

export interface JobListsTypes {
  id: string
  business_name: string
  descriptions: string
  work_schedule: string
  skills_required: string
  experience: string
  employment_type: string
  work_positions: string
  company_email: string
  contact_number: string
  locations: string
  collar: string
  status: string
  created_at: string
}



//Update Data Props sa UpdateDetails.tsx
export interface UpdateFormData {
  user_id: string
  id: string
  business_name: string
  descriptions: string
  work_schedule: string
  skills_required: string
  experience: string
  employment_type: string
  work_positions: string
  company_email: string
  contact_number: string
  locations: string
  collar: string
  status: 'pending' | 'approved' | 'rejected';
  created_at: string
  updated_at: string
}

//Update Data Props sa UpdateDetails.tsx
export interface UpdateDetailsProps {
  id: string
}

//para sa charts
export interface CollarData {
  collar: string;
  count: number;
}

// Type for the API response
export interface ApiResponse {
  success: boolean;
  collars: CollarData[];
}

// Type for the chart data state
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[]
    borderWidth: number
  }[];
}