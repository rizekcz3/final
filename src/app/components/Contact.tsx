'use client';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) alert('Zpráva odeslána!');
  };

  return (
    <section className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Kontaktujte nás</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Jméno</label>
          <input
            id="name"
            {...register('name', { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500">Vyplňte jméno</p>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">E-mail</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500">Neplatný e-mail</p>}
        </div>
        <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600">
          Odeslat
        </button>
      </form>
    </section>
  );
}
