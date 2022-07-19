import { Table } from 'antd'

import ButtonForm from './Button'
import Header from './Header'
import { Button, Modal, DatePicker, Space } from 'antd';
import { DeleteFilled, EditFilled,ShoppingFilled } from '@ant-design/icons';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'


  


const Toys = ({toylist, onAddToy, deleteToy, cred}) => {

    const {state} = useLocation();
    const navigate  = useNavigate();

    const [modalVisible, setModalVisible] = useState(false);

    const [name, setToyName] = useState('')
    const [description, setToyDescription] = useState('')
    const [productiondate, setProductionDate] = useState(new Date())
    const [publishdate, setPublishDate] = useState(moment())
    const [serialnumber, setSerialNumber] = useState("")
  
    
    const addToyFigure = () => {
        setToyName("")
        setToyDescription("")
        setProductionDate(new Date())

        setModalVisible(true);
    }

    const onChangeProduction = (date, dateString) => {
      
      setProductionDate(date)
    };

    const onSubmit = (e) => {
      e.preventDefault()
      
      let unique_id = uuid();
      
      setSerialNumber(unique_id)
      
      onAddToy({ serialnumber, name, description, productiondate, publishdate})
  
      setToyName("")
      setToyDescription("")
      setProductionDate(new Date())
      setModalVisible(false)
    }


    const onLogout = () => {
      state.credentials = [];
      localStorage.removeItem("user")
      navigate ("/")
    }
    
      const columns = [
        {
            title: 'Serial Number',
            dataIndex: 'serialnumber',
            key: 'serialnumber',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Production Date',
          dataIndex: 'productiondate',
          key: 'productiondate',
        },
        {
            title: 'Publish Date',
            dataIndex: 'publishdate',
            key: 'publishdate',
        },
        {
            title: 'Owner',
            dataIndex: 'owner',
            key: 'owner',
        },
        {
            title: 'Purchase Date',
            dataIndex: 'purchasedate',
            key: 'purchasedate',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Button  type="primary" shape="round" icon={<ShoppingFilled />} size="small">Purchase</Button>
              <Button  type="primary" shape="round" icon={<EditFilled />} size="small">Trade</Button>
              <Button onClick={() => deleteToy(record.id)} type="primary" shape="round" icon={<DeleteFilled />} size="small">Delete</Button>
            </Space>
          ),
        },
      ];
    
  return (
    <div>
        <Header fullname={ cred[0].firstname + " " + cred[0].lastname } onLogout={onLogout}/>
        <h1 className='toy-list-header'>Toy Figurines</h1>
        <div className='add-btn-container'>
            <ButtonForm color="blue" text="Add Toy Figure" className="add-btn" onClick={addToyFigure}/>
        </div>
        
        <Table dataSource={toylist} key={toylist.id} columns={columns} pagination={{ position: ['bottomCenter'] }}/>;
        <Modal
            title="Add new toy figure"
            centered
            visible={modalVisible}
            onOk={onSubmit}
            onCancel={() => setModalVisible(false)}
        >
            <form className='modal-form'>
            
                <div className='form-inputs modal-inputs'>
                    <label className='form-label'>Name</label>
                    <input  
                            required
                            type='text'
                            className='form-input'
                            name="name"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setToyName(e.target.value)}
                    >
                    </input>
                </div>
                <div className='form-inputs modal-inputs'>
                    <label className='form-label'>Description</label>
                    <textarea
                            required
                            className='form-input modal-input'
                            rows="4"
                            name="description"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setToyDescription(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className='form-inputs modal-inputs'>
                    <label className='form-label'>Production Date</label><br></br>
                    <DatePicker 
                      defaultValue={moment()}
                      onChange={onChangeProduction}/>
                </div> 
            </form>
        </Modal>
        
    </div>
  )
}

export default Toys