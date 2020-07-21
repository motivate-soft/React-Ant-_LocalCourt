import React from "react";
import { Row, Col, Form, Select, Input, Button } from 'antd';


class PersonalDetails extends React.Component {
    render() {
        return (
            <div style={{ width: "40%" }}>
                <p className="box-title1">
                    Personal details
                </p>
                <Form
                    style={{ paddingTop: 10 }}
                    layout="vertical"
                >
                    <Form.Item
                        name="email"
                        label="Email address"
                        hasFeedback
                        rules={[
                            {
                                type: "email",
                                message: 'Please input your email',
                            },
                        ]}
                    >
                        <Input placeholder="Add" />
                    </Form.Item>

                    <Form.Item name="first_name" label="First name">
                        <Input placeholder="First name" />
                    </Form.Item>

                    <Form.Item name="sur_name" label="Surname">
                        <Input placeholder="Surname" />
                    </Form.Item>

                    <Form.Item name="address" label="Address for service">
                        <Input placeholder="Address for service" />
                    </Form.Item>

                    <Row gutter={[20]}>
                        <Col span={12}>
                            <Form.Item name="state" label="State">
                                <Select placeholder="Select">
                                    <Select.Option value="state1">State1</Select.Option>
                                    <Select.Option value="state2">State2</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="postcode" label="Postcode">
                                <Input placeholder="Add" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item name="contact_number" label="Contact number">
                        <Input placeholder="Add" />
                    </Form.Item>

                    <br />
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Update personal details
                        </Button>
                    </Form.Item>
                </Form>
            </div >

        );
    }
}

export default PersonalDetails;