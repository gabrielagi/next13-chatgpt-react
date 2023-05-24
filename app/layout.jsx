import '@styles/globals.css';
//import the CSS to the entire application 

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Feed from '@components/Feed';

export const metadata = {
    title: "Prompsai",
    description: 'Discover & Share AI Prompts'
    //change the METADATA
}

const RootLayout = ({ children }) => {  //rename layout for RootLayout to sticking with the rules of naming React components
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/> 
            </div>
            <main className='app'> 
                <Nav />
                { children }
            </main>
        </body>
    </html>

    //wrap everything in a HTML tag
  )
}

export default RootLayout;