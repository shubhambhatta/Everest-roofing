import React from 'react'
import BodyClassName from 'react-body-classname'
import Layout from '../components/layout'
import ArrowLine from '../components/assets/svg/ArrowLine.svg';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function AboutUs() {
    const data = useStaticQuery(graphql`
    query AboutImages{
        image: file(relativePath: { eq: "service_image.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `);
    return (
        <BodyClassName className="services-body">
            <Layout>
                <SEO title="Everest Roofings | About Us" />

                <div className="services-heading">
                    <h3>About Us</h3>
                    <p className="service-intro mb-4">From modern solar roof installments to mess kitchen you will get it done all in one place.
                    Our specialist will take care of all your troubles with eaes.
                    We can provide services in the following areas.
                    </p>
                    <p className="service-intro mb-4">From modern solar roof installments to mess kitchen you will get it done all in one place.
                    Our specialist will take care of all your troubles with eaes.
                    We can provide services in the following areas.
                    </p>
                    <p className="service-intro mb-4">From modern solar roof installments to mess kitchen you will get it done all in one place.
                    Our specialist will take care of all your troubles with eaes.
                    We can provide services in the following areas.
                    </p>
                    <p className="service-intro mb-4">From modern solar roof installments to mess kitchen you will get it done all in one place.
                    Our specialist will take care of all your troubles with eaes.
                    We can provide services in the following areas.
                    </p>
                    <ArrowLine className="arrow-line" />
                    <div className="container" >
                        <div className="row flex-reverse margin-top-50">
                            <div className='col'>
                                <h4>Our Team</h4>
                                <p>
                                    We have the expertise to take care of all your roofing requirements.
                                    Re-bedding, re-pointing of ridge capping and complete roof restorations; our team of professionals provides a personalised service.
                                    We will inspect your roof to determine all your requirements before providing you with an obligation-free
                                    quote on your traditional or modern roof restoration.
                                </p>
                            </div>
                            <div className='col'>
                                <Img fluid={data.image.childImageSharp.fluid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </BodyClassName>
    )
}

export default AboutUs
