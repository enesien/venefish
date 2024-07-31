import { NextApiRequest, NextApiResponse } from "next";
import { faker } from '@faker-js/faker';

interface Company {
    id: string;
    name: string;
    description: string;
    location: string;
    website: string;
    revenue: number;
    employees: number;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const companies: Company[] = new Array(10).map(() => ({
        id: faker.string.uuid(),
        name: faker.company.name(),
        description: faker.company.catchPhrase(),
        location: faker.location.city() + ', ' + faker.location.state({ abbreviated: true }),
        website: faker.internet.url(),
        revenue: faker.number.int({ min: 1000000, max: 1000000000 }),
        employees: faker.number.int({ min: 3, max: 100 }) 
    }))

    res.status(200).json(companies)
}

