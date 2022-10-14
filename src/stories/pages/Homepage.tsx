import React, { FC } from "react";

// Components
import ButtonLink from "../components/ButtonLink";
import Card from "../components/Card";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Layout from "../components/Layout";
import ListGroup from "../components/ListGroup";
import ListGroupItem from "../components/ListGroupItem";
import Spacer from "../components/Spacer";

// Assets
import imageFile from "./../../images/svg/bed-single.svg";

const image = {
  src: imageFile,
  alt: "my image",
};

// Types
export interface HomepageProps {
  cardsData?: any;
}

const Homepage: FC<HomepageProps> = ({ cardsData }) => {
  return (
    <Layout>
      <section className="anchor-block" id="units">
        <FadeInWhenVisible>
          <div className="bg-merino">
            <Spacer>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-10 col-sm-12">
                    <h2 className="mb-5">Cabinas</h2>
                    <p className="mb-0">
                      Cada una de las 4 cabinas tiene 2 camas matrimoniales.
                      Estamos habilitadas para alojar familias y amigos de
                      cuatro a cinco personas. Poseen una iluminación cálida que
                      induce al reposo, equipada para suplir toda necesidad y
                      lograr una estadía singular.
                    </p>
                  </div>
                </div>
              </div>
            </Spacer>
            <Spacer bottomOnly={true}>
              <div className="container">
                <div className="row justify-content-center justify-content-md-start">
                  {cardsData.map((card: any, index: number) => (
                    <div
                      className="col-10 col-sm-12 col-lg-6 col-xl-4 mb-4"
                      key={index}
                    >
                      <Card {...card.distribution} key={index}>
                        <div className="px-3 py-5">
                          <div className="mb-3">
                            <ListGroup>
                              {card.list.map((listItem: any, index: number) => (
                                <ListGroupItem {...listItem} key={index}>
                                  <img
                                    src={listItem.imgSrc}
                                    alt={listItem.imgAlt}
                                    height={40}
                                    width={40}
                                  />
                                </ListGroupItem>
                              ))}
                            </ListGroup>
                          </div>
                          <p className="text-center small mb-2">
                            Reservar por:
                          </p>
                          <div className="d-flex justify-content-center">
                            <ButtonLink {...card.cta}>Airbnb</ButtonLink>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </Spacer>
          </div>
        </FadeInWhenVisible>
      </section>
    </Layout>
  );
};

export default Homepage;
