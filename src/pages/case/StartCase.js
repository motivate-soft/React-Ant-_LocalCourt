import React from "react";
import {
    Form,
    Button,
    Select,
    DatePicker,
    Row,
    Col,
    Upload,
} from 'antd';

import { FilePdfTwoTone, PlusCircleTwoTone } from '@ant-design/icons';
import AddApplicants from '../../dialogs/AddApplicants'
import AddRespondents from '../../dialogs/AddRespondents'

const { Dragger } = Upload;

class StartCase extends React.Component {
    state = {
        addApplicantsModalVisible: false,
        addRespondentsModalVisible: false
    };

    onAddApplicantsClicked = () => {
        console.log("clicked");
        this.setState({
            addApplicantsModalVisible: true,
        });
    };

    addApplicantsModalOk = e => {
        console.log(e);
        this.setState({
            addApplicantsModalVisible: false,
        });
    };

    addApplicantsModalCancel = e => {
        console.log(e);
        this.setState({
            addApplicantsModalVisible: false,
        });
    };

    onAddRespondentsClicked = () => {
        console.log("clicked");
        this.setState({
            addRespondentsModalVisible: true,
        });
    };

    addRespondentsModalOk = e => {
        console.log(e);
        this.setState({
            addRespondentsModalVisible: false,
        });
    };

    addRespondentsModalCancel = e => {
        console.log(e);
        this.setState({
            addRespondentsModalVisible: false,
        });
    };

    render() {
        return (
            <div className="box">
                <p className="box-title1">
                    Start a Case
                </p>

                <Form
                    style={{ paddingTop: 10 }}
                    layout="vertical"
                >
                    <Row gutter={[50]}>
                        <Col span={10}>
                            <Form.Item
                                name="registry"
                                label="Registry"
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select your registry',
                                    },
                                ]}
                            >
                                <Select placeholder="Select">
                                    <Select.Option value="reg1">Registry1</Select.Option>
                                    <Select.Option value="reg2">Registry2</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="docType" label="Document Type">
                                <Select placeholder="Select">
                                    <Select.Option value="doc1">Document Type1</Select.Option>
                                    <Select.Option value="doc2">Docuemnt Type2</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="caseType" label="Case Type">
                                <Select placeholder="Select">
                                    <Select.Option value="case1">Case Type1</Select.Option>
                                    <Select.Option value="case2">Case Type2</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="civil" label="Civil/Criminal">
                                <Select placeholder="Select">
                                    <Select.Option value="civil1">Civil1</Select.Option>
                                    <Select.Option value="civil2">Civil2</Select.Option>
                                </Select>
                            </Form.Item>
                            <p className="box-title1">
                                Party Details
                            </p>
                            <Form.Item>
                                <Button className="long-button" style={{ color: '#0446DF' }} onClick={this.onAddApplicantsClicked}>
                                    <span style={{ float: 'left' }}>Add Applicants</span>
                                    <PlusCircleTwoTone className="inside-icon" />
                                </Button>
                                <AddApplicants
                                    visible={this.state.addApplicantsModalVisible}
                                    onOk={this.addApplicantsModalOk}
                                    onCancel={this.addApplicantsModalCancel} />
                            </Form.Item>
                            <Form.Item>
                                <div className="box1"
                                    style={{ background: '#E6F7FF'}}>
                                    <div style={{display: 'flow-root', padding: "5px 15px"}}>
                                        <span style={{ float: 'left', fontWeight: 'bold' }}>Applicant names</span>
                                        <a href='#' style={{float:'right'}}>View more</a>
                                    </div>
                                    <div style={{height: 1, background: '#d8d2d0'}}/>
                                    <div style={{padding: "5px 15px"}}>
                                        <span>Jane Smith</span>
                                        <br/>
                                        <span>John Doe</span>
                                    </div>

                                </div>
                            </Form.Item>
                            <Form.Item>
                                <Button className="long-button" style={{ color: '#0446DF' }} onClick={this.onAddRespondentsClicked}>
                                    <span style={{ float: 'left' }}>Add Respondents</span>
                                    <PlusCircleTwoTone className="inside-icon" />
                                </Button>
                                <AddRespondents
                                    visible={this.state.addRespondentsModalVisible}
                                    onOk={this.addRespondentsModalOk}
                                    onCancel={this.addRespondentsModalCancel} />
                            </Form.Item>
                            <Form.Item>
                                <div className="box1"
                                    style={{ background: '#E6F7FF'}}>
                                    <div style={{display: 'flow-root', padding: "5px 15px"}}>
                                        <span style={{ float: 'left', fontWeight: 'bold' }}>Respondent names</span>
                                        <a href='#' style={{float:'right'}}>View more</a>
                                    </div>
                                    <div style={{height: 1, background: '#d8d2d0'}}/>
                                    <div style={{padding: "5px 15px"}}>
                                        <span>Jane Smith</span>
                                        <br/>
                                        <span>John Doe</span>
                                    </div>

                                </div>
                            </Form.Item>


                            <p className="box-title1">
                                Tell us about the Matter
                            </p>
                            <Form.Item
                                name="jurisdiction"
                                label="Jurisdiction"
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select jurisdiction',
                                    },
                                ]}
                            >
                                <Select placeholder="Select">
                                    <Select.Option value="jur1">Jurisdiction1</Select.Option>
                                    <Select.Option value="jur2">Jurisdiction2</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="lower_court" label="Lower Court">
                                <Select placeholder="Select">
                                    <Select.Option value="court1">Court1</Select.Option>
                                    <Select.Option value="court2">Court2</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Date of Judgment">
                                <DatePicker />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <div className="box1">
                                <div style={{ paddingLeft: 65, paddingRight: 65, paddingTop: 80, paddingBottom: 30 }}>
                                    <p style={{ textAlign: 'center' }}>Your file will display here once uploaded</p>
                                    <Dragger>
                                        <p className="ant-upload-drag-icon">
                                            <FilePdfTwoTone />
                                        </p>
                                        <p className="ant-upload-text">Drag & Drop</p>
                                        <a href="#" style={{ color: '#0446FF' }}>or click to add your PDF file to initiate the case</a>
                                        <br />
                                    </Dragger>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            File Case
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default StartCase;