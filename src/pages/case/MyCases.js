import React from "react";
import { Table, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
import colors from '../../utils/colors'
import ComplexTable from '../../components/ComplexTable'
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

class MyCases extends React.Component {
    render() {
        return (
            <div className="box">
                <ComplexTable
                    pagination={false}
                    columns={columns}
                    dataSource={data}
                    rowSelection={{ type: 'checkbox' }} />
                <br />
            </div>
        );
    }
}

export default MyCases;