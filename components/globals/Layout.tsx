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
                
                {/* snipcart tags */}
                <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
                <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MjM3YmEyMTYtYTJlYi00OWYzLTkxNjQtMTY5ODNjOTA1ODc4NjM3NjIwNTI4NDg1MTg2MjIy" id="snipcart"></script>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
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
    description: 'Welcome to the Coffee Shop'
}

export default Layout
