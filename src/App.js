import React from 'react';
import './App.css';
import Button from './assets/components/Button.js';
import Product from './assets/components/Product';
import Tile from './assets/components/Tile';
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import story from './assets/our_story.png'


function App() {
  return (
      <>
            <h1>Handbags & Purses</h1>
        <nav>
        <Button
        type= "button"
        click= {() => console.log ("to the collection")}
        text= "to the collection"
        />
          <Button
              type= "button"
              click= {() => console.log ("shop all bags")}
              text= "shop all bags"
          />
          <Button
              type= "button"
              click= {() => console.log ("disabled")}
              text= "pre-orders"
          />

        </nav>

          <main>
          <Product
                redtext="Best seller"
                image={bag1}
                title="The handy bag"
                price="€400,-"
          />

          <Product
              redtext="Best seller"
              image={bag2}
              title="The stylish bag"
              price="€250,-"
          />

          <Product
              redtext="new collection"
              image={bag3}
              title="The simple bag"
              price="€300,-"
          />

          <Product
              redtext="new collection"
              image={bag4}
              title="The trendy bag"
              price="€150,-"
          />
          </main>

          <footer>
              <Tile
                  title= "the brand"
                  image={brand}>
                    </Tile>
              <Tile>
                  <p>THE BRAND</p>
                  <p>lorem ipsum</p>
              </Tile>
              <Tile>
                  <p>OUR STORY</p>
                  <p>lorem ipsum</p>
              </Tile>
              <Tile
                  title= "our story"
                  image={story}>
                  </Tile>
               </footer>

</>


  );
}

export default App;



