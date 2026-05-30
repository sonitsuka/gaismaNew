export default function ContactPage() {
  return (
    <div className="fixed inset-0 z-40">
      <iframe
        src="/contact.pdf"
        className="w-full h-full border-0"
        title="Contact"
      />
    </div>
  )
}
