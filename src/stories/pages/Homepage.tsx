import React, { FC } from "react";

// Components
import Layout from "../components/Layout";
import Card from "../components/Card";
import ListGroup from "../components/ListGroup";
import ListGroupItem from "../components/ListGroupItem";
import ButtonLink from "../components/ButtonLink";

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
                  <p className="text-center small mb-2">Reservar por:</p>
                  <div className="d-flex justify-content-center">
                    <ButtonLink {...card.cta}>Airbnb</ButtonLink>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
