import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Trainer from "../../components/Trainer";

import "./trainers.css";

const Trainers = () => {
  return (
    <>
      <Header title='Our Trainers' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        veritatis ut blanditiis quis inventore repellendus ad minus
        doloribus aliquam sed!
      </Header>
      <section className='trainers'>
        <div className='container trainers__container'>
          {trainers.map(({ id, image, name, job, socials }) => (
            <Trainer
              key={id}
              image={image}
              name={name}
              job={job}
              socials={[
                { icon: <AiFillInstagram />, link: socials[0] },
                { icon: <AiOutlineTwitter />, link: socials[1] },
                { icon: <FaFacebookF />, link: socials[2] },
                { icon: <FaLinkedin />, link: socials[3] },
              ]}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Trainers;
