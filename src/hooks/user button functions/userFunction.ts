//pang open ng gmail at makapagsend resume JobPosts.tsx
export const handleSendResume = (email: string) => {
    if(!email) {
       alert("No Email address available")
       return
    }
   
    const subject = "Job Application: Resume Submission";
    const body = "Dear Hiring Manager,\n\nPlease find my resume attached for your consideration.\n\nBest regards,";
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
       email
     )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
   
     window.open(mailtoLink, '_blank')
   }
   
   //pang open ng map para sa location for JobPosts.tsx
    export const handleOpenMap = (location: string) => {
       if(!location) {
         alert("Location information is not available.")
         return
       }
       const url = `https://www.google.com/maps?q=${encodeURIComponent(location)}`
       window.open(url, '_blank')
     }