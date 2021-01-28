import React,{forwardRef} from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import './Message.css';
import Delete from '@material-ui/icons/Delete';
import {IconButton} from '@material-ui/core';
const  Message = forwardRef(({message,username,deleteMessage,key},ref) => {
    let isUser = username === message.username;
// 
    return (
        
            <div ref={ref} className={`message ${isUser && 'message_user'}`}>
                <div className={'message__username'} >
                    {!isUser ? `${message.username || 'Unknown User'}` : null } 
                </div>
                    <div className='message__card'>
                        <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                            <CardContent>
                                <Typography 
                                    variant='h5'
                                    component='h2'
                                >
                                    {message.message}
                                </Typography>     
                            </CardContent>
                     </Card>
                    <div>
                    {isUser ? <IconButton onClick={deleteMessage}><Delete /></IconButton> : null }
                    </div>
                </div> 
            </div>
        
            
    )
}
)
export default Message
