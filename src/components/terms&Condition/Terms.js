import React, { useEffect, useState } from 'react'
import Header from '../header/Header';
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
        <Header/>
        <div className="text-start mx-5 mx-5 mt-5">
          <h4>PRIVACY</h4>
          <p>We strive to protect your online privacy, while providing an enjoyable website experience that provides information, products, and services that are relevant and useful to you. The purpose of this Multi Radiance Medical, Inc. Privacy Policy is to inform you of our website personal information practices. This Policy will describe the kinds of information we may gather when you visit our website, how we may use that information, and the circumstances under which we may disclose it to third parties. This Policy will also provide important information about the security of information collected on our site, and provide other disclosures pertaining to the content of the site, changes in this Policy, and copyright/trademark information.</p>
        </div>
        <div className="text-start mx-5 mx-5">
          <h5>COLLECTING PERSONAL IDENTIFIABLE INFORMATION</h5>
          <p>You may visit www.multiradiance.com to read product information or utilize our online tools without telling us who you are, and without revealing any personal information. You may also choose to utilize our online tools to obtain services such as brochure and information requests, to participate in surveys and contests, and to receive site announcements and special offers at the time of the request or in the future. To the extent that you utilize these online tools, Multi Radiance Medical will collect and store the personal information provided by you, which is necessary to provide the requested services, or to improve the services that we provide to you in the future. The personal information collected by Multi Radiance Medical may include your name and mailing address, telephone number, email address, and pertinent credit card information, as appropriate.</p>
        </div>
        <div className="text-start mx-5 mx-5">
          <h5>INFORMATION DISSEMINATION TO THIRD PARTIES</h5>
          <p>We strive to protect your online privacy, while providing an enjoyable website experience that provides information, products, and services that are relevant and useful to you. The purpose of this Multi Radiance Medical Privacy Policy is to inform you of our website personal information practices. This Policy will describe the kinds of information we may gather when you visit our website, how we may use that information, and the circumstances under which we may disclose it to third parties. This Policy will also provide important information about the security of information collected on our site, and provide other disclosures pertaining to the content of the site, changes in this Policy, and copyright/trademark information.</p>
        </div>
        <div className="text-start mx-5 mx-5">
          <h5>SECURITY</h5>
          <p>Multi Radiance Medical, Inc. takes reasonable precautions to protect our users' information, both while the information is being transmitted and after it is received by us. Once we have received user information, we use security procedures commensurate with industry standards to safeguard against loss, theft, unauthorized access, destruction, use, modification and disclosure.</p>
        </div>
        <div className="text-start mx-5 mx-5">
          <h5>ACCEPTANCE OF PRIVACY POLICY AND NOTIFICATIONS OF FUTURE CHANGES</h5>
          <p>By using this site, you signify your agreement to the Multi Radiance Medical, Inc. Website Privacy Policy. Multi Radiance Medical reserves the right to change this Privacy Policy at any time. We will post those changes to this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it. Multi Radiance Medical will use, share, and disclose all personal and other user information in accordance with the Privacy Policy in effect at the time the information is collected. Continued use of this site following changes to these terms will mean that you accept these changes.</p>
        </div>
        <div className="text-start mx-5 mx-5">
          <h5>NO REPRESENTATION OF WARRANTY</h5>
          <p>Multi Radiance Medical, Inc. does not assume any responsibility for the accuracy, completeness or authenticity of any information contained in this site. This site and the materials contained herein are provided to you “as is” without warranty of any kind. This site may contain links to, or information from, other sites or resources located on the World Wide Web. Multi Radiance Medical, Inc. has no control over such sites and makes no representation or warranty as to the completeness or authenticity of any information provide by such site or resource. You acknowledge and agree that Multi Radiance Medical, Inc. is not responsible for the availability of such sites or resources and does not endorse and is not responsible or liable for any content, advertising, products or other materials on or available from such sites or resources. You further acknowledge and agree that Multi Radiance Medical, Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource.</p>
        </div>
        <div className="text-start mx-5 mx-5">
          <h3>WEB SITE TERMS OF USE</h3>
          <p>Your access to and use of this Site is subject to the following terms and conditions and all applicable laws. By accessing and browsing this Site, you accept, without limitation or qualification, these Terms and Conditions and acknowledge that any other agreements between you and Multi Radiance Medical Inc. are superseded and of no force or effect.</p>
          <p>Multi Radiance Medical may at any time revise these Terms and Conditions by updating this posting. You are bound by any such revisions and should therefore periodically visit this page to review the then current Terms and Conditions to which you are bound.</p>
        </div>
        <div className="text-start mx-5 mx-5 my-4">
          <h5>USE OF THE ONLINE STORE</h5>
          <li className='ms-3'>Only one promocode may be used per transaction.</li>
        </div>
        <div className="text-start mx-5 mx-5">
          <h5>USING INFORMATION FROM OUR SITE</h5>
          <li className='ms-3'>You may download, display or print information from this Site (the "Information") solely for non-commercial personal use.</li>
          <li className='ms-3'>You must retain and reproduce each and every copyright notice or other proprietary rights notice contained in any Information you download. You may not, however, distribute, modify, transmit, reuse, repost, or use the content of the Site for public or commercial purposes, including the text, images, audio, and video without written permission of Multi Radiance Medical. You should assume that everything you see or read on this Site is copyrighted unless otherwise noted and may not be used except as provided in these Terms and Conditions or in the text on the Site without the written permission of Multi Radiance Medical. Multi Radiance Medical neither warrants nor represents that your use of materials displayed on the Site will not infringe rights of third parties not owned by or affiliated with Multi Radiance Medical.</li>
          <li className='ms-3'>With the exception of the foregoing limited authorization, no license to or right in any copyright of Multi Radiance Medical or of any other party is granted or conferred to you.</li>
          
        </div>
        <div className="text-start mx-5 mx-5">
          <h5>TRADEMARKS, PATENTS, PROPRIETARY INFORMATION</h5>
          <p>The Multi Radiance Medical Internet sites may contain or reference trademarks, patents, proprietary information, technologies, products, processes or other proprietary rights of Multi Radiance Medical and/or other parties. No license to or right in any such trademarks, patents, trade secrets, technologies, products, processes and other proprietary rights of Multi Radiance Medical and/or other parties is granted to or conferred upon you.</p>
          <p>While Multi Radiance Medical uses reasonable efforts to include accurate and up to date information in the Site, Multi Radiance Medical makes no warranties or representations with respect to the content of the Site, which is provided "as is". Multi Radiance Medical accepts no responsibility or liability whatsoever arising from or in any way connected with the use of this Site or its content. In particular, Multi Radiance Medical will not be liable for the accuracy, completeness, adequacy, timeliness, or comprehensiveness of the information contained on the Site. Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you. Multi Radiance Medical also assumes no responsibility, and shall not be liable for, any damages to, or viruses that may infect, your computer equipment or other property on account of your access to, use of, or browsing in the Site or your downloading of any materials, data, text, images, video, or audio from the Site. Multi Radiance Medical reserves the right to interrupt or discontinue any or all of the functionality of its Site. Multi Radiance Medical accepts no responsibility or liability whatsoever for any interruption or discontinuance of any or all functionality of its Site, whether the result of actions or omissions of the Multi Radiance Medical or a third party.</p>
          <p>Any communication or material you transmit to the Site by electronic mail or otherwise, including any data, questions, comments, suggestions or the like is, and will be treated as, non-confidential and non-proprietary. Anything you transmit or post becomes the property of Multi Radiance Medical or its affiliates and may be used for any purpose, including, but not limited to, reproduction, disclosure, transmission, publication, broadcast and posting. Furthermore, Multi Radiance Medical is free to use any ideas, concepts, know-how, or techniques contained in any communication you send to the Site for any purpose whatsoever including, but not limited to, developing, manufacturing and marketing products using such information.</p>
        </div>
        <div className="text-start mx-5 mx-5">
          <h5>TYPOGRAPHICAL ERRORS</h5>
          <p>The Information may contain technical inaccuracies or typographical errors. Multi Radiance Medical reserves the right to make changes, corrections and/or improvements to the Information, and to the products and programs described in such information, at any time without notice.</p>
          <p>Because Multi Radiance Medical has no control over and does not endorse any of the sites to which the Site is linked and because Multi Radiance Medical has not reviewed any or all of the sites to which the Site is linked, you acknowledge that Multi Radiance Medical is not responsible for the content of any off-Site pages or any other sites linked to the Site. Your linking to the Site, off-Site pages or other sites is at your own risk and without the permission of Multi Radiance Medical.</p>
        </div>
        <div className="text-start mx-5 mx-5">
          <h5>LINKING TO THIS SITE</h5>
          <p>Links to this Site are permitted only to the home page. Deep linking is not permitted without the prior written consent of Multi Radiance Medical.</p>
          <p>Framing of this Site by sites or site elements of parties not part of Multi Radiance Medical is not permitted. In-line linking or any other manner of incorporating parts of this Site in sites of parties not part of Multi Radiance Medical is equally prohibited.</p>
        </div>
    </div>
  )
}

export default Terms