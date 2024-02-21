import { xemironApart } from '../../Data/Data'
import AboutCard from '../../Components/About/AboutCard'
import CounterUp from '../../Components/CounterUp/CounterUp'
import map from "../../assets/map.png"
import Promise from '../../Components/Promise/Promise'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import "./About.css"
import "./About.responsive.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <div className="container">
          <div className="about_bg_img">
            <div className='about_breadcrumb'>
              <Breadcrumb page1={"Home"} page2={"About us"} color={"text-white"} />
            </div>
            <div className='about_bd_textbox'>
              <h1 className='xemiron_about_title'>About Xemiron</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='about_xemiron'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="about_xemiron_paragraph">Welcome from Xemiron. I am Toufic Ahammed the founder of Xemiron IT Solutions. I will share you the journey of Xemiron and its Journey.</p>

              <p className="about_xemiron_paragraph">It everything started on 2017 when I first started my career at as a freelanceer web designer. Back then I used to be a WordPress Expert. I learnt HTML, CSS, little Javascript and PHP. And basically I used to work as a WordPress expert. But as you know WordPress is basically a CMS and you dont have full controll over it unless you are a profeccient programmer.</p>

              <p className="about_xemiron_paragraph">So from that point I started thinking about learning a programming language. It took me sometime to finally be it. I learnt Python and then started using it’s framework Django.Everything was moving fine and then suddenly I feel like I can cover more than just programming for my clients since they love working with me. So I started to gathering more experts for different projetcs for my clients and everything was moving well. Then I startend feeling why not my own established brand for this that people will recognise?</p>

              <p className="about_xemiron_paragraph">And then the birth of Xemiron.</p>

              <p className="about_xemiron_paragraph">And then the birth of Xemiron.</p>

              <p className="about_xemiron_paragraph">Alhamdulillah everything is moving smooth since we started. Yes there were ups and downs.</p>

              <p className="about_xemiron_paragraph">But its been 1 year and we are operating really nice and could successfully serve around 20 reputed clients so far and new clients are comming all the time. We are looking forward a long term establishment of Xemiron IT Solutions.Thank you for checking out ad your interest in Xemior's services.</p>

              <p className="about_xemiron_paragraph">Lots of love and we want to be part of the success of your business.</p>

              <p className="about_xemiron_paragraph">Regards</p>
              <p className="about_xemiron_paragraph"><strong>Toufic Ahammed</strong></p>
              <p className="about_xemiron_paragraph">CEO Founder</p>
              <p className="about_xemiron_paragraph">Xemiron IT Solutions</p>

            </div>
          </div>
        </div>
      </section>

      <section className="xemiron_apart">
        <div className="container">
          <h1 className='xemiron_apart_title'>The Core Values That Sets A <span className='xemiron_apart_title_color'>Xemiron</span> part</h1>
          <div className="row">
            {
              xemironApart.map((item, index) => (
                <AboutCard xemironApartList={item} key={index} />
              ))
            }
          </div>
        </div>
      </section>

      <section className='client_across'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div>
                <h1 className='client_across_title'>Clients across the globe</h1>
                <p className='client_across_paragraph'>We show it to you practical! You start with us with small projects! And
                  let us show you our capability! They we gradually grow our scope and
                  start on your big projects.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className='d-flex align-items-center justify-content-end'>
                <div className="counter_box">
                  <h1 className='client_across_counter'><CounterUp start={0} end={16} duration={5} />+</h1>
                  <h6 className='client_across_count_title'>Countries</h6>
                </div>
                <div className="counter_box">
                  <h1 className='client_across_counter'><CounterUp start={0} end={100} duration={5} />+</h1>
                  <h6 className='client_across_count_title'>Projects</h6>
                </div>
                <div className="counter_box">
                  <h1 className='client_across_counter'><CounterUp start={0} end={20} duration={5} />+</h1>
                  <h6 className='client_across_count_title'>Satisfied Clients</h6>
                </div>
              </div>
            </div>
          </div>
          <div><img src={map} className='img-fluid' alt="" /></div>
        </div>
      </section>

      <section className='promise'>
        <Promise />
      </section>
    </>
  )
}

export default About