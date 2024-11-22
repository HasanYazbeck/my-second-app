// import { useState } from "react";

// Styles
import { BsStar, BsStarFill, BsTwitter } from "react-icons/bs";
import styles from "../../styles/Components.module.scss";

// Props
import {TestimonialsCardProps} from '../Props/TestimonialsCardProps';

// Helpers
import {SPHelpers} from '../../../classes/Helpers';

export default function TestimonialsCard({img ,fullName = "Full Name" , jobTitle = "Job Title" ,  twitterHandle = "Twitter Handle", text="Text" , ratingStars } : TestimonialsCardProps) : JSX.Element {
    //  const [rating,setRating] = useState(ratingStars);
    debugger;
    const helperInstance = new SPHelpers();
    const imagePath = helperInstance.GetImageFullPathByName(img);

  return (
    <div className={`${styles.card} ${styles.testimonial} ${styles.inView}`}>
        <div className={`${styles.cardHeader}`}>
            <div className={`${styles.cardImg} ${imagePath}`}>
                {/* <img src={imagePath && imagePath}/> */}
            </div>
            <div className={`${styles.cardBody}`}>
                <h3 className={`${styles.cardTitle}`}>{fullName}</h3>
                <p className={`${styles.cardText}`}>{jobTitle}</p>
                <div>
                    <BsTwitter size={"1.5rem"}/>
                    {twitterHandle}
                </div>
            </div>
        </div>
        <div className={`${styles.cardBody}`}>
            <p className={`${styles.cardText}`}>{text}</p>
        </div>
        <div className={`${styles.cardFooter} ${styles.dFlex}`} style={{cursor:"pointer"}}>
            <BsStarFill className={`${styles.mr1}`}/>
            <BsStarFill className={`${styles.mr1}`}/>
            <BsStar className={`${styles.mr1}`}/>
            <BsStar className={`${styles.mr1}`}/>
            <BsStar className={`${styles.mr1}`}/>
        </div>
    </div>
  );
}
