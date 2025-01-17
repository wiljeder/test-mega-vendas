export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="bg-white rounded-md p-4">{children}</div>
    </div>
  );
}
