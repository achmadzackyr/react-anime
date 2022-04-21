import React from 'react';
import { Container, Table, Row, Col, Pagination } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import { Navibar } from '../../organism';
import { Image, Anchor } from '../../atom';

const Detail = (props) => {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  return (
    <>
      <Navibar />
      <Container>
        <Row>
          <Col>
            <Link to="/">Home</Link> / Detail / {data.title}
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="3">
            <Image src={data.images.jpg.large_image_url} class="img-fluid" />
          </Col>
          <Col md="6">
            <Row>
              <Col>
                <h2>{data.title}</h2>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                {data.genres &&
                  data.genres.map((data) => (
                    <span className="border px-2 py-1 m-1">{data.name}</span>
                  ))}
              </Col>
            </Row>
            <Row>
              <Col>{data.synopsis}</Col>
            </Row>
            <Row>
              <Col>
                Source: <Anchor href={data.url} target={'_blank'} text={data.url} />
              </Col>
            </Row>
          </Col>
          <Col md="3">
            <Row>
              <Col md="3">Rating: </Col>
              <Col md="9">{data.rating}</Col>
            </Row>
            <Row>
              <Col md="3">Status: </Col>
              <Col md="9">{data.status}</Col>
            </Row>
            <Row>
              <Col md="3">Source: </Col>
              <Col md="9">{data.source}</Col>
            </Row>
            <Row>
              <Col md="3">Type: </Col>
              <Col md="9">{data.type}</Col>
            </Row>
            <Row>
              <Col md="3">Duration: </Col>
              <Col md="9">{data.duration}</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
