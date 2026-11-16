import { randomUUID } from 'node:crypto';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET(){
 return Response.json({generatedAt:new Date().toISOString(),requestId:randomUUID(),source:'serveur'}, {headers:{'Cache-Control':'no-store, max-age=0'}});
}
