"use client";

export default function ScrollToButton({ targetId, className, children }) {
  const handleScroll = (e) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <button onClick={handleScroll} className={className}>
      {children}
    </button>
  );
}