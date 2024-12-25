import { useState } from 'react';
import { ButtonSecondary, FormContent } from './styles';
import { At, User } from 'phosphor-react';
import toast from 'react-hot-toast';

const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

export function NewsletterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!consent) {
      toast.error('You must agree to the terms and conditions.');
      return;
    }

    if (!GOOGLE_SHEET_URL) {
      toast.error('Google Sheet URL is not set.');
      return;
    }

    try {
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        body: JSON.stringify({ name, email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        toast.success('Subscription successful!');
        setName('');
        setEmail('');
        setConsent(false);
      } else {
        toast.error('Subscription failed!');
      }
    } catch (error) {
      toast.error('Subscription failed!');
    }
  };

  return (
    <FormContent onSubmit={handleSubmit}>
      <h2>Subscribe to our newsletter</h2>
      <p>Subscribe to our newsletter to get the latest updates on our products and services.</p>
      <p>I promise not to spam you! Unsubscribe at any time.</p>
      <br />
      <div className="input-group">
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          name="name"
          id="name"
          autoComplete="name"
          placeholder=" "
          required
          className="input"
        />
        <label htmlFor="name" className="user-label">
          Name <User size={15} weight="bold" />
        </label>
      </div>

      <div className="input-group">
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
          name="email"
          autoComplete="email"
          id="email"
          placeholder=" "
          className="input"
        />
        <label htmlFor="email" className="user-label">
          Email <At size={15} weight="bold" />
        </label>
      </div>

      <div className="input-group">
        <input
          type="checkbox"
          checked={consent}
          onChange={({ target }) => setConsent(target.checked)}
          id="consent"
          required
        />
        <label htmlFor="consent" className="user-label">
          I agree to the terms and conditions
        </label>
      </div>

      <ButtonSecondary type="submit">
        Subscribe
      </ButtonSecondary>
    </FormContent>
  );
}