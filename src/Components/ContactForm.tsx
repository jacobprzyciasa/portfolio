// components/ContactForm.tsx
'use client';

import { useState, FormEvent } from 'react';
import { toast } from "sonner"

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Email sent successfully!", {className: "font-volkhov"});
        form.reset();
      } else {
        toast.error("Failed to send email", {description: "Try again in a while", descriptionClassName: "font-volkhov text-[#898989]", className: "font-volkhov"})
      }
    } catch (error) {
        console.log(error)
      toast.error("Failed to send email", {description: "Try again in a while", descriptionClassName: "font-volkhov text-[#898989]", className: "font-volkhov"})
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex w-full flex-col gap-5'>
      <input type="email" name="email" placeholder="Email" required className='h-14 w-full border border-linen/20 bg-obsidian px-5 font-body text-sm text-linen placeholder:text-khaki outline-none transition-colors focus:border-flare' />
      <textarea name="message" placeholder="Message" required className='min-h-40 w-full border border-linen/20 bg-obsidian p-5 font-body text-sm text-linen placeholder:text-khaki outline-none transition-colors focus:border-flare' />
      <div className='w-full flex justify-end'>
        <button type="submit" disabled={loading} className='h-14 w-40 cursor-pointer bg-flare font-heading text-base uppercase tracking-wide text-obsidian transition-all hover:bg-linen disabled:cursor-wait disabled:opacity-70'>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
      {status && <p className="font-body text-xs text-khaki">{status}</p>}
    </form>
  );
}
