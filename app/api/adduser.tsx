import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const password = searchParams.get('password');
 
  
  try {
    if (!username || !password) throw new Error('Username and Password required');
    await sql`INSERT INTO users (username, password) VALUES (${username}, ${password});`;
  console.log('Success');
} catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}