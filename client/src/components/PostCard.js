import React from 'react'
import { Card, Icon, Label,Image,Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import moment from 'moment'

export default function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) {
    
    const likePost = () => console.log("Hi like!")
    const commentOnPost = () => console.log("Hi comment!")
    

    return (
        <Card fluid>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                />
                <Card.Header>{ username }</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>{ moment(createdAt).fromNow(true) }</Card.Meta>
                <Card.Description>
                    {body }
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' labelPosition='right' onClick={likePost}>
                    <Button basic color='red'>
                        <Icon name='heart' />                       
                    </Button>
                    <Label basic color='red' pointing='left'>
                        { likeCount }
                    </Label>
                </Button>
                <Button as='div' labelPosition='right' onClick={commentOnPost}>
                    <Button basic color='teal'>
                        <Icon name='comment' />                       
                    </Button>
                    <Label basic color='teal' pointing='left'>
                        { commentCount }
                    </Label>
                </Button>
            </Card.Content>
        </Card>        
    )
}
