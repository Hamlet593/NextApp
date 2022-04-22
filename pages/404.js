import Heading from "../components/Heading";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/404.module.scss';

const Error = () => {

    const {push} = useRouter();

    useEffect(() => {
        setTimeout(() => {
            push('/');
        }, 2500)
    }, []);

    return (
        <div className={styles.wrapper}>
            <Heading text='404'/>
            <Heading tag='h2' text='Something is going wrong...'/>
        </div>
    )
};

export default Error;