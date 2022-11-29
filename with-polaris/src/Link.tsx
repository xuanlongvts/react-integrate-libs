import { LinkLikeComponentProps } from '@shopify/polaris/build/ts/latest/src/utilities/link';
import { Link } from 'react-router-dom';
import { Link as LinkPol, LinkProps } from '@shopify/polaris';

const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;

const ReactRouterLink = ({ children, url = '', external, ref, ...rest }: LinkLikeComponentProps) => {
    // react-router only supports links to pages it can handle itself. It does not
    // support arbirary links, so anything that is not a path-based link should
    // use a reglar old `a` tag
    if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
        rest.target = '_blank';
        rest.rel = 'noopener noreferrer';
        return (
            <a href={url} {...rest}>
                {children}
            </a>
        );
    }

    return (
        <Link to={url} {...rest}>
            {children}
        </Link>
    );
};

export default ReactRouterLink;

type T_Link = {
    to: string;
    text: string;
} & LinkProps;

export const LinkTransform = ({ to, text, ...props }: T_Link) => {
    return (
        <Link to={to}>
            <LinkPol {...props}>{text}</LinkPol>
        </Link>
    );
};
