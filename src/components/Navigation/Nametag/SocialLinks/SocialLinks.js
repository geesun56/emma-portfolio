import React from 'react';
import classes from './SocialLinks.module.css';

const SocialLinks = () => {
    const twitter = 'https://www.flaticon.com/svg/static/icons/svg/733/733635.svg';
    const instagram = 'https://www.flaticon.com/svg/static/icons/svg/733/733614.svg';
    const facebook = 'https://www.flaticon.com/svg/static/icons/svg/1051/1051309.svg';
    const linkedin = 'https://www.flaticon.com/svg/static/icons/svg/1384/1384014.svg';
    const youtube = 'https://www.flaticon.com/svg/static/icons/svg/1384/1384012.svg';

    return (
        <ul className={classes.icons}>
            <li><a href='www.twitter.com'><img src={twitter}/></a></li>
            <li><a href='instagram.com'><img src={instagram}/></a></li>
            <li><a href='fb.com'><img src={facebook}/></a></li>
            <li><a href='linkedin.com'><img src={linkedin}/></a></li>
            <li><a href='youtube.com'><img src={youtube}/></a></li>
            
        </ul>
    );

}

export default SocialLinks;