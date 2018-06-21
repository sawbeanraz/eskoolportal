import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getStudent } from "../../actions/studentActions";
import Spinner from "../../components/Spinner";
import Main from "../layouts/Main";

import Moment from "react-moment";

class StudentProfile extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getStudent(id);
  }

  render() {
    const { student } = this.props.student;

    if (!student) return null;

    return (
      <Main>
        <div className="row wrapper border-bottom white-bg page-heading">
          <div className="col-lg-9 pb-3 pt-3">
            <h2>Student Profile</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/Students/">Student</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {student ? student.name : <Spinner />}
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="ibox">
          <div className="ibox-content">
            <div className="row">
              <div className="col-12">
                <Link
                  to={`/students/${student._id}/edit`}
                  className="btn btn-white btn-xs pull-right"
                >
                  Edit
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <dl className="row">
                  <dt className="col-sm-4">Name:</dt>
                  <dd className="col-sm-8">{student.name}</dd>
                  <dt className="col-sm-4">Gender:</dt>
                  <dd className="col-sm-8">{student.gender}</dd>
                  <dt className="col-sm-4">Date of Birth:</dt>
                  <dd className="col-sm-8">
                    <Moment format="DD/MM/YYYY">{student.dateOfBirth}</Moment>
                  </dd>
                  <dt className="col-sm-4">Age:</dt>
                  <dd className="col-sm-8">
                    <Moment diff={student.dateOfBirth} unit="years">
                      {new Date()}
                    </Moment>
                  </dd>

                  <dt className="col-sm-4">Contact No</dt>
                  <dd className="col-sm-8">{student.contactNo}</dd>
                  <dt className="col-sm-4">Email</dt>
                  <dd className="col-sm-8">{student.email}</dd>
                  <dt className="col-sm-4">Address</dt>
                  <dd className="col-sm-8">{student.address}</dd>
                </dl>
              </div>
              {/* 
                TODO: Add Join date/ Class and Section on student collection
              <div className="col-lg-5" id="cluster_info">
                <dl className="row">
                  <dt className="col-sm-4">Join Date:</dt>
                  <dd className="col-sm-8">25/10/2012</dd>
                  <dt className="col-sm-4">Class:</dt>
                  <dd className="col-sm-8">10</dd>
                  <dt className="col-sm-4">Section:</dt>
                  <dd className="col-sm-4">C</dd>
                </dl>
              </div> */}
            </div>
          </div>
        </div>
      </Main>
    );
  }
}

StudentProfile.propType = {
  student: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  student: state.student
});

export default connect(
  mapStateToProps,
  { getStudent }
)(StudentProfile);
