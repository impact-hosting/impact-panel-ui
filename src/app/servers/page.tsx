import { cookies } from 'next/headers';

async function getServers() {
    const cookieStore = cookies();
    const api = await fetch(`${process.env.BACKEND_URL}/api/servers`, {
        headers: {
            Cookie: `Session=${cookieStore.get('Session')}`
        }
    });
    if (api.ok)
        return await api.json();
}

export default async function ServersListPage() {
    const servers = await getServers();
    return (
        <main>
        </main>
    );
}