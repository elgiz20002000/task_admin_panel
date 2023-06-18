import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import PageHeader from "../../../../components/layout-components/PageHeader";
import Loading from "../../../../components/shared-components/Loading";
import {withRouter} from "react-router-dom";
import {setUser} from "../../../../redux/actions";
import {connect} from "react-redux";

export class UserList extends Component {

	state = {
		users: [],
		userProfileVisible: false,
		selectedUser: null,
		loading:false
	}

	fetchUsers = () => {
		this.setState({
			loading:true
		})
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(res => this.setState({
				users:res,
				loading:false
			}))
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}



	componentDidMount() {
		this.fetchUsers()
	}

	render() {
		const {history} = this.props
		const { users, userProfileVisible, selectedUser } = this.state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'User Name',
				dataIndex: 'username',
				sorter: {
					compare: (a, b) => a.role.length - b.role.length,
				},
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				sorter: {
					compare: (a, b) => a.phone.length - b.phone.length,
				},
			},
			{
				title: 'Website',
				dataIndex: 'website',
				sorter: {
					compare: (a, b) => a.website.length - b.website.length,
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button className="mr-2" danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
						<Tooltip title="Edit">
							<Button  icon={<EditOutlined />} size="small" onClick={()=> {
								this.props.dispatch(setUser(elm))
								history.push('/app/setting/edit-profile')
							}
							} />
						</Tooltip>
					</div>
				)
			}
		];
		return <>
			<PageHeader title={'User list'} display={true}/>
			{this.state.loading ? <Loading/> : <Card bodyStyle={{'padding': '0px'}}>

				<Table   columns={tableColumns} dataSource={users} rowKey='id' />
				<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
			</Card>}
		</>
	}
}

export default connect()(withRouter(UserList))
