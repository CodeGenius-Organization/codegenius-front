import React, { useEffect, useState } from 'react';
import './Institutional.css';

import ModalToForm from './components/modal-to-form/ModalToForm';
import CardInstitucional from './components/card-institutional/CardInstitutional'
import CardOurTeam from './components/card-our-team/CardOurTeam'
import Carousel from './components/carousel-institutional/CarouselInstitutional'
import NavBar from './components/nav-bar/NavBar'

// imagem
import home_img from './assets/computer-with-coffe.png';
import codegenius_img from './assets/computer-with-cloud.svg';
import kaue from './assets/kaue.png';
import lucas from './assets/lucas.png';
import mariana from './assets/mariana.png';
import paula from './assets/paula.png';
import thiago from './assets/thiago.png';
import victor from './assets/victor.png';
import face from './assets/facebook.svg';
import insta from './assets/instagram.svg';
import whats from './assets/whatszap.svg';
import scrollToHelper from '../../shared/helpers/scrollHelper';

function Institutional() {

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        modalVisible ? (body.style.overflow = "hidden") : (body.style.overflow = "auto");
    }, [modalVisible]);

    function handleVisibleLogin() {
        setModalVisible(!modalVisible);
    }

    function handleVisibleRegister() {
        setModalVisible(!modalVisible);
        document.querySelector(".toggle-cad-reg").click()
    }

    return (
        <>
            <NavBar onLoginModal={handleVisibleLogin}   
            />
            <div className='institucional-background'>
                <div className='institucional-gradient'>
                    <div className="institucional-side left">
                        <div className="blur purple"></div>
                        <div className="blur purple"></div>
                    </div>
                    <div className="institucional-side right">
                        <div className="blur pink"></div>
                        <div className="blur pink"></div>
                    </div>
                </div>
                <div className='institucional-container-institucional'>
                    <div className='institucional-content'>
                        <div className='institucional-home' id='home'>
                            <div className='institucional-left-side'>
                                <h1>Explore as tendências tecnológicas atuais!</h1>
                                <p>Expanda seus conhecimentos sobre as tecnologias e ferramentas que estão bombando em TI de maneira simples e prática.</p>
                                <div className='institucional-bt-home'>
                                    <button className='institucional-cadastre-se' onClick={()=> handleVisibleRegister()}>Cadastre-se</button>
                                    <button className='institucional-saiba-mais' data-scroll="#sobre_nos" onClick={scrollToHelper}>Saiba mais</button>
                                </div>
                            </div>
                            <div className='institucional-right-side'>
                                <img className='institucional-home-img' src={home_img} />
                            </div>
                        </div>
                        <div className='institucional-sobre-nos' id='sobre_nos'>
                            <div className='institucional-text-sobre-nos'>
                                <h1>sobre nós</h1>
                                <p>A MindTech vem se destacando na indústria tecnológica, buscando tornrar-se referência em ensino e tecnologia. Nossa missão é proporcionar um aprendizado dinâmico e didático, abrangendo uma ampla gama de conceitos na área de Tecnologia da Informação (TI). Contamos com uma equipe de profissionais excepcionalmente qualificados, que acumulam anos de experiência no mercado, prontos para orientar tanto aqueles que desejam adentrar o campo quanto aqueles que já possuem um conhecimento prévio.</p>
                            </div>
                            <div className='institucional-cards-sobre-nos'>
                                <CardInstitucional />
                            </div>
                        </div>
                        <div className='institucional-codegenius' id='codegenius'>
                            <div className='institucional-left-side'>
                                <img className='institucional-codegenius-img' src={codegenius_img} />
                            </div>
                            <Carousel onModal={handleVisibleRegister}/>
                        </div>
                        <div className='institucional-equipe' id='equipe'>
                            <h1 className='institucional-title-equipe'>Nossa Equipe</h1>
                            <div className='institucional-cards-equipe'>
                                <CardOurTeam
                                    person={kaue}
                                    name={"Kaue Victor"}
                                    funcao={"Negócios"}
                                />
                                <CardOurTeam
                                    person={lucas}
                                    name={"Lucas Jorge"}
                                    funcao={"Quality Assurance"}

                                />
                                <CardOurTeam
                                    person={mariana}
                                    name={"Mariana Namie"}
                                    funcao={"Front-end"}
                                />
                            </div>
                            <div className='institucional-cards-equipe'>
                                <CardOurTeam
                                    person={paula}
                                    name={"Paula Maria"}
                                    funcao={"DevOps"}
                                />
                                <CardOurTeam
                                    person={thiago}
                                    name={"Thiago Hideki"}
                                    funcao={"Back-end"}
                                />
                                <CardOurTeam
                                    person={victor}
                                    name={"Victor Daniel"}
                                    funcao={"Back-end"}
                                />
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="institucional-footer">
                        <div className="institucional-container-footer">
                            <div className="institucional-logo-mindtech">
                                <h1 data-scroll="#home" onClick={scrollToHelper}>MindTech</h1>
                            </div>
                            <div className="institucional-menu">
                                <li data-scroll="#home" onClick={scrollToHelper}>HOME</li>
                                <li data-scroll="#sobre_nos" onClick={scrollToHelper}>SOBRE NÓS</li>
                                <li data-scroll="#codegenius" onClick={scrollToHelper}>CODEGENIUS</li>
                                <li data-scroll="#equipe" onClick={scrollToHelper}>EQUIPE</li>
                            </div>
                            <div className="institucional-redes-sociais">
                                <div className="institucional-facebook">
                                    <img src={face} />
                                </div>
                                <div className="institucional-instagram">
                                    <img src={insta} />
                                </div>
                                <div className="institucional-whatsapp">
                                    <img src={whats} />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <ModalToForm
                toggleModal={handleVisibleLogin}
                visible={modalVisible}
            />
        </>
    )
}

export default Institutional