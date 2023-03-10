import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { createClient } from "contentful";

export async function GET() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      environment: "master", // defaults to 'master' if not set
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    });

    const result = await client.getEntries();
    console.log(result)
    return NextResponse.json({ posts: result.items });
  } catch (error) {
    console.error(error);
    // return res.status(500).json({ error: "Failed to fetch posts" });
  }
}
