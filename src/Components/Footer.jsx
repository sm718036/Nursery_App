function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full mt-4 border py-1">
      <p className="text-center">&copy; {currentYear} G for Code</p>
    </footer>
  );
}

export default Footer;