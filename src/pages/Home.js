import React from "react";
import { Link } from 'react-router-dom';
import { Breadcrumb, Row, Col, Tag, Space } from 'antd';
import {
    ReconciliationTwoTone,
} from '@ant-design/icons';
import ComplexTable from '../components/ComplexTable'
import colors from '../utils/colors'

//---------------dummy datas---------------

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Created',
        dataIndex: 'created_at',
        key: 'created_at',
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
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Link to={{
                    pathname: `/cases`,
                    query: { tabKey: 'view_case'}
                }}>View</Link>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        title: 'Applicant ABC v. Lawyer DEF',
        number: 'DOC-29834',
        created_at: '1 Janary 2019',
        status: 'Lodged',
    },
    {
        key: '2',
        title: 'Applicant ABC v. Lawyer DEF',
        number: 'DOC-29834',
        created_at: '1 Janary 2019',
        status: 'Lodged',
    },
    {
        key: '3',
        title: 'McGee & Sons v. Sons',
        number: 'DOC-49588',
        created_at: '7 July 2019',
        status: 'Withdrawn',
    },
    {
        key: '4',
        title: 'Applicant ABC v. Lawyer DEF',
        number: 'DOC-29834',
        created_at: '1 Janary 2019',
        status: 'Lodged',
    },
    {
        key: '5',
        title: 'Applicant ABC v. Lawyer DEF',
        number: 'DOC-29834',
        created_at: '1 Janary 2019',
        status: 'Pending',
    },
    {
        key: '6',
        title: 'Applicant ABC v. Lawyer DEF',
        number: 'DOC-29834',
        created_at: '1 Janary 2019',
        status: 'Lodged',
    },
];

//-----------------------------------------
class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content-header">
                    <Breadcrumb style={{opacity: 0}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <p className="page-title">Home</p>
                </div>
                <div className="content-body">
                    <div className="box" style={{ paddingLeft: 44, paddingRight: 44 }}>
                        <p className="title">Recommended for you</p>
                        <Row style={{ paddingTop: 10 }} gutter={[40]}>
                            <Col span={6}>
                                <div style={{ marginBottom: 10 }}>
                                    <ReconciliationTwoTone className="font-icon" twoToneColor="#eb2f96" />
                                    <span className="font1" style={{ paddingLeft: 20, position: 'absolute' }}>Start Cases</span>
                                </div>

                                <p className="font2">Initiate & submit your Case online.<br /> Manage all ongoing Case submissions.</p>
                                <br />
                                <a href='#' className="font3">Start case</a>
                            </Col>
                            <Col span={6}>
                                <div style={{ marginBottom: 10 }}>
                                    <ReconciliationTwoTone className="font-icon" twoToneColor="#52c41a" />
                                    <span className="font1" style={{ paddingLeft: 20, position: 'absolute' }}>Make payments</span>
                                </div>

                                <p className="font2">View fees for document submission.<br /> Manage payments online.</p>

                                <a href='#' className="font3">Payment options</a>
                            </Col>
                            <Col span={6}>
                                <div style={{ marginBottom: 10 }}>
                                    <ReconciliationTwoTone className="font-icon" />
                                    <span className="font1" style={{ paddingLeft: 20, position: 'absolute' }}>Join Cases</span>
                                </div>

                                <p className="font2">Request to join an existing Case.<br />Invite others to join.</p>

                                <a href='#' className="font3">How to join</a>
                            </Col>
                            <Col span={6}>
                                <div style={{ marginBottom: 10 }}>
                                    <ReconciliationTwoTone className="font-icon" twoToneColor="#656de9" />
                                    <span className="font1" style={{ paddingLeft: 20, position: 'absolute' }}>Add files</span>
                                </div>

                                <p className="font2">Manage all files, documents, evidence<br /> online with singular or bulk upload.</p>

                                <a href='#' className="font3">Manage files</a>
                            </Col>
                        </Row>
                    </div>

                    <div className="box" style={{ marginTop: 10 }}>
                        <ComplexTable
                            pagination={false}
                            columns={columns}
                            dataSource={data}
                            rowSelection={{ type: 'checkbox' }} />
                        <br />
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;