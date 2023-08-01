import './globals.css'
import StitchesRegistry from './registry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
      <StitchesRegistry>
        {children}
        </StitchesRegistry>
        </body>
      
    </html>
  )
}
