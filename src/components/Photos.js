import classes from "./Photos.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const Photos = ({ src, alt, title, bio }) => {
    return (
        <div className={classes.imagecard}>
            <LazyLoadImage
                className={classes.img}
                alt={alt}
                src={src}
                effect="opacity"
                // placeholderSrc={src}
            />
            {/* <img className={classes.img} src={src} alt={alt} /> */}
            <h3>{title}</h3>
            <p>{bio ? bio : "Lorem ipsum"}</p>
        </div>
    );
};

export default Photos;
