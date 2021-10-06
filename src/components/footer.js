// import { Link } from "gatsby"
// import PropTypes from "prop-types"

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const Footer1 = ( {aboutInfo} ) => {
 
  return (
    <div className = "footer-wrapper">
      <Container className ="pt-10">
        <Row noGutters className="">
          <Col className="col-sm-4 ">
            <h6>About</h6>
             <p>{aboutInfo}</p>
          </Col>
          <Col className="col-sm-2">
            <h6> Blank</h6>
          </Col>
          <Col className="col-sm-2">
            <h6> Third</h6>
          </Col>
          <Col className="col-sm-2">
            <h6> Fourth</h6>
          </Col>
          <Col className="col-sm-2">
            <h6> Fifth</h6>
          </Col>
        </Row>
      </Container>
    </div>
  )
}





 const Footer = () => (
<StaticQuery
query={graphql`
  query HeadingQuery {
    markdownRemark {
      html 
      
    }
  }
`}

render={data => (

  <div className = "footer-wrapper">
  <Container className ="pt-10">
    <Row noGutters className="">
      <Col className="col-sm-4 ">
        <h6>About</h6>
         <p>{/* {aboutInfo} */}</p>
         <div dangerouslySetInnerHTML= {{ __html: data.markdownRemark.html}}/>
      </Col>
      <Col className="col-sm-2">
        <h6> Blank</h6>
      </Col>
      <Col className="col-sm-2">
        <h6> Third</h6>
      </Col>
      <Col className="col-sm-2">
        <h6> Fourth</h6>
      </Col>
      <Col className="col-sm-2">
        <h6> Fifth</h6>
      </Col>
    </Row>
  </Container>
 </div>
)}
/>
 )



  /* {/* <>
    <Container fluid className="px-0">
      <Row noGutters>
        <Col className="footer-col">
          <footer1>
            <span>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </span>
          </footer1>
        </Col>
      </Row>
    </Container>
    </>
    )}
  /> */
 

export default Footer
