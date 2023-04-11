import './Button.scss';
import { Link } from 'react-router-dom';

function Button({ to, href, children, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    
    const classes = 'wrapper';

    return (  
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;