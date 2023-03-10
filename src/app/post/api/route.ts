import { NextResponse } from "next/server";
import { createClient } from "contentful";

export async function GET(request: Request) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      environment: "master",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    });

    const { searchParams } = new URL(request.url);
    const tag = searchParams.get("tag");

    if (!tag) {
      throw new Error("tag is a mandatory field");
    }

    const result = await client.getEntries({
      content_type: "post",
      "metadata.tags.sys.id[all]": tag,
      select:
        "fields.title,fields.slug,fields.smallIntro,fields.thumbnailImage",
    });

    return NextResponse.json({ posts: result.items.slice(0, 3) });
  } catch (error) {
    console.error(error);
    // return res.status(500).json({ error: "Failed to fetch posts" });
  }
}
