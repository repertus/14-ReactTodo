import React from 'react';
import gitHub from './glyphicons-gitHub.png';
import linkedIn from './glyphicons-social-18-linked-in.png';
import gMail from './glyphicons-social-19-gmail.png';

const urlRefs = {
     gitUrl: 'https://github.com/repertus',
     linkedInUrl: 'https://www.linkedin.com/in/robertmdelc',
     gmailUrl: 'mailto: RobertMdC@gmail.com'
};

class Footer extends React.Component {
     render() {
          return (
               <div>
     			<br />
     			<span>&copy; Repertus Creative Works</span>
     			<br />
     			<span>
                         <a href={urlRefs.gmailUrl}>
                              <img src={gMail} alt="" />
                         </a>
                    </span>
     			<span>
                         <a href={urlRefs.linkedInUrl}>
                              <img src={linkedIn} alt="" />
                         </a>
                    </span>
     			<span>
                         <a href={urlRefs.gitUrl}>
                              <img src={gitHub} width="25" alt="" />
                         </a>
                    </span>
		     </div>
          );
     }
}

export default Footer;
