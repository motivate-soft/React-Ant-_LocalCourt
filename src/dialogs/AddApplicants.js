import React from 'react';
import { Modal, Button, Table, Popconfirm, Divider } from 'antd';


class AddApplicants extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    key: '1',
                    name: 'Jane Smitth',
                    address: 'London, Park Lane no. 1232',
                    party_type: 'Individual',
                    self_presented: 'No',
                    email: 'lawyerabc@firm.com'
                },
                {
                    key: '2',
                    name: 'John Doe',
                    address: 'London, Park Lane no. 1232',
                    party_type: 'Individual',
                    self_presented: 'No',
                    email: 'lawyerabc@firm.com'
                },
            ],
            count: 2,
        };
        this.columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Party type',
                dataIndex: 'party_type',
                key: 'party_type',
            },
            {
                title: 'Self Presented',
                key: 'self_presented',
                dataIndex: 'self_presented',
            },
            {
                title: 'Contact details',
                key: 'email',
                dataIndex: 'email',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <div size="small">
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a>Delete</a>
                        </Popconfirm>
                        <Divider type="vertical" style={{ background: 'grey' }}/>
                        {/* <div style={{ width: 1, height: 15, background: 'grey' }}></div> */}
                        <a>Edit</a>
                    </div>
                ),
            },
        ];
    }


    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter(item => item.key !== key),
        });
    };

    onSave = () => {
        //save applicants to server
        this.props.onOk()
    }

    render() {
        const { dataSource } = this.state;
        return (
            <Modal
                visible={this.props.visible}
                onOk={this.props.onOk}
                onCancel={this.props.onCancel}
                header={null}
                footer={null}
                width={"80%"}
                style={{ minWidth: 700 }}
            >
                <p className="title" style={{ color: '#0446DF', paddingTop: 15, paddingBottom: 15 }}>Add Applicants</p>
                <Table
                    pagination={false}
                    columns={this.columns}
                    dataSource={dataSource} />
                <br />
                <div style={{ textAlign: 'right' }}>
                    <Button key="submit" type="primary" onClick={this.onSave}>
                        Save
                    </Button>
                </div>
            </Modal>
        );
    }
}

export default AddApplicants;