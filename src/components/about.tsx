import { getImagePath } from '../lib/path-utils.js';
export default function About() {
    return (
      <section id="about" className="bg-navy-light py-20">
        <div className="section-container">
          <h2 className="section-title mb-16">About Me</h2>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-yellow">
                MERN Stack Developer
              </h3>
  
              <p className="text-text-secondary mb-6">
                I am a passionate Full Stack Developer with 1+ years of hands-on industry experience in building scalable,
                high-performance web applications. I am skilled in writing clean,efficient and maintainable code, 
                with a strong understanding of frontend,backend and databases.
              </p>
  
              <p className="text-text-secondary mb-6">
                I am also experienced as a UI/UX Designer, adept at creating intuitive and user-centric interfaces. I am
                passionate about leveraging modern technologies including (LLMs/VLMs) to develop
                impactful, ethical, and innovative software solutions.
              </p>
  
              <p className="text-text-secondary mb-8">
                B.S. in Computer Science at FAST National University of Computer & Emerging Science,
                I am constantly learning and exploring new technologies to enhance my skills.
              </p>
  
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Contact</h4>
                  <ul className="space-y-2 text-text-secondary">
                    <li>
                      <span className="text-yellow">Email:</span> seemalch5@gmail.com
                    </li>
                    <li>
                      <span className="text-yellow">Phone:</span> +92 3417980425
                    </li>
                    <li>
                      <span className="text-yellow">Location:</span> Pakistan
                    </li>
                  </ul>
                </div>
  
                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-text-secondary">
                    <span className="text-yellow">B.S. Computer Science</span>
                    <br />
                    FAST National University
                      <br> </br>
                    Sep 2021 – Jun 2025
                  </p>
                </div>
              </div>
            </div>
  
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img src={getImagePath('/up.jpg')} alt="Placeholder" width={500} 
        height={500} 
        className="rounded-full w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
