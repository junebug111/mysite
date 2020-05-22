import React from 'react';
import './aboutMe.css';

class AboutMe extends React.Component{
    render(){
        return(
            <section> 
                <img src={require("./me.png")} alt="headshot of Christi" />
                <div class="text"> 
                    <p>
                        Hi! My name is Christi and I am a rising junior at Columbia University 
                        majoring in computer science and minoring in East Asian studies. I love
                        to empower women in tech and I am a NYC lead of Rewriting the Code and 
                        an events coordinator of the Women in Computer Science club at my school. 
                        I also actively participate in Built By Girls and Girls Who Code. 
                        <br /> <br />
                        In my free time, I like to read novels and comics, draw, exercise, and 
                        listen to music. 
                    </p>
                    <br /> 

                    <aside>
                        <p class='industry'>Industry experience: </p>
                        <ul>
                            <li>SWE Intern @Uber</li>
                            <li>Tech Analyst Intern @Bank of America</li>
                        </ul>
                    </aside>
                </div>
            </section>
        )
    }
}

export default AboutMe; 
