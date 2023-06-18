import React, { Component } from 'react';
import { Avatar, Drawer, Divider } from 'antd';
import { 
	MobileOutlined, 
	MailOutlined,
} from '@ant-design/icons';

export class UserView extends Component {
	render() {
		const { data, visible, close} = this.props;
		return (
			<Drawer
				width={300}
				placement="right"
				onClose={close}
				closable={false}
				visible={visible}
			>
				<div className="text-center mt-3">
					<Avatar size={80} src={data?.img} />
					<h3 className="mt-2 mb-0">{data?.name}</h3>
				</div>
				<Divider dashed />
				<div className="">
					<h6 className="text-muted text-uppercase mb-3">Account details</h6>
					<p>
						<span className="ml-3 text-dark">id: {data?.id}</span>
					</p>
					<p>
						<span className="ml-3 text-dark">Name: {data?.username}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
					<p>
						<MobileOutlined />
						<span className="ml-3 text-dark">{data?.phone}</span>
					</p>
					<p>
						<MailOutlined />
						<span className="ml-3 text-dark">{data?.email? data?.email: '-'}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">Company</h6>
					<p>
						<span className="ml-3 text-dark">{data?.company.name}</span>
					</p>
				</div>

				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">Address</h6>
					<p>
						<a href="/#" className="ml-3 text-dark">City: {data?.address.city}</a>
					</p>
					<p>
						<a href="/#" className="ml-3 text-dark">Street: {data?.address.street}</a>
					</p>
					<p>
						<a href="/#" className="ml-3 text-dark">Suite: {data?.address.suite}</a>
					</p>
					<p>
						<a href="/#" className="ml-3 text-dark">ZIP: {data?.address.zipcode}</a>
					</p>
				</div>

			</Drawer>
		)
	}
}

export default UserView
