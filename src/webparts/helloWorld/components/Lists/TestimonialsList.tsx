import {useState , useEffect} from "react";

 // Data
import testimonialsData from "../../../db/testimonials";

// Component
import TestimonialsCard from "../page-components/TestimonialsCard";

export default function TestimonialsList() : JSX.Element {

    const [testimonials, setTestimonials ] = useState(() => 
    { 
      // console.log(testimonials);
      const storedData = localStorage.getItem("testimonialsData");
      return storedData ? JSON.parse(storedData) : []; 
    }
  );
    
    useEffect(() =>{
      setTestimonials(testimonialsData);
      localStorage.setItem("testimonialsData", JSON.stringify(testimonialsData));
    } , [testimonialsData])

  return (
    <>
    { testimonials && testimonialsData.map((item) => (
        <TestimonialsCard key={item.id} 
                          img={item.img} 
                          fullName={item.fullName} 
                          jobTitle={item.jobTitle} 
                          twitterHandle={item.twitterHandle}
                          text={item.text} />
        ))
    }
    </>
  )
}
