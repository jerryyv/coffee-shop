import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Info from '../components/Info'
import DrinkMenu from '../components/DrinkMenu'
import { createClient } from 'contentful'
import { MenuItem } from '../types'

interface HomeProps {
  menuItems: MenuItem[];
}


const Home = ({menuItems}: HomeProps) => {
  return (
    <>
      <Nav />
      <Hero />
      <Info />
      <DrinkMenu menuItems={menuItems}/>
    </>
  )
}

export const getStaticProps = async () => {
  const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY as string 
  })

  const res = await client.getEntries({content_type:'menuItem'})
  
  return {
      props: { 
          menuItems: res.items 
      }
  }
}

export default Home

