import Head from 'next/head';

const PageHead = ({headTitle}) => {
    return (
        <>
            <Head>
                <title>Scan Eat Now - {headTitle}</title>

                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                      rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                      rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet"/>

                <link href="https://use.fontawesome.com/releases/v5.11.0/css/all.css" rel="stylesheet"
                      crossorigin="anonymous"/>
            </Head>
        </>
    );
};

export default PageHead;
