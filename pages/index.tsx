import { MenuItem, ProductItem } from '../types'
import { createClient } from 'contentful'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Info from '../components/Info'
import DrinkMenu from '../components/DrinkMenu'
import ProductList from '../components/ProductList'


interface HomeProps {
  menuItems: MenuItem[];
  products: ProductItem[]
}


const Home = ({menuItems, products}: HomeProps) => {
  return (
    <>
      <Nav />
      <Hero />
      <Info />
      <DrinkMenu menuItems={menuItems}/>
      <ProductList products={products}/>
    </>
  )
}

export const getStaticProps = async () => {
  const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY as string 
  })

  const menuItems = await client.getEntries({ content_type:'menuItem' })
  const products = await client.getEntries({ content_type:'product' })
  
  return {
      props: { 
          menuItems: menuItems.items, 
          products : products.items
      }
  }
}

export default Home

