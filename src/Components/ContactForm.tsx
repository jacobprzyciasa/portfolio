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
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 xl:w-2/5 md:w-3/5 w-full'>
      <input type="email" name="email" placeholder="Email" required className='border border-black rounded-xs h-14 w-full font-volkhov text-black placeholder:text-[#898989] px-5' />
      <textarea name="message" placeholder="Message" required className='border border-black rounded-xs min-h-40 w-full font-volkhov text-black placeholder:text-[#898989] p-5' />
      <div className='w-full flex justify-end'>
        <button type="submit" disabled={loading} className='bg-black hover:bg-[#00000090] transition-all rounded-xs h-14 w-40 font-volkhov text-white uppercase cursor-pointer'>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
      {status && <p>{status}</p>}
    </form>
  );
}
