import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BodyClassName from "react-body-classname"

const IndexPage = () => (
  <BodyClassName className="my-index">
    <Layout footerClassName="bottom_0">
      <SEO title="Everest Roofings" />
      <div className="homepage_gradient"></div>
      <div className="hompage_heading">
        {/* <div> */}
        <p className="heading_one">Roofs built to last longest</p>
        <p className="heading_one_caption">We make modern roofs by the industry experts</p>
        {/* </div> */}
        <Link to='/services'>
          <div className="learn_more">
            Learn More
      </div>
        </Link>
      </div>
    </Layout>
  </BodyClassName>
)

export default IndexPage
