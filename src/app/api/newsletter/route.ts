import mailchimp, {
  type MemberErrorResponse,
} from "@mailchimp/mailchimp_marketing";
import { NextResponse } from "next/server";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY as string,
  server: process.env.MAILCHIMP_SERVER as string,
});

function isMemberErrorResponse(error: any): error is MemberErrorResponse {
  return !!(error as any).status;
}

export async function POST(request: Request, res: Response) {
  const bodyStream = await request.body?.getReader()?.read();
  const data = JSON.parse(new TextDecoder().decode(bodyStream?.value));

  if (!data.email) {
    return new Response("email is a amndatory field", {
      status: 400,
    });
  }

  try {
    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID as string,
      {
        email_address: data.email,
        merge_fields: {
          FNAME: data?.firstName || undefined,
        },
        status: "subscribed",
      }
    );

    return NextResponse.json({
      msg: "Members succesfully subscribed to newsletter",
    });
  } catch (error: unknown) {
    if (isMemberErrorResponse(error)) {
      return new Response("Members already exist", { status: error.status });
    }

    return new Response("Unexpected error while adding member to newsletter", {
      status: 500,
    });
  }
}
