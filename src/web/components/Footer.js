import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => (
  <footer className="mt-5">
    <Row>
      <Col sm="12" className="text-right pt-3">
        <p>
          Aceda nosso sítio web <a target="_blank" rel="noopener noreferrer" href="http:www.integer.pt">Integer.pt</a> &nbsp; | &nbsp; Written and Maintained by <a target="_blank" rel="noopener noreferrer" href="https://">Jose Barros</a>.
        </p>
      </Col>
    </Row>
  </footer>
);

export default Footer;
