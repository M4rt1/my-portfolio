import '../styles/Projects.css';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import drumMachine from '../medias/my-projects-imgs/drum-machine.jpeg'
import calculator from '../medias/my-projects-imgs/calculator.jpeg';
import pomodoroTimer from '../medias/my-projects-imgs/pomodoro-timer.jpeg';
import randomQuotes from '../medias/my-projects-imgs/random-quotes.jpeg';
import rockPaperScissors from '../medias/my-projects-imgs/rock-paper-scissors.jpeg';
import yumone from '../medias/my-projects-imgs/yumone.jpeg';
import markDown from '../medias/my-projects-imgs/markdown-previewer.jpeg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={yumone}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='caption-div'>
                        <h3>Phone Site App (wip)</h3>
                        <p>
                            <a href='https://github.com/M4rt1/phone-site' rel='noreferrer' target='_blank'><i class="fas fa-code fa-spin"></i></a>
                            <a href='https://m4rt1.github.io/phone-site/' rel='noreferrer' target='_blank'><i class="far fa-eye fa-spin"></i></a>
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={drumMachine}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='caption-div'>
                        <h3>Drum Machine</h3>
                        <p>
                            <a href='https://github.com/M4rt1/drum-machine' rel='noreferrer' target='_blank'><i class="fas fa-code fa-spin"></i></a>
                            <a href='https://m4rt1.github.io/drum-machine/' rel='noreferrer' target='_blank'><i class="far fa-eye fa-spin"></i></a>
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={calculator}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='caption-div'>
                        <h3>Calculator</h3>
                        <p>
                            <a href='https://github.com/M4rt1/reactjs-calculator' rel='noreferrer' target='_blank'><i class="fas fa-code fa-spin"></i></a>
                            <a href='https://m4rt1.github.io/reactjs-calculator/' rel='noreferrer' target='_blank'><i class="far fa-eye fa-spin"></i></a>
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pomodoroTimer}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='caption-div'>
                        <h3>Pomodoro Timer</h3>
                        <p>
                            <a href='https://github.com/M4rt1/pomodoro-app' rel='noreferrer' target='_blank'><i class="fas fa-code fa-spin"></i></a>
                            <a href='https://m4rt1.github.io/pomodoro-app/' rel='noreferrer' target='_blank'><i class="far fa-eye fa-spin"></i></a>
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={randomQuotes}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='caption-div'>
                        <h3>Random Quote Machine</h3>
                        <p>
                            <a href='https://github.com/M4rt1/random-quotes' rel='noreferrer' target='_blank'><i class="fas fa-code fa-spin"></i></a>
                            <a href='https://m4rt1.github.io/random-quotes/' rel='noreferrer' target='_blank'><i class="far fa-eye fa-spin"></i></a>
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={rockPaperScissors}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='caption-div'>
                        <h3>Rock Paper Scissors Game</h3>
                        <p>
                            <a href='https://github.com/M4rt1/rock-paper-scissors' rel='noreferrer' target='_blank'><i class="fas fa-code fa-spin"></i></a>
                            <a href='https://m4rt1.github.io/rock-paper-scissors/' rel='noreferrer' target='_blank'><i class="far fa-eye fa-spin"></i></a>
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={markDown}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='caption-div'>
                        <h3>Markdown Previewer</h3>
                        <p>
                            <a href='https://github.com/M4rt1/markdown-previewer' rel='noreferrer' target='_blank'><i class="fas fa-code fa-spin"></i></a>
                            <a href='https://m4rt1.github.io/markdown-previewer/' rel='noreferrer' target='_blank'><i class="far fa-eye fa-spin"></i></a>
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function Projects() {
    return (
        <div className='projects-container'>
            <ControlledCarousel />
        </div>
    )
}

export default Projects;