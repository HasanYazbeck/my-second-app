
/* Installing Node.js packages in a production environment without an internet connection */ 
// https://m4rkux.medium.com/installing-node-js-packages-in-a-production-environment-without-internet-connection-7c4e08446c5d

import * as React from "react";

// Hooks
import {useState} from 'react';

// Types || Interfaces || Classes
import {TitleProps} from './Props/TitleProps';
import {AppProps} from "./AppProps";
import {CardProps} from "./Props/CardProps";

// Components
import TitleComponent from "./Title/TitleComponent";
import HeaderComponent from "./Header/HeaderComponent";
import ButtonComponent from "./Button/ButtonComponent";
import ModalComponent from "./Modal/ModalComponent";
import CategoriesCard from "./page-components/CategoriesCard";
import OfferCard from "./page-components/OfferCard";
// import TestimonialsCard from "./page-components/TestimonialsCard";
import TestimonialsList from "./Lists/TestimonialsList";

// Styles
import styles from "../styles/Components.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

// Icons
import {BsFillSendFill} from "react-icons/bs";
import {AiFillFileExcel, AiFillHtml5, AiFillPlayCircle, AiFillUnlock, AiOutlineJava} from "react-icons/ai";
import {DiCss3Full} from "react-icons/di";
import {PiFileSqlBold}  from "react-icons/pi";
import {FaMapMarkedAlt , FaFileDownload} from "react-icons/fa";
import * as siIcons from "react-icons/si";
 
// Examples
// import UseStateHookEx from "../TestingExamples/UseStateHookEx";
// import MyList from "../TestingExamples/MyList";
// import UseEffectHook from "../TestingExamples/UseEffectHookEx";

