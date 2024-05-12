import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GODANCE | Мероприятия",
  description: "Самые разные мероприятия",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
