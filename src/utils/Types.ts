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
}

export type JobPostUpdate = Partial<JobPost> & { id: number };

//Update Data Props sa UpdateDetails.tsx
export interface UpdateDetailsProps {
id: string
}