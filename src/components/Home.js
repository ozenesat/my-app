import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from './button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

import axios from 'axios'

const Home = () => {

  const [weather, setWeather] = useState({ city: '', state: '', country: '' })

  const handleChange = event => {
    event.persist()
    setWeather(weather => ({ ...weather, [event.target.name]: event.target.value }))
  }

  const [result, setResult] = useState({
    main: {
      temp: '',
      humidity: '',
      feels_like: ''
    },
    name: ''
  })

  const handleSubmit = event => {
    const api = {
      url: "https://api.openweathermap.org/data/2.5/",
      key: "1a1715229f610f4b01ce2654fbf4a6f7"
    }
    event.preventDefault()
    axios.get(`${api.url}weather?q=${weather.city},${weather.country}&units=metric&APPID=${api.key}`)
      .then(res => setResult( res.data ))
      .catch(error => {
        console.log(error);
      }, [])
  }

  const homeStyle = {
    background: 'linear-gradient(90deg, rgba(7,62,156,1) 52%, rgba(0,212,255,1) 100%)',
    backgroundSize: 'Cover',
    height: '100vh',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: '2rem',
    borderRadius: '20rem'
  }
  const h1Style = {
    textAlign:'center',
    fontSize: '3rem',
    padding: '3rem'
  }

  const resultStyle = {
    backgroundColor: 'transparent',
    color: 'white',
    border: '0',
    textAlign: 'left'
  }
  return (
    <div>

    <Container>
    <h1 style={h1Style}> Weather App </h1>
    <Row style={homeStyle}>
        <Col xs={6} md={4}>
          <Image src="./eee.jpeg" style={{borderRadius: '20rem'}} fluid/>
        </Col>
      <div>
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                placeholder="City"
                name="city"
                value = {weather.city}
                onChange = {handleChange}
              />
            </Form.Group>
            <Form.Group controlId="country">
              <Form.Label>State</Form.Label>
              <Form.Control
                placeholder="State"
                name="state"
                value ={weather.state}
                onChange = {handleChange}
              />
            </Form.Group>
            <Form.Group controlId="Country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                required
                placeholder="Country"
                name="country"
                value ={weather.country}
                onChange = {handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
            Get Weather
            </Button>
          </Form>
        </div>
      </div>
      <ListGroup>
        <ListGroup.Item style={resultStyle}>Location: {result.name} </ListGroup.Item>
        <ListGroup.Item style={resultStyle}>Temperature: {result.main.temp} °C</ListGroup.Item>
        <ListGroup.Item style={resultStyle}>Humidity: {result.main.humidity}</ListGroup.Item>
        <ListGroup.Item style={resultStyle}>Feels like:{result.main.feels_like} °C</ListGroup.Item>
      </ListGroup>
    </Row>
    </Container>
    </div>
  )
}

export default Home
