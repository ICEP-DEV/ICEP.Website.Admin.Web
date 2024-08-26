import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import { BsFileEarmarkPdfFill } from "react-icons/bs";
function Applicants() {
    const Students = [{ studentId: "123456789", firstname: "James", lastname: "makena", idNo: "0123456789456", campus: "soshanguve", course: "developer", oustanding: true, gender: 'male' },
    { studentId: "123456789", firstname: "letta", lastname: "Nako", idNo: "01631456789456", campus: "emalahleni", course: "developer", oustanding: false, gender: "female" },
    { studentId: "545445656", firstname: "karabo", lastname: "scott", idNo: "01631456789456", campus: "soshanguve", course: "infomatics", oustanding: false, gender: "female" },
    { studentId: "845352312", firstname: "hlogi", lastname: "mahlangu", idNo: "01631456789456", campus: "emalahleni", course: "developer", oustanding: false, gender: "male" },
    { studentId: "214578636", firstname: "buti", lastname: "nape", idNo: "01631456789456", campus: "soshanguve", course: "infomatics", oustanding: false, gender: "male" },
    { studentId: "369874521", firstname: "joel", lastname: "nkosi", idNo: "01631456789456", campus: "polokwane", course: "developer", oustanding: false, gender: "female" },
    { studentId: "455454515", firstname: "given", lastname: "scott", idNo: "01631456789456", campus: "emalahleni", course: "developer", oustanding: false, gender: "female" },
    { studentId: "145236987", firstname: "joan", lastname: "Nako", idNo: "01631456789456", campus: "soshanguve", course: "developer", oustanding: false, gender: "male" },
    { studentId: "365475892", firstname: "suppi", lastname: "themba", idNo: "01631456789456", campus: "emalahleni", course: "infomatics", oustanding: false, gender: "female" },
    { studentId: "455487784", firstname: "angie", lastname: "vusi", idNo: "01631456789456", campus: "soshanguve", course: "developer", oustanding: false, gender: "male" },
    { studentId: "236569548", firstname: "busi", lastname: "scott", idNo: "01631456789456", campus: "polokwane", course: "infomatics", oustanding: false, gender: "male" },
    ]
    return (
        <div className="main">
            <div id="main-sidebar">
                <Sidebar />
            </div>
            <div id="main-content">
                <h3 className="main-content-page">Applications</h3>
                <div className="main-content-details">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-danger">Reject</button>
                    <table id="students">
                        <thead>
                            <th>mark</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Student No</th>
                            <th>Id No</th>
                            <th>Gender</th>
                            <th>Campus</th>
                            <th>Course</th>
                            <th>CV</th>
                            <th>Letter</th>

                        </thead>
                        <tbody>
                            {Students.map((student, xid) => (
                                <tr key={xid}>
                                    <td>
                                        <input type="checkbox" /></td>
                                    <td>{student.firstname}</td>
                                    <td>{student.lastname}</td>
                                    <td>{student.studentId}</td>
                                    <td>{student.idNo}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.campus}</td>
                                    <td>{student.course}</td>
                                    <td><BsFileEarmarkPdfFill size={20} onClick={() => window.open("https://www.tut.ac.za/media/docs/ICT_Prospectus_2024.pdf")} /></td>
                                    <td><BsFileEarmarkPdfFill size={20} onClick={() => window.open("https://www.tut.ac.za/media/docs/ICT_Prospectus_2024.pdf")} /></td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default Applicants;