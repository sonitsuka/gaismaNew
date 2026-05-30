export default function ContactPage() {
  return (
    <div className="h-[calc(100vh-50px)]">
      <iframe
        src="/contact.pdf"
        className="w-full h-full border-0"
        title="Contact"
      />
    </div>
  )
}
