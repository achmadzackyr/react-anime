import React, { useEffect, useState } from 'react';
import { Container, Table, Row, Col, Pagination } from 'react-bootstrap';
import axios from 'axios';
import { Navibar } from '../../organism';
import { Loading, Anchor } from '../../atom';
import { Link } from 'react-router-dom';
import { Image } from '../../atom';

const Home = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.jikan.moe/v4/schedules?page=${page}&limit=10`)
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
      <Navibar />
      <Container>
        <Row>
          <Col>
            <p>
              Anime list website made with Create React App & React-Bootstrap. The API is from{' '}
              <Anchor
                href={'https://docs.api.jikan.moe'}
                target={'_blank'}
                text={'https://docs.api.jikan.moe'}
              />
            </p>
            <p>
              Made by{' '}
              <Anchor
                href={'https://www.linkedin.com/in/achmad-zacky-rachmatullah-22400589/'}
                target={'_blank'}
                text={'Achmad Zacky R'}
              />
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
                  <Loading />
                ) : (
                  schedules.length > 0 &&
                  schedules.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <Image src={data.images.jpg.image_url} width={150} height={150} />
                      </td>
                      <td>
                        <Link to="/detail" state={{ data }}>
                          {data.title}
                        </Link>{' '}
                        <br />
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
