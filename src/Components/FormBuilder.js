import $ from "jquery";
import React, { Component, createRef } from "react";
import SideBar from "../Components/dashboard/sidebar/Sidebar";

import Navbar from "../Components/dashboard/navbar/Navbar";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const formData = [
];
class FormBuilder extends Component {
    fb = createRef();
    componentDidMount() {
        console.log(this.fb);

        let options = {
            formData: formData,
            disabledActionButtons: ["clear", "data"],

            onSave: function (evt, formData) {
                console.log("formbuilder saved");
                console.log(formBuilder.formData);
                $(".render-wrap").formRender({ formData });
                localStorage.setItem("formData", JSON.stringify(formData));
            }
        };
        var fbEditor = this.fb.current;
        var formBuilder = $(fbEditor).formBuilder(options);
    }
    render() {
        return (
            <div className="home">
                    <SideBar />
                <div className="homeContainer">
                    <Navbar />
                        <Card>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Title>Give a name to your Form</Card.Title>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Form Name : </Form.Label>
                                        <br />
                                        <Form.Control type="text" placeholder="Enter name" area-required />

                                    </Form.Group>
                                </Form>
                                <div id="fb-editor" ref={this.fb} />
                            </Card.Body>
                        </Card>
                   
                </div>
                </div>
            )
    };
}
export default FormBuilder;