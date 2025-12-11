import Footer from "../_components/footer";
import Navbar from "../_components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="luxury" lang="en">
      <body
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
