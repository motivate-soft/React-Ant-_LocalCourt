import React from 'react';
import { Modal, Button, Form, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

class AddRespondents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            partyType: 'company'
        };
    }



    onSave = () => {
        //save applicants to server
        this.props.onOk()
    }

    onPartyTypeChanged = (val) => {
        console.log(val);
        this.setState({
            partyType: val
        });
    }

    render() {
        return (
            <Modal
                visible={this.props.visible}
                onOk={this.props.onOk}
                onCancel={this.props.onCancel}
                header={null}
                footer={null}
                width={"40%"}
                style={{ minWidth: 700 }}
            >
                <p className="title" style={{ color: '#0446DF', paddingTop: 15, paddingBottom: 15 }}>Add Respondents</p>
                <Form
                    style={{ padding: "0 100px" }}
                    layout="vertical"
                    onFinish={this.onSave}
                >
                    <Form.Item
                        name="party_type"
                        label="Party type"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please select party type',
                            },
                        ]}
                    >
                        <Select placeholder="Select" onChange={this.onPartyTypeChanged}>
                            <Select.Option value="company">Company</Select.Option>
                            <Select.Option value="individual">Individual</Select.Option>
                        </Select>
                    </Form.Item>
                    {
                        this.state.partyType === 'company' ?
                            <Form.Item name="company_name" label="Company name">
                                <Input placeholder="Add" />
                            </Form.Item> :
                            <Form.Item name="name" label="First name / Last name">
                                <Input placeholder="First   / Last" />
                            </Form.Item>
                    }
                    <Form.Item name="party_order" label="Party Order">
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item name="self_presented" label="Self Presented">
                        <Select placeholder="Select">
                            <Select.Option value="self1">Self Presented1</Select.Option>
                            <Select.Option value="self2">Self Presented1</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="email" label="Email Contact"
                        hasFeedback
                        rules={[
                            {
                                type: "email",
                                message: 'Please input correct email!',
                            },
                        ]}>
                        <Input placeholder="Add" type="email" />
                    </Form.Item>
                    <Form.Item name="phone_number" label="Phone Contact">
                        <Input placeholder="Add" />
                    </Form.Item>
                    <Form.Item style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>

                    <div style={{ height: 1, background: '#d8d2d0' }} />

                    <div style={{ textAlign: 'right' }}>
                        <Button style={{ color: '#0446FF', padding: 0 }} type="text" icon={<PlusOutlined />}>Add another</Button>
                    </div>

                </Form>
            </Modal>
        );
    }
}

export default AddRespondents;