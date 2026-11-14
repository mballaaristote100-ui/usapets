'use client';

export default function WhatsAppButton() {
  const phoneNumber = '15419086487';
  const message = 'Hello! I\'m interested in one of your puppies.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{ bottom: '24px' }}
      className="fixed left-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#1ebe5d] transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8 fill-white"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.418-2.004A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.852l-.485-.288-5.003 1.191 1.215-4.872-.317-.5A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.87c-.398-.199-2.354-1.162-2.72-1.294-.365-.133-.631-.199-.897.199-.265.398-1.03 1.294-1.263 1.56-.232.265-.465.298-.863.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.2-.232.266-.398.398-.664.133-.265.067-.498-.033-.697-.1-.2-.897-2.162-1.229-2.96-.324-.778-.653-.673-.897-.685l-.764-.013c-.265 0-.697.1-1.063.498-.365.398-1.395 1.362-1.395 3.323s1.428 3.854 1.627 4.12c.2.265 2.81 4.29 6.808 6.018.951.41 1.693.655 2.272.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.891.332-.93.332-1.727.232-1.892-.1-.165-.365-.265-.763-.464z" />
      </svg>
    </a>
  );
}
