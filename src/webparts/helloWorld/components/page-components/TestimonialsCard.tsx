import { useState } from 'react';

// Styles
import { BsStar, BsStarFill, BsTwitter } from 'react-icons/bs';
import styles from '../../styles/Components.module.scss';

// Props
import {TestimonialsCardProps} from '../Props/TestimonialsCardProps';

// Helpers
import {SPHelpers} from '../../../classes/Helpers';

export default function TestimonialsCard({img ,fullName = 'Full Name' , jobTitle = 'Job Title' ,  
    twitterHandle = 'Twitter Handle', text='Text' , ratingStars } : TestimonialsCardProps) : JSX.Element {
   
    const helperInstance = new SPHelpers();
    const imagePath = helperInstance.GetImageFullPathByName(img);
    const [rating, setRating] = useState(ratingStars || 0);
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
                    <BsTwitter size={'1.5rem'}/>
                    {twitterHandle}
                </div>
            </div>
        </div>
        <div className={`${styles.cardBody}`}>
            <p className={`${styles.cardText}`}>{text}</p>
        </div>
        <div className={`${styles.cardFooter} ${styles.dFlex}`} style={{cursor:'pointer'}}>
            {[...Array(5)].map((start,index) => {
                const ratingValue = index + 1;
                return(
                    <label key={index} 
                        htmlFor='rating' 
                        onClick={() => setRating(ratingValue)}
                        style={{cursor: 'pointer', color:'gold' , fontSize:'1.5rem'}}>
                        <input type='radio' value={ratingValue} style={{display:'none'}}/>
                            { ratingValue <= rating ? (<BsStarFill className='mr-1'/>) : (<BsStar className='mr-1'/>)}
                    </label>
                )
            })}
        </div>
    </div>
  );
}
