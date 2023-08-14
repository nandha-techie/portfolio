import '../styles/experience.css';

const Experience = ()=>{
    return(
        <div className="experience">
            <div className="container">
                <div className="content">
                    <div className="experience-content">
                        <h3>Experience</h3>
                        <div className="company">
                            <div className="company__details">
                                <h4>IRS Software</h4>
                                <p>1+ yrs 2017 - 2018</p>
                            </div>
                            <div className="company__details">
                                <h4>Freelancing</h4>
                                <p>2018 - 2020</p>
                            </div>
                            <div className="company__details">
                                <h4>FishBozz - part time</h4>
                                <p>2020 - 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="education-content">
                        <h3>Education</h3>
                        <div className="education">
                            <div className="education__details">
                                <h4>Junier colllege</h4>
                                <p>2010 -2011</p>
                            </div>
                            <div className="education__details">
                                <h4>Graduation - BE (Computer Science & Engineering)</h4>
                                <p>2011 -2015</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}
export default Experience;