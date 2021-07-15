import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'
interface LayoutProps {
    title: string
    description: string
    children: React.ReactNode
}

const Layout = ({title, description, children}: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <Nav />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

Layout.defaultProps = {
    title: 'Coffee Shop',
    description: 'Welcome to the Coffee Chop'
}

export default Layout
