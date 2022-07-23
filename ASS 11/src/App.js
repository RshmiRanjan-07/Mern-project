import { Product } from './components/Product'
function App() {
  const product_arr = [
    {
      product_name:'OPTIMUS PRIME',
      product_image:"https://tfwiki.net/mediawiki/images2/thumb/b/bc/TLK-Optimus-Prime-art.jpg/300px-TLK-Optimus-Prime-art.jpg",
      product_price:"Price: 3500/-"
    },
    {
      product_name:'BUMBUL BEE',
      product_image:"https://rukminim1.flixcart.com/image/416/416/jlgwmfk0/action-figure/9/h/v/the-last-knight-premier-edition-deluxe-bumblebee-transformers-original-imaf8hfwrchtdgve.jpeg?q=70",
      product_price:"Price: 1700/-"
    },
    {
      product_name:'MEGATRON',
      product_image:"https://img.cadnav.com/allimg/141025/1-141025160057.jpg",
      product_price:"Price: 6500/-"
    },
   
  ]

  return (
    <div className="App">
      <h1>ACTION TOYS</h1>
      <Product pname={product_arr[0].product_name} pimage={product_arr[0].product_image} price={product_arr[0].product_price}/>
      <Product pname={product_arr[1].product_name} pimage={product_arr[1].product_image} price={product_arr[1].product_price}/>
      <Product pname={product_arr[2].product_name} pimage={product_arr[2].product_image} price={product_arr[2].product_price}/>
    </div>
  );
}

export default App;