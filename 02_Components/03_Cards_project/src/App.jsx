import React from 'react'
import Card from './Componets/Card'
import { User } from 'lucide-react'

const App = () => {

  const jobs = [
    {
      company: "Amazon",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-amazon-icon-download-in-svg-png-gif-file-formats--logo-brand-world-logos-vol-1-pack-icons-282427.png",
      role: "Senior UI/UX Designer",
      posted: "5 days ago",
      tag1: "Part-Time",
      tag2: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
      saved: false,
      applyButton: "Apply now"
    },
    {
      company: "Google",
      logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
      role: "Graphic Designer",
      posted: "30 days ago",
      tag1: "Part-Time",
      tag2: "Flexible Schedule",
      salary: "$150k-$220k",
      location: "Kochi, India",
      saved: true,
      applyButton: "Apply now"
    },
    {
      company: "Dribbble",
      logo: "https://cdn-icons-png.flaticon.com/512/2111/2111502.png",
      role: "Senior Motion Designer",
      posted: "18 days ago",
      tag1: "Contract",
      tag2: "Remote",
      salary: "$85/hr",
      location: "Chennai, India",
      saved: false,
      applyButton: "Apply now"
    },
    {
      company: "Figma",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      role: "UX Designer",
      posted: "5 days ago",
      tag1: "Full-Time",
      tag2: "In Office",
      salary: "$200k-$250k",
      location: "Bangalore, India",
      saved: true,
      applyButton: "Apply now"
    },
    {
      company: "Airbnb",
      logo: "https://cdn-icons-png.flaticon.com/512/2111/2111320.png",
      role: "Junior UI/UX Designer",
      posted: "5 days ago",
      tag1: "Contract",
      tag2: "Remote",
      salary: "$100/hr",
      location: "Delhi, India",
      saved: false,
      applyButton: "Apply now"
    },
    {
      company: "Apple",
      logo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
      role: "Graphic Designer",
      posted: "5 days ago",
      tag1: "Full-Time",
      tag2: "Flexible Schedule",
      salary: "$85k-$120k",
      location: "Kerala, India",
      saved: true,
      applyButton: "Apply now"
    }
  ];

  return (
    <div className="parent">
      {jobs.map((job, index) => (
        <Card
          key={index}
          company={job.company}
          logo={job.logo}
          role={job.role}
          posted={job.posted}
          tag1={job.tag1}
          tag2={job.tag2}
          salary={job.salary}
          location={job.location}
          saved={job.saved}
          applyButton={job.applyButton}
        />
      ))}
    </div>
  );
}

export default App
