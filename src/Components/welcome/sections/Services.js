import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../elements/ServiceBox";
// Assets

export default function Services() {
    return (
        <Wrapper id="services">
            <div className="whiteBg" style={{ padding: "60px 0" }}>
                <div className="container">
                    <HeaderInfo>
                        <h1 className="font40 extraBold">Nos services</h1>
                        <p className="font13">
                        Ceci est notre superbe service qui facilite vos tâches.
                            <br />
                        </p>
                    </HeaderInfo>
                    <ServiceBoxRow className="flex">
                        <ServiceBoxWrapper>
                            <ServiceBox
                                icon="roller"
                                title="Créez un formulaire en ligne aussi facilement qu'un document"
                                subtitle="Faites votre choix parmi les différents types de questions disponibles, réagencez les questions par glisser-déposer et personnalisez les valeurs en effectuant un simple copier-coller de listes.."
                            />
                        </ServiceBoxWrapper>
                        <ServiceBoxWrapper>
                            <ServiceBox
                                icon="monitor"
                                title="Créez des enquêtes et répondez-y où que vous soyez"
                                subtitle="Consultez, créez des formulaires, quels que soient l'endroit d'où vous travaillez et la taille de votre écran. Les personnes interrogées peuvent répondre à votre enquête où qu'elles se trouvent et depuis n'importe quel appareil mobile, tablette ou ordinateur.."
                            />
                        </ServiceBoxWrapper>
                        <ServiceBoxWrapper>
                            <ServiceBox
                                icon="browser"
                                title="Modifier le contenu du formulaire"
                                subtitle="Examinez les enquêtes  mis à jour en temps réel . Vous pouvez également accéder aux données brutes  pour approfondir les analyses ou modifier les formulaires."
                            />
                        </ServiceBoxWrapper>
                        <ServiceBoxWrapper>
                            <ServiceBox icon="printer"
                             title="Envoyez des enquêtes et Partager des formulaires bien soignés"
                              subtitle=" Vous pouvez facilement partager des formulaires avec des personnes spécifiques ou une audience plus large en les intégrant à votre site Web ou en publiant des liens sur les réseaux sociaux.." />
                        </ServiceBoxWrapper>
                    </ServiceBoxRow>
                </div>
                
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;