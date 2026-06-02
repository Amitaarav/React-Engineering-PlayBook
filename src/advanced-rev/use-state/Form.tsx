import { useState } from 'react';

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');
  
  if (isSent) {
    return <h1>Your message is on its way!</h1>
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSent(true);
    sendMessage(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(message: string) {
    //....
}