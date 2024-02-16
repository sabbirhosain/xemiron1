import AboutCard from "../../Components/About/AboutCard"
import "./About.css"
import { Helmet } from 'react-helmet'
import { xemironApart } from "../../Data/Data"
const About = () => {
  return (
    <>
      <Helmet title="About" />

      <section className='about'>
        <div className="about_bg_img">
          <div className='p-5'>Bradcomb</div>
          <div className="container">
            <div className='about_bd_textbox'>
              <h1>Hello World</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="about_xemiron">
        <div className="container">
          <div>
            <p>Welcome from Xemiron. I am Toufic Ahammed the founder of Xemiron IT Solutions. I will share you the journey of Xemiron and its Journey.</p>

            <p>It everything started on 2017 when I first started my career at as a freelanceer web designer. Back then I used to be a WordPress Expert. I learnt HTML, CSS, little Javascript and PHP. And basically I used to work as a WordPress expert. But as you know WordPress is basically a CMS and you dont have full controll over it unless you are a profeccient programmer.</p>

            <p>So from that point I started thinking about learning a programming language. It took me sometime to finally be it. I learnt Python and then started using it’s framework Django.Everything was moving fine and then suddenly I feel like I can cover more than just programming for my clients since they love working with me. So I started to gathering more experts for different projetcs for my clients and everything was moving well. Then I startend feeling why not my own established brand for this that people will recognise?</p>

            <p>And then the birth of Xemiron.</p>

            <p>And then the birth of Xemiron.</p>

            <p>Alhamdulillah everything is moving smooth since we started. Yes there were ups and downs.</p>
          </div>
        </div>
      </section>

      <section ection className="xemiron_apart">
        <div className="container">
          <div className="row">
            {
              xemironApart.map((item, index) => (
                <AboutCard xemironApartList={item} key={index} />
              ))
            }
          </div>
        </div>
      </section>

    </>
  )
}

export default About