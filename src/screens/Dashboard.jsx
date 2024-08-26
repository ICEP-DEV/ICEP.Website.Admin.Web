import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import '../styles/style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
// import Button from 'react-bootstrap/Button';
// import {
//     Card,
//     CardBody,
//     CardTitle,
//     Row,
//     Col,
// } from "reactstrap";
import { BsFillPeopleFill, BsPeople, BsLifePreserver, BsCheckCircleFill, BsFillHandThumbsDownFill } from "react-icons/bs";

function Dashboard() {

    return (<div className="main">
        <div id="main-sidebar">
            <Sidebar />
        </div>
        <div id="main-content">
            <h3 className="main-content-page">Dashboard</h3>
            <div id="dash-nav">
                <Card className="inner-dash-nav" style={{ width: '18rem' }}>
                    <Card.Body className="dash-header">
                        <div className="dash-icon" >
                            <BsFillPeopleFill size={30} />
                        </div>
                        <div className="dash-header-info" >
                            <Card.Title>Team</Card.Title>
                            <Card.Title>6</Card.Title>
                        </div>
                    </Card.Body>
                    <Card.Text>
                        <hr />
                        <div className="stats">
                            <i className="far fa-clock" /> Current Team
                        </div>
                    </Card.Text>
                </Card>
                <Card className="inner-dash-nav" style={{ width: '18rem' }}>
                    <Card.Body className="dash-header">
                        <div className="dash-icon" >
                            <BsPeople size={30} />
                        </div>
                        <div className="dash-header-info" >
                            <Card.Title>ICEP Interns</Card.Title>
                            <Card.Title>65</Card.Title>
                        </div>
                    </Card.Body>
                    <hr />
                    <div className="stats">
                        <i className="fas fa-sync-alt" /> Total Interns
                    </div>
                </Card>
                <Card className="inner-dash-nav" style={{ width: '18rem' }}>
                    <Card.Body className="dash-header">
                        <div className="dash-icon" >
                            <BsLifePreserver size={30} />
                        </div>
                        <div className="dash-header-info" >
                            <Card.Title>Active Interns</Card.Title>
                            <Card.Title>20</Card.Title>
                        </div>
                    </Card.Body>
                    <hr />
                    <div className="stats">
                        <i className="fas fa-sync-alt" /> Current
                    </div>
                </Card>
                <Card className="inner-dash-nav" style={{ width: '18rem' }}>
                    <Card.Body className="dash-header">
                        <div className="dash-icon" >
                            <BsCheckCircleFill size={30} />
                        </div>
                        <div className="dash-header-info" >
                            <Card.Title>Completed</Card.Title>
                            <Card.Title>200</Card.Title>
                        </div>
                    </Card.Body>
                    <hr />
                    <div className="stats">
                        <i className="fas fa-sync-alt" /> Interns graduated
                    </div>
                </Card>
                <Card className="inner-dash-nav" style={{ width: '18rem' }}>
                    <Card.Body className="dash-header">
                        <div className="dash-icon" >
                            <BsFillHandThumbsDownFill size={30} />
                        </div>
                        <div className="dash-header-info" >
                            <Card.Title>Not Completed</Card.Title>
                            <Card.Title>1200</Card.Title>
                        </div>
                    </Card.Body>
                    <hr />
                    <div className="stats">
                        <i className="fas fa-sync-alt" /> Left unfinished
                    </div>
                </Card>
            </div>

            {/* <Row>
                <Col lg="2" md="6" sm="6">
                    <Card className="card-stats">
                        <CardBody>
                            <Row>
                                <Col md="4" xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <BsFillPeopleFill />
                                    </div>
                                </Col>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category">Team</p>
                                        <CardTitle tag="p">6</CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="2" md="6" sm="6">
                    <Card className="card-stats">
                        <CardBody>
                            <Row>
                                <Col md="4" xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <BsPeople />
                                    </div>
                                </Col>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category">ICEP Interns</p>
                                        <CardTitle tag="p">1100</CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="2" md="6" sm="6">
                    <Card className="card-stats">
                        <CardBody>
                            <Row>
                                <Col md="4" xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <BsLifePreserver />
                                    </div>
                                </Col>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category">Active Interns</p>
                                        <CardTitle tag="p">1100</CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>

                    </Card>
                </Col>
                <Col lg="2" md="6" sm="6">
                    <Card className="card-stats">
                        <CardBody>
                            <Row>
                                <Col md="4" xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <BsCheckCircleFill />
                                    </div>
                                </Col>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category">Completed</p>
                                        <CardTitle tag="p">1100</CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="2" md="6" sm="6">
                    <Card className="card-stats">
                        <CardBody>
                            <Row>
                                <Col md="4" xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <BsFillHandThumbsDownFill />
                                    </div>
                                </Col>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category">Not Completed</p>
                                        <CardTitle tag="p">1100</CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>*/}
        </div>

        {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>  */}

    </div>)


}

export default Dashboard;