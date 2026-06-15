import React from 'react';
import { CopyOutlined, RedoOutlined, UserOutlined } from '@ant-design/icons';
import { Actions, Bubble } from '@ant-design/x';
import { Avatar, Flex } from 'antd';
import './index.css'

const actionItems = [
  {
    key: 'retry',
    icon: <RedoOutlined />,
    label: 'Retry',
  },
  {
    key: 'copy',
    icon: <CopyOutlined />,
    label: 'Copy',
  },
];

const ChatContent = () => (
   <div className="chat-content">
      <div className="chat-content-header">
        <h4>会话内容</h4>
      </div>
      <div className="chat-content-messages">
        <Flex vertical gap="small">
          <Flex gap="small" wrap>
            <div style={{ width: '100%' }}>
              <Bubble
                content="outer footer"
                header="footer"
                avatar={<Avatar icon={<UserOutlined />} />}
                footer={(content) => <Actions items={actionItems} onClick={() => console.log(content)} />}
              />
            </div>
          </Flex>
          <Flex gap="small" wrap>
            <div style={{ width: '100%' }}>
              <Bubble
                content="inner footer"
                placement="end"
                footerPlacement="inner-end"
                header="footer"
                avatar={<Avatar icon={<UserOutlined />} />}
                footer={(content) => <Actions items={actionItems} onClick={() => console.log(content)} />}
              />
            </div>
          </Flex>
          <Flex gap="small" wrap>
            <div style={{ width: '100%' }}>
              <Bubble
                content="outer footer and align right"
                footerPlacement="outer-end"
                header="footer"
                avatar={<Avatar icon={<UserOutlined />} />}
                footer={(content) => <Actions items={actionItems} onClick={() => console.log(content)} />}
              />
            </div>
          </Flex>
          <Flex gap="small" wrap>
            <div style={{ width: '100%' }}>
              <Bubble
                content="inner footer and align left"
                placement="end"
                footerPlacement="inner-start"
                header="footer"
                avatar={<Avatar icon={<UserOutlined />} />}
                footer={(content) => <Actions items={actionItems} onClick={() => console.log(content)} />}
              />
            </div>
          </Flex>
        </Flex>
      </div>
   </div>
);

export default ChatContent;
