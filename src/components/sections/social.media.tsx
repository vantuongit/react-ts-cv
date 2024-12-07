import { FaFacebook } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";

interface IProps {
    tiktok: string;
    linkedin: string;
    facebook: string;
}
const SocialMedia = (props: IProps) => {
    const { tiktok, linkedin, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok Sầu vô lệ">
                <FaTiktok size={30} />
            </a>
            <a href={linkedin} target='_blank' className="highlight" title="Linkedin Võ Văn Tưởng">
                <SiLinkedin size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Võ Văn Tưởng">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;