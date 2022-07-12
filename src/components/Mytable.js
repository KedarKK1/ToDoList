import { Col, Image, Layout, Row, Table } from 'antd'
import Input from 'antd/lib/input/Input'
import { Content } from 'antd/lib/layout/layout'
import Title from 'antd/lib/skeleton/Title'
import React, { useState } from 'react'

const Mytable = ({getData}) => {

    const columns = [
        {
            title: 'Index',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <>{text}</>,
            // defaultSortOrder: 'descend',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Company',
            dataIndex: 'Company',
            key: 'Company',
            render: (text) => <>{text}</>,
            // defaultSortOrder: 'descend',
            sorter: (a, b) => a.Company.localeCompare(b.Company),
        },
        {
            title: 'Role',
            dataIndex: 'Role',
            key: 'Role',
            render: (text) => <>{text}</>,
            // defaultSortOrder: 'descend',
            sorter: (a, b) => a.Role.localeCompare(b.Role),
        },
        {
            title: 'Verified',
            dataIndex: 'Verified',
            key: 'Verified',
            filters: [
                {
                    text: 'true',
                    value: 'true',
                },
                {
                    text: 'false',
                    value: 'false',
                },
            ],
            onFilter: (value, record) => record.Verified.indexOf(value) === 0,
        },
        {
            title: "Status",
            dataIndex: 'status',
            key: 'status',
            filters: [
                {
                    text: 'Active',
                    value: 'Active',
                },
                {
                    text: 'active',
                    value: 'active',
                },
                {
                    text: 'banned',
                    value: 'banned',
                },
            ],
            onFilter: (value, record) => record.status.indexOf(value) === 0,

        },
        {
            title: "Company Image",
            dataIndex: 'CompanyImg',
            key: 'CompanyImg',
            // defaultSortOrder: 'descend',
            // sorter: (a, b) => (a.date).unix() - (b.date).unix()
            // sorter: (a, b) => new Date(a.duedate).getTime() - new Date(b.duedate).getTime(),
        },
    ];

    const onChangeSortFilter = (pagination, filters, sorter, extra) => {
        // console.log('params', pagination, filters, sorter, extra);
        console.log('onChangeSortFilter was called');
    };

    // console.log(getData.companiesList)
    const getIt = new Array();
    for (let i = 0; i < getData.companiesList.length; i++) {
        getIt.push(
            {
                index: i + 1,
                key: `${i + 1}`,
                name: (getData.companiesList[i].name),
                Company: getData.companiesList[i].company,
                Role: getData.companiesList[i].role,
                Verified: `${getData.companiesList[i].verified}`,
                status: getData.companiesList[i].status,
                // duedate: <DatePicker defaultValue={moment(getData[i].birthdayDate)} />,
                // date: (getData[i].created_at),
                CompanyImg: <Image src={(getData.companiesList[i].companyImageURL)} height={100} />,
            },
        )
    }


    const [search, setSearch] = useState('');
    //   console.log(getIt)
    const [mydataSource, setmydataSource] = useState(getIt)
    const [tablefilter, setTablefilter] = useState([])

    const filterData = (e) => {
        if (e.target.value != "") {
            // you have to include below line else it shows mydataSource as mpty array
            setmydataSource(getIt)
            setSearch(e.target.value);
            // console.log(mydataSource)
            const filterTable = mydataSource.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ))
            setTablefilter([...filterTable])
            // console.log(filterTable)
        } else {
            setSearch(e.target.value);
            setmydataSource([...mydataSource]);
        }
    }


  return (
    <>
        <Layout>
            <Content>
                <Title align="center">Your Tasks list is : </Title>
                        <Row style={{ margin: "5px" }}>
                            <Col xxl={15} xl={15} lg={15} md={15} sm={4} xs={4} />
                            <Col xxl={9} xl={9} lg={9} md={9} sm={20} xs={20} >
                                <Input showCount maxLength={100} onChange={filterData} value={search} placeholder="🔍 Seach Queries " />
                            </Col>
                        </Row>
                        {/* <Table style={{ width: '100', overflow: 'scroll', }} columns={columns} dataSource={getIt} onChange={onChangeSortFilter}  /> */}
                        <Table style={{ width: '100', overflow: 'scroll', }} columns={columns} dataSource={search.length > 0 ? tablefilter : getIt} onChange={onChangeSortFilter} />
            </Content>
        </Layout>
    </>
  )
}

export default Mytable