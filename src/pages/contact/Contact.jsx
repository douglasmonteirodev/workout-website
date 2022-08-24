import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        quos, architecto omnis voluptatum enim minus voluptas perferendis
        consequatur quae nulla consequuntur adipisci aperiam, sed harum
        illum cum? Animi, necessitatibus reprehenderit.
      </Header>
      <section className='contact'>
        <container className='contact__container'>
          <div className='contact__wrapper'>
            <a
              href='mailto:douglasmonteiro071@gmail.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <MdEmail />
            </a>
            <a
              href='http://m.me/douglas.monteiro.5220'
              target='_blank'
              rel='noreferrer noopener'
            >
              <BsMessenger />
            </a>
            <a
              href='https://wa.me/+5593992206317'
              target='_blank'
              rel='noreferrer noopener'
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </container>
      </section>
    </>
  );
};

export default Contact;
