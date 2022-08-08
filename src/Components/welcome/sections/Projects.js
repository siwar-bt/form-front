import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../elements/ProjectBox";
import FullButton from "../buttons/FullButton";
// Assets
import ProjectImg1 from "../../../assets/img/projects/1.png";
import ProjectImg2 from "../../../assets/img/projects/2.png";
import ProjectImg3 from "../../../assets/img/projects/3.png";
import ProjectImg4 from "../../../assets/img/projects/4.png";
import ProjectImg5 from "../../../assets/img/projects/5.png";
import ProjectImg6 from "../../../assets/img/projects/6.png";

export default function Projects() {
    return (
        <Wrapper id="projects">
            <div className="whiteBg">
                <div className="container">
                    <HeaderInfo>
                        <h1 className="font40 extraBold">Nos Projets</h1>
                        <p className="font13">
                           Grace a Axia FormBuilder on peut trouver des différents types des formulaires qui répondres a vos besoins .
                            <br />
                            
                        </p>
                    </HeaderInfo>
                    <div className="row textCenter">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img={ProjectImg1}
                                title="Création d'un formulaire e-commerce"
                                text="Axia FormBuilder met à votre disposition ses connaissances techniques et son expertise pour créer un formulaire e-commerce de qualité professionnelle ."
                                action={() => alert("clicked")}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img={ProjectImg2}
                                title="Création d'un formulaire de contact"
                                text="Un formulaire de contact est un support de communication essentiel pour affirmer votre image de marque et présenter vos services de façon continue et au plus grand nombre. Axia FormBuilder vous propose des solutions adaptées à votre besoin et aux exigences des utilisateurs pour créer leur formulaire et de mettre à jour vos contenus de façon autonome…"
                                action={() => alert("clicked")}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img={ProjectImg3}
                                title="Création d'un formulaire d'inscription"
                                text="Vous envisagez le développement d’un formulaire d'inscription pour prendre en compte les besoins spécifiques à votre profession 
                                Axia FormBuilder vous propose ses compétences et savoir-faire pour réaliser les développements propres aux exigences de votre activité."
                                action={() => alert("clicked")}
                            />
                        </div>
                    </div>
                    
                    <div className="row flexCenter">
                        <div style={{ margin: "50px 0", width: "200px" }}>
                            <FullButton title="Load More" action={() => alert("clicked")} />
                        </div>
                    </div>
                </div>
            </div>
           
        </Wrapper>
    );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;