// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type T_Projects = {
    name: string;
    id: number;
};

export type T_DataRes = {
    projects: T_Projects[];
    hasMore: boolean;
};

const Projects = async (
    req: NextApiRequest,
    res: NextApiResponse<T_DataRes>
) => {
    const page: number = Number(req.query.page) || 0;

    const pageSize = 10;

    const projects = Array(pageSize)
        .fill(0)
        .map((_, i) => {
            const id = page * pageSize + (i + 1);
            return {
                name: "Project " + id,
                id,
            };
        });

    await new Promise((r) => setTimeout(r, 1000));

    res.status(200).json({ projects, hasMore: page < 9 });
};

export default Projects;
