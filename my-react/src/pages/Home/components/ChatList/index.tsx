import React, { useState } from 'react';
import { FieldTimeOutlined } from '@ant-design/icons';
import { Conversations, type ConversationsProps } from '@ant-design/x';
import { Flex, type GetProp, theme } from 'antd';

const groupName = ['Today', 'Yesterday', 'Historical chats'];
const items: GetProp<ConversationsProps, 'items'> = Array.from({ length: 9 }).map((_, index) => ({
  key: `item${index + 1}`,
  label: `Conversation Item ${index + 1}`,
  group: groupName[index % 3],
}));



export default function ChatList() {

   const { token } = theme.useToken();
  const [expandedKeys, setExpandedKeys] = useState(['Yesterday']);
  // Customize the style of the container
  const style = {
    width: 256,
    background: token.colorBgContainer,
    borderRadius: token.borderRadius,
  };

  const groupable: GetProp<typeof Conversations, 'groupable'> = {
    label: (group) => {
      return (
        <Flex gap="small">
          <FieldTimeOutlined />
          {group}
        </Flex>
      );
    },
    collapsible: (group) => {
      return group !== 'Today';
    },
    expandedKeys: expandedKeys,
    onExpand: setExpandedKeys,
  };


  return (
    <div className="chat-list">
      <div className="chat-list-header">
        <h2>会话列表</h2>
      </div>
          <Conversations items={items} defaultActiveKey="item1" style={style} groupable={groupable} />

    </div>
  )
}