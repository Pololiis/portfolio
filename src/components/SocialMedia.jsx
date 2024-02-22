import logoGitHub from "../assets/img-github.png";
import logoLinkedIn from "../assets/img-linkedin.png";
import logoCV from "../assets/img-cv.png";

import style from "./styles/socialmedia.module.css"

const SocialMedia = () => {
	return (
    <div className={style.container}>
        <a href="https://github.com/Pololiis" target="_blank"><img src={logoGitHub} alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/paola-viloria-silva/" target="_blank"><img src={logoLinkedIn} alt="LinkedIn" /></a>
        <a href="https://drive.google.com/uc?id=1FGx4UIQsH45dFsh_OGPzgg9WoCuWrZmu&export=download" target="_blank"><img src={logoCV} alt="Currículum Vitae" /></a>
    </div>
    );
};

export default SocialMedia;