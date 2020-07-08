import React from 'react'
import BodyClassName from 'react-body-classname'
import Layout from '../components/layout'
import ArrowLine from '../components/assets/svg/ArrowLine.svg';
import SEO from '../components/seo';

function contactUs() { 
    //method="POST" data-netlify="true"
    return (
        <BodyClassName className="services-body">
            <Layout>
                <SEO title="Everest Roofings | Contact Us" />

                <div className="services-heading">
                    <h3>Contact Us</h3>
                    <p className="service-intro mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <ArrowLine className="arrow-line" />
                    <div className="container margin-top-50">
                        <div className="row" style={{ alignItems: 'start' }}>
                            <div className="col mt-5">
                                <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
                                    <input type="hidden" name="form-name" value="contact-form" />
                                    
                                    <div className="form-group">
                                        <input type="text" name="fullName" placeholder="Full Name" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Email" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="contact" placeholder="Contact" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="Message" name="message" rows="3" className="form-control"
                                            style={{ height: 'auto' }}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn-submit">Submit</button>
                                </form>
                            </div>
                            <div className="col mt-4" >
                                <p>
                                    Location: Thapathali,Kathmandu,Nepal
                                    <br />
                                    Contact: <a href="tel: +977 9868541472" style={{ color:'#1A73E8'}}>+977 96868541472</a>
                                    <br />
                                    Email: <a href="mailto: shubhambhatta@gmail.com" style={{ color:'#0000CC'}}>shubhambhatta@gmail.com</a>
                                    <br />
                                </p>
                                <div style={{ height: '450px', position: 'relative', width: '100%', overflow: 'hidden' }}>
                                    <iframe title="Company location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.792849861783!2d85.31796437733223!3d27.689595931361914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5ba76ea39822e2a!2sIOE%20Thapathali!5e0!3m2!1sen!2snp!4v1593714651357!5m2!1sen!2snp"
                                        width="600" height="450" frameborder="0" style={{ border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </BodyClassName>
    )
}

export default contactUs
