import React, { useEffect, useState } from 'react';
import animelistlogo from '../../../animelistlogo.png';
import { Navbar, Container, Table, Row, Col, Pagination, Spinner } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(10);
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.jikan.moe/v4/schedules?page=${page}&limit=${limit}`)
      .then(function (response) {
        // handle success
        setSchedules(response.data.data);

        let pageArray = [];
        for (let number = 1; number <= response.data.pagination.items.count; number++) {
          pageArray.push(number);
        }
        setItems(pageArray);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={animelistlogo}
              width="150"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <p>
              Anime list website made with Create React App & React-Bootstrap. The API is from{' '}
              <a href="https://docs.api.jikan.moe" target={'_blank'}>
                https://docs.api.jikan.moe
              </a>
            </p>
            <p>
              Made by{' '}
              <a
                href="https://www.linkedin.com/in/achmad-zacky-rachmatullah-22400589/"
                target={'_blank'}
              >
                Achmad Zacky R
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Pagination bg="dark">
              {items.length > 0 &&
                items.map((data) => (
                  <Pagination.Item key={data} active={data === page} onClick={() => setPage(data)}>
                    {data}
                  </Pagination.Item>
                ))}
            </Pagination>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <Spinner animation="border" variant="dark" />
                ) : (
                  schedules.length > 0 &&
                  schedules.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <img src={data.images.jpg.image_url} width={150} height={150} />
                      </td>
                      <td>
                        {data.title} <br />
                        {data.genres.length > 0 && data.genres.map((g) => `${g.name} `)}
                        <br />
                        {data.type} - {data.status}
                      </td>
                      <td>{data.rating}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
