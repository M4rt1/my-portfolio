import '../styles/WelcomeSection.css';
import myFace from '../medias/myFace.jpeg';
import React from 'react';
import Projects from './Projects';
import { Toast } from 'react-bootstrap';
import myCV from '../medias/CV-Martin-Bulkowski.pdf';

class WelcomeSection extends React.Component {
    constructor() {
        super();
        this.state = {
            showInfo: false,
            showProjects: false,
            showSkills: false,
            copiedInfo: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleProjects = this.handleProjects.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleSkills = this.handleSkills.bind(this);
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                showInfo: !prevState.showInfo
            }
        })
    }

    handleProjects() {
        this.setState((prevState) => {
            return {
                showProjects: !prevState.showProjects
            }
        })
    }

    handleSkills() {
        this.setState((prevState) => {
            return {
                showSkills: !prevState.showSkills
            }
        })
    }

    handleCopy() {
        navigator.clipboard.writeText('msbulkowski@protonmail.com')
        this.setState({
            copiedInfo: true
        })
    }

    render() {
        return (
            <div className='welcome-section'>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    backgroundColor: 'black',
                    padding: 3,
                    borderRadius: 20,
                    color: 'white',
                    fontSize: 30
                }}>
                    <Toast show={this.state.copiedInfo} onClose={() => this.setState({ copiedInfo: false })} delay={2000} autohide>
                        <Toast.Header>
                            <strong className="mr-auto">Copied!</strong>
                        </Toast.Header>
                    </Toast>
                </div>

                <div className='photo'>
                    <img src={myFace} className='my-face' alt='My Face' />
                </div>
                <div className='info'>
                    <p className='icons'>
                        <a href='https://github.com/M4rt1' data-toggle='tooltip' title='My Github' rel='noreferrer' target='_blank'><i class="fab fa-github" /></a>
                        <a href='https://github.com/M4rt1' data-toggle='tooltip' title='My LinkedIn' rel='noreferrer' target='_blank'><i class="fab fa-linkedin" /></a>
                        <a href={myCV} data-toggle='tooltip' title='My CV' rel='noreferrer' target='_blank'><i class="far fa-file"></i></a>
                    </p>
                    <button onClick={this.handleClick} className='mb-button'>
                        <i class="far fa-address-card"></i>
                        Martin Bulkowski
                    </button>
                    {this.state.showInfo ?
                        <div className='about-me'>
                            <i class="far fa-envelope">
                                <span className='contact-info'>
                                    msbulkowski@protonmail.com
                                    <button
                                        onClick={this.handleCopy}
                                        className='copy-btn'>
                                        <i class="far fa-copy" style={{ fontSize: 20 }}></i>
                                    </button>
                                </span>
                            </i>

                            <hr />
                            <i class="fas fa-mobile-alt"><span className='contact-info'> 534 83 22 77</span></i>
                        </div> :
                        ''}
                    <button onClick={this.handleSkills} className='mb-button'>
                        <i class="fas fa-fist-raised"></i>
                        My Skills
                    </button>
                    {this.state.showSkills ?
                        <div className='about-me'>
                            <span className='contact-info'>
                                <i class="fab fa-css3-alt"></i>
                                <i class="fab fa-sass"></i>
                                <i class="fab fa-js-square"></i>
                                <i class="fab fa-react"></i>
                                <i class="fab fa-bootstrap"></i>
                                <i class="fab fa-git"></i>
                            </span>
                        </div> :
                        ''}
                    <button onClick={this.handleProjects} className='mb-button'>
                        My Projects
                    </button>

                    {this.state.showProjects ?
                        <Projects /> :
                        ''}
                </div>
            </div>
        )
    }
}

export default WelcomeSection;