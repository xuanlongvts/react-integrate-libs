import { useEffect, useState } from "react";
import axios from "axios";
import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { T_DataRes, T_Projects } from "../api/projects";

const queryClientWrap = new QueryClient();

async function fetchProjects(page = 0): Promise<T_DataRes> {
    const { data } = await axios.get("/api/projects?page=" + page);

    return data;
}

function Example() {
    const queryClient = useQueryClient();
    const [page, setPage] = useState(0);

    const { status, data, error, isFetching, isPreviousData } = useQuery(
        ["projects", page],
        () => fetchProjects(page),
        {
            keepPreviousData: true,
            staleTime: 1000,
        }
    );

    useEffect(() => {
        if (data?.hasMore) {
            queryClient.prefetchQuery(["projects", page + 1], () =>
                fetchProjects(page + 1)
            );
        }
    }, [data, page, queryClient]);

    return (
        <div>
            {status === "loading" ? (
                <div>Loading...</div>
            ) : status === "error" ? (
                <div>Error: {error instanceof Error && error.message}</div>
            ) : (
                <div>
                    {data.projects.map((project: T_Projects) => (
                        <p key={project.id}>{project.name}</p>
                    ))}
                </div>
            )}
            <div>Current Page: {page + 1}</div>
            <button
                onClick={() => setPage((old) => Math.max(old - 1, 0))}
                disabled={page === 0}
            >
                Previous Page
            </button>{" "}
            <button
                onClick={() => {
                    setPage((old) => (data?.hasMore ? old + 1 : old));
                }}
                disabled={isPreviousData || !data?.hasMore}
            >
                Next Page
            </button>
            {isFetching ? <span> Loading...</span> : null}{" "}
            <ReactQueryDevtools initialIsOpen />
        </div>
    );
}

const Pagination = () => {
    return (
        <QueryClientProvider client={queryClientWrap}>
            <Example />
        </QueryClientProvider>
    );
};

export default Pagination;
