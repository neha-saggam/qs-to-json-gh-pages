import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Card
} from "react-bootstrap";
import queryStringToJson from "qs-to-json";

export default class MainComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      queryString: "&a=1&b=2",
      json: ""
    };
  }

  handleChange = event => {
    this.setState({ queryString: event.target.value });
  };

  convertToJSON = () => {
    const json = queryStringToJson(this.state.queryString);
    this.setState({ json });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Query String
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="queryString"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange}
                value={this.state.queryString}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Button variant="primary" onClick={this.convertToJSON}>Convert To JSON</Button>
          </Col>
        </Row>
        {!JSON.stringify(this.state.json.length) &&
        <Row style={{marginTop: "2%"}}> 
            <Col md={{ span: 4, offset: 4 }}>
                <Card>
                    <Card.Body>{JSON.stringify(this.state.json)}</Card.Body>
                </Card>
            </Col>
        </Row>
        }
      </Container>
    );
  }
}
