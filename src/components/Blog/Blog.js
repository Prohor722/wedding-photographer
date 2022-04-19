import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog mx-auto my-3 p-5'>
            <h4>Difference between authorization and authentication?</h4>

            <p>Authorization means that are authorized or allowed or not. Meaning if have the access or permission or not. Authentication means the information or anything is authenticate or real or not. If you are trying to login and the website is checking do your email is register or not is authorized or not and before that it need to check if your given mail is true or fake is authentication.</p>

            <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>firebase is mostly used because of its usability and security. I am using because you told me so. Other options i have to implement authentication are online banking systems, mobile banking( bkash, upai, nagad), card authentications etc. </p>

            <h4>What other services does firebase provide other than authentication</h4>
            <p>Firebase allows us to host our websites , have database accessibility, api services, cloud messaging etc. .</p>
        </div>
    );
};

export default Blog;