import { useState } from 'react';
import { ButtonSecondary, FormContent } from './styles';
import { At, User } from 'phosphor-react';
import toast from 'react-hot-toast';

const GOOGLE_FORM_ACTION_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL;
const NAME_ENTRY_ID = process.env.NEXT_PUBLIC_NAME_ENTRY_ID;
const EMAIL_ENTRY_ID = process.env.NEXT_PUBLIC_EMAIL_ENTRY_ID;

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

    if (!GOOGLE_FORM_ACTION_URL || !NAME_ENTRY_ID || !EMAIL_ENTRY_ID) {
      toast.error('Form configuration is missing.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append(NAME_ENTRY_ID, name);
      formData.append(EMAIL_ENTRY_ID, email);

      const response = await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      if (response) {
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
      <h2>Stay Informed, Inspired, and Ahead! 🌟</h2>
      <p>Join our newsletter to receive articles & updates. (no spam—just meaningful updates)</p>
      <p>Ready to stay connected? Subscribe today and never miss a beat!</p>
      <br />
      <div className="input-group">
        <label htmlFor="name" className="user-label">
          Name <User size={15} weight="bold" />
        </label>
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
      </div>

      <div className="input-group">
        <label htmlFor="email" className="user-label">
          Email <At size={15} weight="bold" />
        </label>
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
      </div>

      <div className="input-group">
        <input
          type="checkbox"
          checked={consent}
          onChange={({ target }) => setConsent(target.checked)}
          id="consent"
          required
        />
        <label htmlFor="consent">
          I agree to the terms and conditions
        </label>
      </div>

      <ButtonSecondary type="submit">
        Subscribe
      </ButtonSecondary>
    </FormContent>
  );
}