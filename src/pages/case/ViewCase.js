import React from "react";
import { Steps, Row, Col, Table, Tag, Upload, Button, Divider } from 'antd';
import { SelectOutlined, DownloadOutlined, SearchOutlined, MoreOutlined } from '@ant-design/icons';
import colors from '../../utils/colors'

const { Step } = Steps;
const { Dragger } = Upload;


//---------------dummy datas---------------
const columns = [
    {
        title: 'Document',
        dataIndex: 'document',
        key: 'doc',
    },
    {
        title: 'Filed by',
        dataIndex: 'filed_by',
        key: 'filed_by',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (status) => (
            <Tag color={colors[status.toLowerCase()]}>
                {status}
            </Tag>
        ),
    },
];

const data = [
    {
        key: '1',
        document: 'Form 23 Application for leave',
        filed_by: 'B.L.Rabbit',
        date: '1 December 2019',
        status: 'Lodged',
    },
    {
        key: '2',
        document: 'Reasons for decision of Court...',
        filed_by: 'B.L.Rabbit',
        date: '1 Janary 2019',
        status: 'Lodged',
    },
    {
        key: '3',
        document: 'Document ABC',
        filed_by: 'B.L.Rabbit',
        date: '1 Janary 2019',
        status: 'Withdrawn',
    },
    {
        key: '4',
        document: 'Document DEF',
        filed_by: 'B.L.Rabbit',
        date: '1 Janary 2019',
        status: 'Lodged',
    },
];
//-----------------------------------------

class ViewCase extends React.Component {
    render() {
        return (
            <div>
                <div className="box">
                    <p className="title" style={{ display: 'inline' }}>Tim Tom Ltd v. Too Too Pty Ltd</p>
                    <span className="box-title" style={{ paddingLeft: 24 }}>DOC-23892</span>
                    <Steps current={1} className="case-step">
                        <Step title="Lodged" description="1 January 2019" />
                        <Step title="Filed" description="In Progress" />
                        <Step title="Listed" description="Not Started" />
                        <Step title="Finalised" description="Not Started" />
                    </Steps>
                </div>
                <Row style={{ paddingTop: 20 }} gutter={[20]}>
                    <Col span={14}>
                        <div className="box">
                            <p className="box-title">
                                Court file
                            </p>
                            <Table
                                pagination={false}
                                columns={columns}
                                dataSource={data} />
                            <br />
                        </div>
                    </Col>
                    <Col span={10}>
                        <div className="box" style={{ padding: 10 }}>
                            <div style={{ textAlign: 'end' }}>
                                <Button className="button1" type="default" shape="circle" icon={<DownloadOutlined />} size="middle" />
                                <Button className="button1" type="default" shape="circle" icon={<SearchOutlined />} size="middle" />
                                <Button className="button1" type="default" shape="circle" icon={<MoreOutlined />} size="middle" />
                            </div>
                            <Divider style={{margin: "10px 0"}}/>
                            <div style={{ paddingLeft: 65, paddingRight: 65, paddingTop: 30, paddingBottom: 30 }}>
                                <Dragger>
                                    <p className="ant-upload-drag-icon">
                                        <SelectOutlined style={{color: '#595959'}}/>
                                    </p>
                                    <p className="ant-upload-text">Select a file for display</p>
                                    <br />
                                </Dragger>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ViewCase;