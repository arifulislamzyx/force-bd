// app/home/contact/page.tsx
"use client";

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-20 px-4 max-w-4xl mx-auto rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6">
        Let’s Talk Business
      </h2>
      <p className="text-center text-gray-600 mb-10">
        We’re ready to help you build amazing experiences.
      </p>
      <form className="grid gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          rows={4}
          placeholder="How can we help you?"
          className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button type="submit" className="w-full text-lg py-6">
          Send Message
        </button>
      </form>
    </section>
  );
}
