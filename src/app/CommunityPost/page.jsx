// CommunityPost.js
"use client";

import React, { useState } from 'react';
// import QuestionAnswerPage from './QuestionAnswerPage';
import { Typography, Input, Button, List } from 'antd'; // Import Input and Button components from Ant Design
import QuestionAnswerPage from '@/components/QuestionAnswerPage';


const { Title } = Typography;

const CommunityPost = () => {
  // State to store user's answer, user ID, and list of posted answers
  const [answer, setAnswer] = useState('');
  const [userId, setUserId] = useState('');
  const [postedAnswers, setPostedAnswers] = useState([]);

  // Function to handle posting answer
  const handlePostAnswer = () => {
    // Add the new answer to the list of posted answers
    setPostedAnswers([...postedAnswers, { userId, answer }]);
    // Reset answer and user ID after posting
    setAnswer('');
    setUserId('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <Title level={2} className="community">Community Post</Title>
      </div>
      <div style={{ width: '100%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <QuestionAnswerPage />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Input 
          placeholder="Your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={{ marginBottom: '5px' }}
        />
        <Input 
          placeholder="Your user ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{ marginBottom: '5px' }}
        />
        <Button type="primary" onClick={handlePostAnswer}>Post Answer</Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Title level={3}>Posted Answers:</Title>
        <List
          dataSource={postedAnswers}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <Typography.Text strong>{`User ${item.userId}: `}</Typography.Text>
              {item.answer}
            </List.Item>
          )}
        />
      </div>
      {/* <div><ChatBot/></div> */}
    </div>
  );
}

export default CommunityPost;