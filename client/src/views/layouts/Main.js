import React from "react";
// import Progress from "../common/Progress";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import { correctHeight, detectBody } from "./Helpers";

class Main extends React.Component {
  render() {
    // let wrapperClass = "gray-bg " + this.props.location.pathname;
    return (
      <div id="wrapper">
        {/* <Progress /> */}
        <Navigation location={this.props.location} />

        <div id="page-wrapper">
          <Header />

          {this.props.children}

          <Footer />
        </div>
      </div>
    );
  }

  componentDidMount() {
    // Run correctHeight function on load and resize window event
    // $(window).bind("load resize", function() {
    //   correctHeight();
    //   detectBody();
    // });
    // Correct height of wrapper after metisMenu animation.
    // $(".metismenu a").click(() => {
    //   setTimeout(() => {
    //     correctHeight();
    //   }, 300);
    // });
  }
}

export default Main;
