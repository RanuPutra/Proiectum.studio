import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    let name = ""
    let email = ""
    let company = ""
    let service = ""
    let budget = ""
    let message = ""
    let allData: Record<string, string> = {}

    const contentType = req.headers.get("content-type") || ""

    if (contentType.includes("application/json")) {
      const json = await req.json()
      name = json["Name"] || json["name"] || ""
      email = json["Email"] || json["email"] || ""
      company = json["Company"] || json["company"] || ""
      service = json["What do you need?"] || json["service"] || ""
      budget = json["Budget"] || json["budget"] || ""
      message = json["Tell us about the project"] || json["message"] || ""
      allData = json
    } else {
      const formData = await req.formData()
      name = (formData.get("Name") as string) || (formData.get("name") as string) || ""
      email = (formData.get("Email") as string) || (formData.get("email") as string) || ""
      company = (formData.get("Company") as string) || (formData.get("company") as string) || ""
      service = (formData.get("What do you need?") as string) || (formData.get("service") as string) || ""
      budget = (formData.get("Budget") as string) || (formData.get("budget") as string) || ""
      message = (formData.get("Tell us about the project") as string) || (formData.get("message") as string) || ""

      formData.forEach((val, key) => {
        if (typeof val === "string") {
          allData[key] = val
        }
      })
    }

    console.log("=== NEW INQUIRY RECEIVED FOR PROIECTUM ===")
    console.log({
      to: "proiectumsstudio@gmail.com",
      timestamp: new Date().toISOString(),
      name,
      email,
      company,
      service,
      budget,
      message,
      allFields: allData,
    })

    // If Web3Forms access key is configured in Vercel environment variables:
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY
    if (web3formsKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            to: "proiectumsstudio@gmail.com",
            from_name: "Proiectum Website Inquiry",
            subject: `New Project Inquiry from ${name || "Client"}`,
            name,
            email,
            company,
            service,
            budget,
            message,
          }),
        })
      } catch (err) {
        console.error("Web3Forms forward error:", err)
      }
    }

    // If Resend API key is configured in Vercel environment variables:
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Proiectum <onboarding@resend.dev>",
            to: ["proiectumsstudio@gmail.com"],
            subject: `New Project Inquiry: ${name || "Potential Client"}`,
            html: `
              <h2>New Project Inquiry — Proiectum</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company || "N/A"}</p>
              <p><strong>Service:</strong> ${service || "N/A"}</p>
              <p><strong>Budget:</strong> ${budget || "N/A"}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message || "N/A"}</p>
            `,
          }),
        })
      } catch (err) {
        console.error("Resend delivery error:", err)
      }
    }

    const acceptHeader = req.headers.get("accept") || ""
    if (acceptHeader.includes("text/html") && !contentType.includes("application/json")) {
      return NextResponse.redirect(new URL("/thank-you", req.url), 303)
    }

    return NextResponse.json(
      {
        success: true,
        ok: true,
        message: "Thank you for reaching out to Proiectum! We have received your inquiry.",
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Contact API handler error:", error)
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to submit inquiry" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    studio: "Proiectum Studio",
    email: "proiectumsstudio@gmail.com",
    endpoint: "/api/contact",
  })
}
