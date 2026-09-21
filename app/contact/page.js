export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 lg:px-10">
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.2em] text-brand-green">Contact</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-brand-blue md:text-5xl">Get in touch</h1>
      </header>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[26px] border border-[rgba(17,33,61,0.08)] bg-white p-6">
          <div className="space-y-4 text-sm text-foreground/75">
            <p><span className="font-semibold text-brand-blue">Email:</span> grace@green.edu.bd</p>
            <p><span className="font-semibold text-brand-blue">Location:</span> Dhaka, Bangladesh</p>
            <p><span className="font-semibold text-brand-blue">Social:</span> LinkedIn / Facebook / Community channels</p>
          </div>
        </div>

        <form className="rounded-[26px] border border-[rgba(17,33,61,0.08)] bg-white p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Name</label>
              <input className="w-full rounded-full border border-[rgba(17,33,61,0.12)] bg-[#f7f8f5] px-4 py-3" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Email</label>
              <input className="w-full rounded-full border border-[rgba(17,33,61,0.12)] bg-[#f7f8f5] px-4 py-3" placeholder="Your email" />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Message</label>
            <textarea className="min-h-32 w-full rounded-[20px] border border-[rgba(17,33,61,0.12)] bg-[#f7f8f5] px-4 py-3" placeholder="Write your message" />
          </div>

          <button className="mt-6 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Send message
          </button>
        </form>
      </div>
    </main>
  );
}
