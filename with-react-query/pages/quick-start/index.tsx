import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import axios from "axios";

const queryClientWrap = new QueryClient();

const Example = (): JSX.Element => {
    const { isLoading, error, data, isFetching } = useQuery(["repoData"], () =>
        axios
            .get("https://api.github.com/repos/tannerlinsley/react-query")
            .then((res) => res.data)
    );

    if (isLoading) return <div>Loading...</div>;

    if (error instanceof Error)
        return <div>An error has occurred: {error.message}</div>;

    return (
        <>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{" "}
            <strong>✨ {data.stargazers_count}</strong>{" "}
            <strong>🍴 {data.forks_count}</strong>
            <div>{isFetching ? "Updating..." : ""}</div>
            <ReactQueryDevtools initialIsOpen />
        </>
    );
};

const QuickStart = () => {
    return (
        <QueryClientProvider client={queryClientWrap}>
            <Example />
        </QueryClientProvider>
    );
};

export default QuickStart;
