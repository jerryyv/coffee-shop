import { MenuItem, ProductItem } from '../types'
import { createClient } from 'contentful'
import background from '../public/default-background.jpeg'
 import Layout from '../components/globals/Layout'
import Hero from '../components/globals/Hero'
import Info from '../components/home/Info'
import DrinkMenu from '../components/home/DrinkMenu'
import ProductList from '../components/home/ProductList'
import Contact from '../components/globals/Contact'

interface HomeProps {
  menuItems: MenuItem[];
  products: ProductItem[]
}

const Home = ({menuItems, products}: HomeProps) => {
  return (
    <Layout>
      <Hero imageUrl={background} title='Coffee Shop'/>
      <Info />
      <DrinkMenu menuItems={menuItems}/>
      <ProductList products={products}/>
      <Contact />
    </Layout>
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

