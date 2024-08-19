import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar'
import '../styles/style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Popup from '../components/Popup';
import { BsFillPeopleFill, BsPeople, BsLifePreserver, BsCheckCircleFill, BsFillHandThumbsDownFill } from "react-icons/bs";
import Modal from 'react-modal';
import { useEffect, useState } from "react";


import "react-datepicker/dist/react-datepicker.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Dashboard() {

    const TimeInterval = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30",
        "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30",
        "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
        "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
        "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

    const AllCampuses = [{ id: 1, campus_name: "Sosha" }, { id: 2, campus_name: "Emalaheni" }, { id: 3, campus_name: "Polokwane" }]
    const AllCourses = [{ id: 1, course_name: "Informatics" }, { id: 2, course_name: "Computer Science" }, { id: 3, course_name: "IT" }]
    const AllApplications = [{ id: 1, startDate: '10/12/2023 00:00', enddate: '15/12/2023 00:00' }]
    const AllApplicationsCourseCampus = [{ id: 1, course: [{ id: 1 }, { id: 2 }], campus: [{ id: 1 }, { id: 2 }] }]

    const [ViewPopup, setViewPopup] = useState(false);
    const [ViewEditPopup, setViewEditPopup] = useState(false);

    const [StartTime, setStartTime] = useState('');
    const [EndTime, setEndTime] = useState('');

    const [StartDate, setStartDate] = useState();
    const [EndDate, setEndDate] = useState();

    const [Campuses, setCampuses] = useState([]);
    const [Courses, setCourses] = useState([]);

    //Edit fields
    const [Selecteddata, setSelecteddata] = useState({});
    // Active applicatios
    const [Active, setActive] = useState(false)


    const [date, setdate] = useState('')
    useEffect(() => {
        var date = new Date();
        var currentDate = date.getFullYear() + '/' + ('0' + date.getMonth()).slice(-2) + '/' + ('0' + date.getDate()).slice(-2);
        setdate(currentDate)

    })

    function handleCampuses(e) {
        if (e.target.checked) {
            setCampuses([...Campuses, e.target.value]);
        } else {
            setCampuses(Campuses.filter((item) => item !== e.target.value));
        }
    }

    function handleCourses(e) {
        if (e.target.checked) {
            setCourses([...Courses, e.target.value]);
        } else {
            setCourses(Courses.filter((item) => item !== e.target.value));
        }
    }

    function edit_popup(data) {
        setSelecteddata(data);
        setViewEditPopup(true);
    }

    const submit = () => {

        if (StartDate === '') {
            alert('Select starting date')
            return;
        }
        if (StartTime === '') {
            alert('Select starting time')
            return;
        }
        if (EndDate === '') {
            alert('Select ending date')
            return;
        }
        if (EndTime === '') {
            alert('Select starting time')
            return;
        }
        if (StartDate > EndDate) {
            alert('Start date should no be ahead of end date');
            return;
        }
        if (Campuses.length === 0) {
            alert('Select the campus')
            return;
        }
        if (Courses.length === 0) {
            alert('Select the campus')
            return;
        }

        var data = {
            startDate: StartDate,
            enddate: EndDate,
            startTime: StartTime,
            endTime: EndTime,
            courses: Courses,
            campuses: Campuses
        }
        console.log(data);

    }



    let applicationForm = <>
        <h4 style={{ textAlign: 'center', backgroundColor: '#3399d3', height: '50px', padding: '10px' }}>Add New Application</h4>
        <div className="group-form">
            <h6>Specify Start and End Date</h6>
            <div id="form-dates">
                <div className="form-date">
                    <label>Start Date and Time</label>
                    <div className="dateTime">
                        <input type="date" onChange={(date) => setStartDate(date.target.value)} />
                        <select onChange={(event) => setStartTime(event.target.value)}>
                            <option value=''>---</option>
                            {TimeInterval.map((time, xid) => (
                                <option key={xid} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>

                </div>
                <div className="form-date">
                    <label>End Date and Time</label>
                    <div className="dateTime">
                        <input type="date" onChange={(date) => setEndDate(date.target.value)} />
                        <select onChange={(event) => setEndTime(event.target.value)}>
                            <option value=''>---</option>
                            {TimeInterval.map((time, xid) => (
                                <option key={xid} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div className="group-form">
            <h6>Select campus(es)</h6>
            <div>
                {AllCampuses.map((campus, xid) => (
                    <span key={xid} >
                        <label className="checkCampusLabel"><input type="checkbox" className="checkCampus" value={campus.id} onChange={(e) => handleCampuses(e)}
                            id={campus.id}
                            name={campus.id} />{campus.campus_name} </label>
                    </span>

                ))}
            </div>
        </div>

        <div className="group-form">
            <h6>Select cours(es)</h6>
            <div>
                {AllCourses.map((course, xid) => (
                    <span key={xid} >
                        <label className="checkCampusLabel"><input type="checkbox" className="checkCampus" value={course.id} onChange={(e) => handleCourses(e)}
                            id={course.id}
                            name={course.id} />{course.course_name} </label>
                    </span>

                ))}
            </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button onClick={submit} className="btn btn-block btn-primary">Submit</button>
        </div>
    </>

    let editappication = <>
        <h4 style={{ textAlign: 'center', backgroundColor: '#3399d3', height: '50px', padding: '10px' }}>Edit Application</h4>
        <div className="group-form">
            <h6>Start and End Date</h6>
            <div id="form-dates">
                <div className="form-date">
                    <label>Start Date and Time</label>
                    <div className="dateTime">
                        <input type="date" onChange={(date) => setStartDate(date.target.value)} value={date} name={date} />
                        <select onChange={(event) => setStartTime(event.target.value)}>
                            <option value={date} disabled selected>{date}</option>
                            {TimeInterval.map((time, xid) => (
                                <option key={xid} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-date">
                    <label>End Date and Time</label>
                    <div className="dateTime">
                        <input type="date" onChange={(date) => setEndDate(date.target.value)} />
                        <select onChange={(event) => setEndTime(event.target.value)}>
                            <option value='' disabled selected>---</option>
                            {TimeInterval.map((time, xid) => (
                                <option key={xid} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div className="group-form">
            <h6>Select campus(es)</h6>
            <div>
                {AllCampuses.map((campus, xid) => (
                    <span key={xid} >
                        <label className="checkCampusLabel"><input type="checkbox" className="checkCampus" value={campus.id} onChange={(e) => handleCampuses(e)}
                            id={campus.id}
                            name={campus.id} />{campus.campus_name} </label>
                    </span>

                ))}
            </div>
        </div>

        <div className="group-form">
            <h6>Select cours(es)</h6>
            <div>
                {AllCourses.map((course, xid) => (
                    <span key={xid} >
                        <label className="checkCampusLabel"><input type="checkbox" className="checkCampus" value={course.id} onChange={(e) => handleCourses(e)}
                            id={course.id}
                            name={course.id} />{course.course_name} </label>
                    </span>

                ))}
            </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button onClick={submit} className="btn btn-block btn-primary">Submit</button>
        </div>
    </>

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

            <div id="start-application">
                <button onClick={() => setViewPopup(true)}>Open Application</button>
                <Popup trigger={ViewPopup} setTrigger={setViewPopup}>{applicationForm}</Popup>
                <button onClick={() => setViewEditPopup(true)}>Edit Application</button>
                <Popup trigger={ViewEditPopup} setTrigger={setViewEditPopup}>{editappication}</Popup>

            </div>
            <div style={{ margin: '10px' }}>
                <button disabled={Active} onClick={() => setActive(true)} style={{ backgroundColor: '', margin: '10px' }}>Active</button>
                <button disabled={!Active} onClick={() => setActive(false)} style={{ backgroundColor: '', margin: '10px' }}>Closeed</button>
            </div>
            <div className="cards">
                <Card style={{ width: '18rem' }}>
                    {AllApplications.map((applic, xid) => (
                        <Card.Body key={xid}>
                            <Card.Subtitle className="mb-2 text-muted"> Start date : {applic.startDate}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"> End date &ensp;: {applic.enddate}</Card.Subtitle>
                            {!Active && <>
                                {/* <label onClick={() => edit_popup(applic)}>Edit</label>&emsp; */}
                                <label >Edit</label>&emsp;
                                <label >Delete</label>
                            </>

                            }
                        </Card.Body>
                    ))}

                </Card>
            </div>
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