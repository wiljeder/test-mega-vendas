export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-md p-4">{children}</div>
    </div>
  );
}
