import '@styles/globals.css';
import { Root } from 'postcss';
import { Children } from 'react/cjs/react.production.min';
//import the CSS to the entire application 

export const metadata = {
    title: "Prompsai",
    description: 'Discover & Share AI Prompts'
    //change the METADATA
}

const RootLayout = () => {  //rename layout for RootLayout to sticking with the rules of naming React components
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/> !--Change background--
            </div>
            <main className='app'> !--within it we want to render all the children--
                {Children}
            </main>
        </body>
    </html>

    //wrap everything in a HTML tag
  )
}

export default RootLayout