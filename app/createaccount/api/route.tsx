import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const password = searchParams.get('password');
  const pconfirm = searchParams.get('pconfirm');
 
  
  try {
    if (!username || !password) throw new Error('Username and Password required');
    if (password != pconfirm) throw new Error('Password and Passord Confirmation Must Match')
    await sql`INSERT INTO users (username, password) VALUES (${username}, ${password});`;
  console.log('Success');
} catch (error) {
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
 
  const users = await sql`SELECT username FROM users;`;
  return NextResponse.json({ users }.users.rows, { status: 200 });
}