import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

/**
 * The above function is an asynchronous function that handles a POST request to create a new topic in
 * a MongoDB database.
 * @param request - The `request` parameter is an object that represents the incoming HTTP request. It
 * contains information about the request, such as the request method, headers, and body.
 * @returns a JSON response with a message "Topic Created" and a status code of 201.
 */
export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

/**
 * The above function is an asynchronous function that connects to a MongoDB database, retrieves all
 * topics, and returns them as a JSON response.
 * @returns a JSON response containing the topics retrieved from the MongoDB database.
 */
export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

/**
 * The above function is an asynchronous JavaScript function that deletes a topic from a MongoDB
 * database based on the provided ID.
 * @param request - The `request` parameter is an object that represents the incoming HTTP request. It
 * contains information about the request such as the URL, headers, and body. In this case, it is used
 * to extract the `id` parameter from the query string of the URL.
 * @returns a JSON response with a message "Topic deleted" and a status code of 200.
 */
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
