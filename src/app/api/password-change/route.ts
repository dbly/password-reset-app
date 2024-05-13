import type {NextRequest} from 'next/server'
export const runtime = 'edge'
export async function POST(request: NextRequest) {
    let responseText = 'Successfully change password.'

    console.log('got request {}', request);

    return new Response(JSON.stringify({response: responseText}));
}
