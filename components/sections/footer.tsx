export function Footer() {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} M. Oly Mahmud. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Developed by M. Oly Mahmud
        </p>
      </div>
    </footer>
  )
}