
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head >
                <title>Sail</title>
                <link rel="shortcut icon" href="/media/logo.svg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}