import React from 'react'
import Card from './Componets/Card'
import { User } from 'lucide-react'

const App = () => {

  const company = [
    "Amazon",
    "Google",
    "Dribbble",
    "Figma",
    "Airbnb",
    "Apple"
  ];

  const logo = [
    "https://cdn.iconscout.com/icon/free/png-256/free-amazon-icon-download-in-svg-png-gif-file-formats--logo-brand-world-logos-vol-1-pack-icons-282427.png",
    "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    "https://cdn-icons-png.flaticon.com/512/2111/2111502.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    "https://cdn-icons-png.flaticon.com/512/2111/2111320.png",
    "https://cdn-icons-png.flaticon.com/512/0/747.png"
  ];

  const role = [
    "Senior UI/UX Designer",
    "Graphic Designer",
    "Senior Motion Designer",
    "UX Designer",
    "Junior UI/UX Designer",
    "Graphic Designer"
  ];

  const posted = [
    "5 days ago",
    "30 days ago",
    "18 days ago",
    "5 days ago",
    "5 days ago",
    "5 days ago"
  ];

  const tag1 = [
    "Part-Time",
    "Part-Time",
    "Contract",
    "Full-Time",
    "Contract",
    "Full-Time"
  ];

  const tag2 = [
    "Senior Level",
    "Flexible Schedule",
    "Remote",
    "In Office",
    "Remote",
    "Flexible Schedule"
  ];

  const salary = [
    "$120/hr",
    "$150k-$220k",
    "$85/hr",
    "$200k-$250k",
    "$100/hr",
    "$85k-$120k"
  ];

  const location = [
    "Mumbai, India",
    "Kochi, India",
    "Chennai, India",
    "Bangalore, India",
    "Delhi, India",
    "Kerala, India"
  ];

  const saved = [
    false,
    true,
    false,
    true,
    false,
    true
  ];

  const applyButton = [
    "Apply now",
    "Apply now",
    "Apply now",
    "Apply now",
    "Apply now",
    "Apply now"
  ];

  return (
    <div className='parent'>


      {
        company.map((element, index) => (
          <Card
            company={company[index]} logo={logo[index]} role={role[index]} posted={posted[index]} tag1={tag1[index]} tag2={tag2[index]} salary={salary[index]} location={location[index]} saved={saved[index]} applyButton={applyButton[index]}
          />
        ))
      }

    </div>
  )
}

export default App
