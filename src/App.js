import React ,{useState,useEffect}from 'react';
import { FormControl,Input} from '@material-ui/core'
import './App.css';
import Message from './Message/Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUserName] = useState('');
// useEffect runs the code every rendring cycle.
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
    });
  },[]);
  useEffect(() => {
    // if condition is empty then this will run the code only first rendring cycle.
    setUserName(prompt('Enter your Name'));
  },[]);
  // useEffect(() => {
  //   localStorage.setItem('username',username);
  // },[]);
  // console.log(input);
  // console.log(messages);
  const sendMessagesHandler = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('')
  }
  const deleteMessageHandler = (id) => {
    // console.log(id)
   
    setMessages (messages.filter((message) => message.id !== id ))
  }
  return (
    <div className="App">
    <img src='https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100' alt='Logo'/>
      <h1 style={{fontWeight: 'lighter'}}>Messanger App</h1>
      <h1 style={{fontWeight: 'revert',textTransform: 'capitalize',color: '#ed87ca'}}>Hey {username}😍</h1>
      <form className={'app__form'}>
      <FormControl className={'app__formControl'}>
        <Input style={{color: '#ea4c89'}} className={'app__input'} placeholder='Enter a Message....' value={input} onChange={event => setInput(event.target.value)}/>
        <IconButton className={'app__iconButton'} disabled={!input} variant='contained' color='primary'  type='submit' onClick={sendMessagesHandler}>
          <SendIcon />
        </IconButton> 
      </FormControl>
      </form>
      
    <FlipMove>
    {
      messages.map((data) => (
        <Message 
        key={data.id}
        message={data.data} 
        username={username}
        deleteMessage={() => deleteMessageHandler(data.id)}
        />
      ))
    }
    </FlipMove>
     
    </div>
  );
}

export default App;
