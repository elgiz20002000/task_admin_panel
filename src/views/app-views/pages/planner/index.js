import React, {useEffect, useRef, useState} from "react";
import {Button, Col, Row, Tabs} from "antd";
import Draggable from "react-draggable";
const {TabPane} = Tabs;

const Index = () => {
    const [selectedItem, setSelectedItem] = useState({})
    const [tabItems, setTabItems] = useState([
        {
            id:'1',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s'
        },
        {
             id:'2',
            image:'data:image/jpeg;base64,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'
        },
        {
             id:'3',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s'
        },
        {
             id:'4',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s'
        }
    ])
    const [items, setItems] = useState([])

    const [containerSize, setContainerSize] = useState({width: 0, height: 0});
    const containerRef = useRef(null);


    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const {width, height} = container.getBoundingClientRect();
            setContainerSize({width, height});
        }
    }, []);


    const calculateBounds = (value) => {
        const percentageBounds = {
            left: 0, // Left boundary as a percentage (0%)
            top: 0, // Top boundary as a percentage (0%)
            right: 80, // Right boundary as a percentage (80%)
            bottom: 80, // Bottom boundary as a percentage (80%)
        };

        const bounds = {
            left: containerSize.width * (percentageBounds.left / 100),
            top: containerSize.height * (percentageBounds.top / 100) - value ,
            right: containerSize.width * (percentageBounds.right / 100),
            bottom: containerSize.height * (percentageBounds.bottom / 100) - value,
        };

        return bounds;
    };
    const handleDrag = (e, ui, id) => {
        const {x, y} = ui;

        const updatedItems = items.map(item =>
            item?.id === id ? { ...item, position: { x, y } } : item
        );
        setItems(updatedItems);
    };


    const handleSaveLayout = () => {
        const layoutData = items.map(item => ({
            id: item.id,
            position: item.position,
        }));

        const layoutString = JSON.stringify(layoutData);
        const blob = new Blob([layoutString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'layout.json';
        link.click();
    };

    const handleImportLayout = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const layoutString = reader.result;
            const layoutData = JSON.parse(layoutString);
            setItems(layoutData);
        };
        reader.readAsText(file);
    };


    return (
        <Row style={{height: '100%'}}>
            <Col style={{padding: 20}} span={12}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Tab 1" key="1">
                        <div style={{display: 'flex', overflow: 'auto'}}>
                            {tabItems.map(item => {
                                return  <img onClick={() => setSelectedItem(item)} style={{width: 100, height: 100, margin: '0 5px', cursor:'pointer'}}
                            src={item.image}
                            alt=""/>
                        })}

                        </div>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
                <Button onClick={() => setItems([...items, {...selectedItem, id:(Math.floor(Math.random() * 10)), position:{x:0, y:0}}])} disabled={!Object.keys(selectedItem).length} style={{marginTop: '20px'}} type={'primary'}>
                    {Object.keys(selectedItem).length ? `Add item ${selectedItem.id}` : 'Select'}
                </Button>
                <Button onClick={handleSaveLayout} disabled={!items.length} style={{marginTop: '20px', marginLeft:20}} type={'primary'}>
                    Load file
                </Button>
            </Col>
            <Col ref={containerRef} span={12}>
                <div style={{
                    borderRadius: '2%',
                    width: '100%',
                    height: '100%',
                    background: 'black',
                    padding: 20,
                    overflow: "auto"
                }} className="wraper">
                    {items.map((item, index) => {
                        return <Draggable
                            bounds={calculateBounds(index * 100)}
                            handle=".task"
                            onDrag={(e, ui) => handleDrag(e, ui, item.id)}
                        >
                            <div style={{width:100}} className="task">
                                <img style={{width: 100, height: 100}} draggable={false} src={item.image} alt=""/>
                            </div>
                        </Draggable>
                    })}
                </div>
            </Col>

        </Row>
    );
};

export default Index;