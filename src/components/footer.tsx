export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-navy border-t border-gray-800">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-text-secondary">© {currentYear} Seemal Zia. All Rights Reserved.</p>
            </div>
  
            <div>
              <p className="text-text-secondary">
                Designed & Built with <span className="text-yellow">❤</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }