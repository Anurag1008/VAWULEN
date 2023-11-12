import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'


const about = () => {
  return (
    <>
    <Header title="About us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus architecto in quae, culpa deserunt!
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our story image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem in impedit quaerat illum officia eum nihil magni dolorum, nobis, fuga ab numquam vel deleniti deserunt aperiam debitis aut iusto!
          </p>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem in impedit quaerat illum officia eum nihil magni dolorum, nobis, fuga ab numquam vel deleniti deserunt aperiam debitis aut iusto!
          </p>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem in impedit quaerat illum officia eum nihil magni dolorum, nobis, fuga ab numquam vel deleniti deserunt aperiam debitis aut iusto!
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__vision-container">
       
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem in impedit quaerat illum officia eum nihil magni dolorum, nobis, fuga ab numquam vel deleniti deserunt aperiam debitis aut iusto!
          </p>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem in impedit quaerat illum officia eum nihil magni dolorum, nobis, fuga ab numquam vel deleniti deserunt aperiam debitis aut iusto!
          </p>
          
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision image" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem in impedit quaerat illum officia eum nihil magni dolorum, nobis, fuga ab numquam vel deleniti deserunt aperiam debitis aut iusto!
          </p>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem in impedit quaerat illum officia eum nihil magni dolorum, nobis, fuga ab numquam vel deleniti deserunt aperiam debitis aut iusto!
          </p>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem in impedit quaerat illum officia eum nihil magni dolorum, nobis, fuga ab numquam vel deleniti deserunt aperiam debitis aut iusto!
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default about
