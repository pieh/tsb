import { NextResponse } from "next/server";
import { createClient } from "contentful";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      environment: "master",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    });

    const result = await client.getEntries({
      content_type: "post",
      "fields.slug[all]": params.slug,
    });

    return NextResponse.json({ post: result.items?.[0] || null });
  } catch (error) {
    console.error(error);
    // return res.status(500).json({ error: "Failed to fetch posts" });
  }
}
