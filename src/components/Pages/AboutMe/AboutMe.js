import React from 'react';
import kabir from '../../../assets/Images/aboutMe/kabir.jpg'

const AboutMe = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row my-5">
                    <div className="col-md-4 col-sm-4 col-xs-12 pt-5">
                        <img className='w-100 rounded' src={kabir} alt="" />
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-12 pt-5">
                        <h2>Way to Struggle !!! </h2>
                        <p className='aboutMeText'>Try to get involved in a real project. Doesn't have to be a big project, the important thing is that it's somewhat well defined.Preferably do the project for or with someone else, so that I can get some “external pressure” to finish the project.</p>
                        <p className='aboutMeText'>
                        Do the project for myself, there is a big risk i will loose interest in the project or only do the easy parts. Then you won't learn as much and i won't get the experience of finishing something.</p>
                        <p className='aboutMeText'>
                        The alternative, I really curious or fascinated about something, is to go explore that topic as deeply as possible. Learn and understand as much as possible about it.
                        Iwant to learn about a topic, try "teaching"”" it to someone else. Write a blog post explaining findings. This will quickly reveal me really have understood the topic.</p>
                        <p className='aboutMeText'>
                        So, find something small and well defined and just do it and remember that it can be anything Add a Google Map to a website using Google's API, for example. Then make it possible for the user to add some pins to it. Then ensure that the pins are still on the map when the user visits the site again at a later point in time, etc. I am a big fan of learning by doing wheni'm the a beginner programmer since it's easier to learn the theory behind things after i have some practical experience.</p>

                        <p className='aboutMeText'>I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and
                            development techniques are important to me and the success of your organization. Your listed requirements closely match my background and skills.
                            A few I would like to highlight that would enable me to contribute to your bottom line are:

                            <ul>
                                <li>Highly skilled in designing, testing, and developing software</li>
                                <li>Thorough understanding of data structures and algorithms</li>
                                <li>Knowledgeable of back-end development best practices</li>
                                <li>Hands-on software troubleshooting experience</li>
                                <li>Proven track record of proper doc</li>
                            </ul>
                            <a className='btn btn-success' href="https://rezaun.netlify.app/">Hire Me</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;