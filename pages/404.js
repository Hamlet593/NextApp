import Heading from "../components/Heading";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/404.module.scss';
import Head from "next/head";

const Error = () => {

    const {push} = useRouter();

    useEffect(() => {
        setTimeout(() => {
            push('/');
        }, 2500)
    }, []);

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Error page</title>
            </Head>
            <Heading text='404'/>
            <Heading tag='h2' text='Something is going wrong...'/>
        </div>
    )
};

export default Error;