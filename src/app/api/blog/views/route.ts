import fs from "fs";
import path from "path";

// Path to the views JSON file
const viewsFilePath = path.join(process.cwd(), "data", "views.json");

// Helper function to read the views from the JSON file
function readViewsFile() {
  const fileContent = fs.readFileSync(viewsFilePath, "utf-8");
  return JSON.parse(fileContent);
}

// Helper function to write the views to the JSON file
function writeViewsFile(views: Record<string, number>) {
  fs.writeFileSync(viewsFilePath, JSON.stringify(views, null, 2));
}

// GET endpoint to fetch all view counts
export async function GET() {
  try {
    const views = readViewsFile();
    return new Response(JSON.stringify(views), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to read views data" }),
      { status: 500 }
    );
  }
}

// POST endpoint to increment the view count for a specific slug
export async function POST(req: Request) {
  try {
    const { slug } = await req.json();

    if (!slug) {
      return new Response(
        JSON.stringify({ error: "Missing slug in the request body" }),
        { status: 400 }
      );
    }

    const views = readViewsFile();

    // Increment the view count for the specific slug
    views[slug] = (views[slug] || 0) + 1;

    // Write the updated views back to the JSON file
    writeViewsFile(views);

    return new Response(JSON.stringify({ views: views[slug] }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to update views data" }),
      { status: 500 }
    );
  }
}
