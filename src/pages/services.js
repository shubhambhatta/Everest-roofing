import React from 'react'
import Layout from '../components/layout'
import BodyClassName from 'react-body-classname'
import ArrowLine from '../components/assets/svg/ArrowLine.svg';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import SEO from '../components/seo';

function Services() {
    const data = useStaticQuery(graphql`
    query Images{
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
                <SEO title="Everest Roofings | Services" />
                
                <div className="services-heading">
                    <h3>Ower Services</h3>
                    <p className="service-intro mb-4">From modern solar roof installments to mess kitchen you will get it done all in one place.
                        Our specialist will take care of all your troubles with eaes.
                        We can provide services in the following areas.
                    </p>
                    <ArrowLine className="arrow-line" />
                </div>
                <div className="container" >
                    <div className="row flex-reverse margin-top-50">
                        <div className='col'>
                            <h4>Roof Restoration</h4>
                            <p>
                                We have the expertise to take care of all your roofing requirements. 
                                Re-bedding, re-pointing of ridge capping and complete roof restorations; our team of professionals provides a personalised service. 
                                We will inspect your roof to determine all your requirements before providing you with an obligation-free 
                                quote on your traditional or modern roof restoration.
                            </p>
                        </div>
                        <div className='col'>
                            {/* <img src={DefaultImage} alt="our_services" /> */}
                            <Img fluid={data.image.childImageSharp.fluid}/>
                        </div>
                    </div>
                    <div className="row margin-top-50">
                        <div className='col'>
                            <h4>Roof Restoration</h4>
                            <p>
                                We have the expertise to take care of all your roofing requirements. 
                                Re-bedding, re-pointing of ridge capping and complete roof restorations; our team of professionals provides a personalised service. 
                                We will inspect your roof to determine all your requirements before providing you with an obligation-free 
                                quote on your traditional or modern roof restoration.
                            </p>
                        </div>
                        <div className='col'>
                            <Img fluid={data.image.childImageSharp.fluid}/>
                        </div>
                    </div>
                    <div className="row flex-reverse margin-top-50">
                        <div className='col'>
                            <h4>Roof Restoration</h4>
                            <p>
                                We have the expertise to take care of all your roofing requirements. 
                                Re-bedding, re-pointing of ridge capping and complete roof restorations; our team of professionals provides a personalised service. 
                                We will inspect your roof to determine all your requirements before providing you with an obligation-free 
                                quote on your traditional or modern roof restoration.
                            </p>
                        </div>
                        <div className='col'>
                            <Img fluid={data.image.childImageSharp.fluid}/>
                        </div>
                    </div>
                </div>
            </Layout>
        </BodyClassName>
    )
}

export default Services
