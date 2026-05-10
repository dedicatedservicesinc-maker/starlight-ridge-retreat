import SectionShell from '@/components/SectionShell';

export default function ContactPage() {
  return (
    <SectionShell title="Contact" subtitle="We'd love to hear from you.">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p>Phone: (903) 555-1234</p>
          <p>Email: info@starlightridge.com</p>
          <p>Address: Your Retreat Address Here</p>
        </div>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
          <input name="name" placeholder="Name" className="w-full p-4 bg-transparent border border-lime-800" />
          <input name="email" placeholder="Email" className="w-full p-4 bg-transparent border border-lime-800" />
          <textarea name="message" placeholder="Message" className="w-full p-4 min-h-40 bg-transparent border border-lime-800"></textarea>
          <button type="submit" className="w-full px-8 py-4 bg-lime-800 hover:bg-lime-700">
            Send Message
          </button>
        </form>
      </div>
    </SectionShell>
  );
}
