export default function Container({ className = "", children, as: Tag = "div" }) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Tag>
  );
}
