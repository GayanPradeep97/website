
import coverVID from './../assests/cover.mp4' ;

import classes from './Home.module.scss';
const Home = () => {
    return (
        
       <div className={classes.container}>
        <video src={coverVID}></video>
       </div>
            
        
    );
}

export default Home;