export default function App({text,serverRelativeUrl, imagePath }: AppProps) : JSX.Element {
const [showCourseModal , setShowCourseModal] = useState(false);
const [showOffers , setShowOffers] = useState(false);

 // const headerImg = serverRelativeUrl+`/SiteAssets/headerImg.png`; 
    const childrens : React.ReactElement[] = [];

    // HANDLERS
    // Modal Handlers
    function handleStartLearningEvent(event :React.MouseEvent<HTMLButtonElement>) : void {
      setShowCourseModal(true);
    }

    function handleModalCancelEvent() : void {
      setShowCourseModal(false);
    }

    // Offers Handler
    const handleShowOffers = () : void => (
      showOffers === false ? setShowOffers(true) : setShowOffers(false)
    )

    // const handleStartLearningEvent = () : void => {window.alert("Hi")};

    const loremTexts : string = "See how experienced developers solve problems in real-time.Watching scripted tutorials" +
                           "is great, but understanding how developers this is invaluable.";

    const titleElement : React.ReactElement<TitleProps> = React.createElement(TitleComponent,
        { 
          baseProps: {text: "Learn to code by watching others" , classes :`${styles.headerTitle} ${styles.fsXxl}`}
        });
    
    // const paragTagElement : React.ReactElement<{}> = React.createElement("p",{ className: `header-text mb-3` },texts); 

    childrens.push(titleElement);
    //childrens.push(paragTagElement); 
 
    // OFFERS
    const offersList :  CardProps[] = [ 
      {
      icon_1: <AiFillUnlock className="i" size={"2em"}/>,
      title:"Tons of Content",
      text:"We have library of over 100,000 videos that will help you to learn to code",
      },
      {
        icon_1: <FaMapMarkedAlt className="i" size={"2em"}/>,
        title:"Guided Course",
        text:"We guided you with series of videos that will help you to learn to code.",
      },
      {
        icon_1: <FaFileDownload className="i" size={"2em"}/>,
        title:"Project File Downloads",
        text:"File from project are available for all of our courses to be",
      },
  ];

  const moreOffersList :  CardProps[] = [ 
    {
    icon_1: <AiFillUnlock className="i" size={"2em"}/>,
    title:"Tons of Content",
    text:"We have library of over 100,000 videos that will help you to learn to code",
    },
    {
      icon_1: <FaMapMarkedAlt className="i" size={"2em"}/>,
      title:"Guided Course",
      text:"We guided you with series of videos that will help you to learn to code.",
    },
    {
      icon_1: <FaFileDownload className="i" size={"2em"}/>,
      title:"Project File Downloads",
      text:"File from project are available for all of our courses to be",
    },
];
        
  return (
    <>
      <div id="root" className={`${styles.container} ${styles.containerLg}`}>
        <div className={`${styles.textCenter}`}>
        {/* Modal */}
        { showCourseModal && <ModalComponent title={"Access Denied"} 
                                           text={"Please login in order to access the content"}
                                           cancelEvent={handleModalCancelEvent}/>
        }
      
        {/* Header*/}
        <HeaderComponent childrens={childrens}/>
        <p className={` ${styles.mb3}`}>{loremTexts}</p>

      <div className={`${styles.headerBtn}`}>
          <ButtonComponent classes={`${styles.btnPrimary} ${styles.textLight} ${styles.mr2}`} 
                         type="button" onClick={handleStartLearningEvent} text="Try it for free 30 days"
                         icon={<BsFillSendFill className={styles.mr05} />}
                         />

          <ButtonComponent classes={`${styles.btnSecondary}`} 
                         type="button" text="Learn more..."/>
        </div>
        <img src={imagePath} alt="header-img" className={`${styles.headerImg} ${styles.textCenter}`}/>
        </div>
       
        {/* <UseStateHookEx/> */}

        {/* Main */} 
        <main>
          {/*Categories*/}
          <section className={`${styles.categoriesContainer} ${styles.my4}`}>
            <TitleComponent baseProps={{text:"Top Categories" , classes:`${styles.subtitle} ${styles.textCenter}`}}/>
            <div className={`${styles.categoriesContainer} ${styles.dFlex}`}>

              <CategoriesCard title="Web Development" 
              icon_1={<AiFillHtml5 size={"4em"} className={`icon html5`} />}
              icon_2={<DiCss3Full size={"4em"} className={`icon css3`} />}
              icon_3={<siIcons.SiJavascript size={"4em"} className={`icon js`} />}

              btnIcon={<AiFillPlayCircle size={"2em"} />}
              startEvent={handleStartLearningEvent}>
              <span className={`${styles.fsMd}`} >Learn how to build web apps with:</span>
                <ul className={`${styles.mt1}`}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </CategoriesCard>

              <CategoriesCard title="Mobile Development" 
                icon_1={<siIcons.SiReact size={"4em"} className={`icon react`}/>}
                icon_2={<siIcons.SiJavascript size={"4em"} className={`icon js`}/>}
                startEvent={handleStartLearningEvent} >
                <span className={`${styles.fsMd}`} >Learn how to build mobile apps with:</span>
                  <ul className={`${styles.mt1}`}>
                    <li>React Native</li>
                    <li>JavaScript</li>
                    <li>Expo</li>
                  </ul>
                </CategoriesCard>

              <CategoriesCard title={"Data Science"}
                    icon_1={<siIcons.SiPython size={"4em"} className={`icon python`} />}
                    icon_2={<siIcons.SiR size={"4em"} className={`icon r`} />}
                    icon_3={<AiOutlineJava size={"4em"} className={`icon java`} />}
                    startEvent={handleStartLearningEvent}>
              <span className={`${styles.fsMd}`} >Learn how to analyze data with:</span>
                <ul className={`${styles.mt1}`}>
                    <li>Python</li>
                    <li>R</li>
                    <li>Java</li>
                  </ul>
              </CategoriesCard>

              <CategoriesCard title={"Business"} 
                    icon_1={<AiFillFileExcel size={"4em"} className={`icon excel`} />}
                    icon_2={<siIcons.SiPowerbi size={"4em"} className={`icon powerbi`} />}
                    icon_3={<PiFileSqlBold size={"4em"} className={`icon sql`} />}
                    startEvent={handleStartLearningEvent}>
              <span className={`${styles.fsMd}`} >Learn how to analyze data with:</span>
                  <ul className={`${styles.mt1}`}>
                    <li>Excel</li>
                    <li>Power BI</li>
                    <li>SQL</li>
                  </ul>
              </CategoriesCard>
 
            </div>
          </section>

              {/* Offers */}
              <section className={`${styles.container} ${styles.containerMd} ${styles.p2}`}>
                <TitleComponent baseProps={{text:"Here's what you get"  , classes:`${styles.subtitle} ${styles.textCenter} ${styles.mb4}`  }}/>
                <div className={`${styles.offersContainer}`}>
                  { 
                  offersList.map((offer, index) => (<OfferCard key={index} icon_1={offer.icon_1} title={offer.title} text={offer.text} /> ))
                  }
                </div>

                {showOffers && 
                  <div className={`${styles.offersContainer} fadeIn`}>
                    {moreOffersList.map((offer,index) => (<OfferCard key={index} icon_1={offer.icon_1} title={offer.title} text={offer.text} /> ))}
                  </div>
                }
                
                <a href="#" onClick={handleShowOffers} style={{cursor:"pointer" , textDecoration:"underline"} } >
                  <h4 className={`${styles.textCenter} ${styles.textPrimary} ${styles.m2}`}>{showOffers? "less" :"More..."}</h4>
                </a>
              </section>

              {/* Testimonials */}
              {/* className={`${styles.testimonial} ${styles.my4}`} */}
              <section >
                <TitleComponent  baseProps={{text:"What our users say" , classes:`${styles.subtitle} ${styles.textCenter} ${styles.mb4}`}}/>
                <div className={`${styles.testimonialsContainer}`}>
                  <TestimonialsList />
                </div>
              </section>

        </main>

        {/*EXAMPLES*/}
        {/*<UseStateHookEx /> */}
        {/* <MyList /> */}
        {/* <UseEffectHook/> */}

      </div>
    </>
  )
}
