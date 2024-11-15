 import {useState} from "react";

 // Data
 import testimonialsData from "../../../db/testimonials";
import TestimonialsCard from "../page-components/TestimonialsCard";

export default function TestimonialsList() : JSX.Element {

    const [testimonials, {}] = useState(testimonialsData);
    console.log(testimonials);

  return (
    <>
    {testimonialsData.map((item) => (
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
