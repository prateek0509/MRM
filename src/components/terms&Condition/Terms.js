import React, { useEffect, useState } from 'react'
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Terms = () => {
    const [termsData,setTermsData]= useState([])
    const homeBannerData = async () => {
        try {
          const response = await fetch(
            "https://flat-sun-42336.botics.co/api/v1/privacy-policy"
          );
          const resData = await response.json();
          setTermsData(resData);
        } catch (err) {
          console.log(err);
        }
      }
      console.log(termsData)
      useEffect(()=>{
        homeBannerData()
      },[])
  return (
    <div>
        {/* {ReactHtmlParser(item)} */}
    </div>
  )
}

export default Terms