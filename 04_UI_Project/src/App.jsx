import React from 'react'
import Section1 from './Components/SECTION1/Section1'
import Section2 from './Components/SECTION2/Section2'

const App = () => {
  const cardData = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60",
      intro: "Helping startups identify and understand their ideal customer segments through market research.",
      tag: "Market Research",
      color: "#3B82F6" // Blue
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60",
      intro: "Designing modern digital banking experiences that improve customer engagement and trust.",
      tag: "Digital Banking",
      color: "#10B981" // Emerald
    },
    {
      img: "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=1000&auto=format&fit=crop&q=60",
      intro: "Using customer insights and analytics to create personalized marketing strategies for growth.",
      tag: "Customer Insights",
      color: "#A855F7" // Purple
    },
    {
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&auto=format&fit=crop&q=60",
      intro: "Collaborating with cross-functional teams to develop innovative business solutions.",
      tag: "Team Collaboration",
      color: "#F97316" // Orange
    },
    {
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&auto=format&fit=crop&q=60",
      intro: "Analyzing market trends to help businesses make informed strategic decisions.",
      tag: "Business Strategy",
      color: "#F43F5E" // Rose
    },
    {
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&auto=format&fit=crop&q=60",
      intro: "Building scalable digital products that enhance customer experiences worldwide.",
      tag: "Product Development",
      color: "#06B6D4" // Cyan
    }
  ];
  return (
    <div>
      <Section1 cardData={cardData} />
      <Section2 />
    </div>
  )
}

export default App
