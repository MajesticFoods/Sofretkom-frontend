import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap/'
class Profile extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        
        return (
            <>
                {isAuthenticated &&
                    <>
  <Card className="book" >

<Card.Body>
  <Card.Title>Hello {user.name}</Card.Title>
  
  <Card.Text>
  Hello {user.email}
  </Card.Text>
 
</Card.Body>
</Card>
                    
                    </>
                    
                }
            </>
        );
    }
}

export default withAuth0(Profile);