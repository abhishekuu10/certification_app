import Header from './Header';
import Link from 'next/link';
const Layout = (props) => {
    const child = props.children
    return (
        <div>
            <Header login={props.login} head = {props.head} />
            <br />
            {child}
        </div>
    );
};

export default Layout;

