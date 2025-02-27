import React from 'react';
import { Card } from 'react-bootstrap';


export default function StudentProfilePage() {
    const role = localStorage.getItem('role');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const userId = localStorage.getItem('userId');
  return (
    <div className="d-flex min-vh-100 bg-light">
      

      <main className="flex-grow-1 p-4">
        <h1 className="text-purple mb-4">Student Full Profile</h1>
        
        <Card className="shadow p-4">
          <h4>Name: {name}
          </h4>
          <p>Email: {email}</p>
          <p>userId: {userId}</p>
          <p>role: {role}</p>
        </Card>
      </main>
    </div>
  );
}
