import { observer } from 'mobx-react-lite';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    return <>{children}</>;
};

export default observer(RequireAuth);
