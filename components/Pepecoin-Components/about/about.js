import React from "react";
import dotShape from "/public/images/shapes/shape_dot.png";
import pagasaSignBoard from "/public/images/shapes/pagasa_sign_board.png";
import dragonfly from "/public/images/shapes/shape_dragonfly.png";
import wood1 from "/public/images/shapes/shape_cartoon_9.webp";
import pagasaWood from "/public/images/shapes/pagasa_cartoon_10.png";
import tree from "/public/images/shapes/shape_tree_1.webp";
import cloud from "/public/images/shapes/shape_cloud_2.png";
import Image from "next/image";

const AboutPepe = () => {
  return (
    <section
      id="id_pepecoin_about_section"
      className="pepecoin_about_section section_space pb-0 section_decoration mt-lg-5"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-9">
            <div className="pepecoin_about_content position-relative text-center">
              <div
                className="pepecoin_heading_block"
                style={{ marginTop: 145 }}
              >
                <h2
                  style={{ fontSize: 60 }}
                  className="heading_text text-uppercase"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <span className="shape_dot">
                    <Image src={dotShape} alt="Dot" />
                  </span>
                  About $PAGASA
                  <span className="shape_dot">
                    <Image src={dotShape} alt="Dot" />
                  </span>
                </h2>
                <p
                  className="heading_description mb-0"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  $PAGASA coin will be the symbol of survival against the odds
                  and a beacon of hope for every trader on Solana. Just as the
                  real Pagasa secured the future of his species, this token is
                  here to secure a community built on trust, integrity, and
                  upward momentum.
                </p>
              </div>
              <div className="shape_board_image">
                <Image src={pagasaSignBoard} alt="Pagasa Sign Board" />
              </div>
              {/* <div
                className="shape_dragonfly"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <Image src={dragonfly} alt="Dragonfly" />
              </div> */}
              <div className="shape_wood_1">
                <Image src={wood1} alt="Tree Wood" />
              </div>
              <div className="shape_wood_2">
                <Image src={pagasaWood} alt="Tree Wood" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_tree">
        <Image src={tree} alt="Tree" />
      </div>
      <div className="decoration_item shape_cloud">
        <Image src={cloud} alt="Cloud" />
      </div>
    </section>
  );
};

export default AboutPepe;
