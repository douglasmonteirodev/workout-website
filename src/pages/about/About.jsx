import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        saepe iusto sapiente fugit maxime facere, sunt fugiat qui commodi
        ipsum.
      </Header>

      <section className='about__story'>
        <div className='container about__story-container'>
          <div className='about__section-image'>
            <img src={StoryImage} alt='Story image' />
          </div>
          <div className='about__section-content'>
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Saepe ipsum reiciendis debitis, similique cum expedita fugit
              doloremque doloribus. Sed inventore iure velit nulla expedita
              facilis dicta. Quis voluptatibus doloribus tenetur!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum maiores harum accusamus ab, corporis obcaecati quia,
              pariatur, dolorum consequuntur numquam facilis laborum rerum
              quas optio iusto dignissimos voluptatem alias consectetur
              nisi labore molestias eum incidunt est.
            </p>
            <p>
              Vero, sequi debitis sapiente architecto ut animi eveniet
              accusantium ipsam natus voluptates nulla eaque ab sit
              nesciunt quis consectetur fuga provident exercitationem
              facilis repellat.
            </p>
          </div>
        </div>
      </section>

      <section className='about__vision'>
        <div className='container about__vision-container'>
          <div className='about__section-content'>
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorem eveniet dolorum quos quisquam cumque saepe, atque
              quod porro eos nemo repudiandae, sunt architecto ab vitae
              consectetur a veritatis quas repellat.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Velit, quia iste dignissimos dolorum neque nemo sunt quos,
              ullam rem, blanditiis soluta amet corrupti cupiditate quasi
              et? Magnam ea in id.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aperiam repellat amet odio nemo, accusamus dicta excepturi
              velit nulla perferendis, officia, saepe delectus ad fugiat
              deserunt!
            </p>
          </div>
          <div className='about__section-image'>
            <img src={VisionImage} alt='Vision image' />
          </div>
        </div>
      </section>

      <section className='about__mission'>
        <div className='container about__mission-container'>
          <div className='about__section-image'>
            <img src={MissionImage} alt='Mission image' />
          </div>
          <div className='about__section-content'>
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Saepe ipsum reiciendis debitis, similique cum expedita fugit
              doloremque doloribus. Sed inventore iure velit nulla expedita
              facilis dicta. Quis voluptatibus doloribus tenetur!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum maiores harum accusamus ab, corporis obcaecati quia,
              pariatur, dolorum consequuntur numquam facilis laborum rerum
              quas optio iusto dignissimos voluptatem alias consectetur
              nisi labore molestias eum incidunt est.
            </p>
            <p>
              Vero, sequi debitis sapiente architecto ut animi eveniet
              accusantium ipsam natus voluptates nulla eaque ab sit
              nesciunt quis consectetur fuga provident exercitationem
              facilis repellat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
