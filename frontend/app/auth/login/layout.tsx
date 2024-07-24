export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-y-6">
      <h1 className="text-5xl font-medium text-center">Login</h1>
      {children}
    </div>
  );
}
